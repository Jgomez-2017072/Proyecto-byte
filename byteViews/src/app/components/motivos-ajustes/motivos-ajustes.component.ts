import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MotivoAjusteService } from 'src/app/services/motivo-ajuste.service';
import { MotivoAjuste } from 'src/app/models/motivo-ajuste.model';


export interface PeriodicElement {
  afectaSaldoCapital: String,
  afectaSaldoInteres: String,
  afectaSaldoMora: String,
  codigo: String,
  code: String,
  descripcion: String,
  descripcion2: String,
  descripcion3: String,
  empresa: String,
  description: String,
  errorCore: String
}

var datosMotivosAjustes: MotivoAjuste[];

var afectaSaldoCapital = '';
var afectaSaldoInteres = '';
var afectaSaldoMora = '';
var codigo = '';
var descripcion = '';
var descripcion2 = '';
var descripcion3 = '';
var empresa = '';

@Component({
  selector: 'app-motivos-ajustes',
  templateUrl: './motivos-ajustes.component.html',
  styleUrls: ['./motivos-ajustes.component.scss']
})
export class MotivosAjustesComponent implements OnInit {

  public dataSource;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getMotivosAjustes()
 }


  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar','ver'];

  //SELECTOR

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog,
    private _motivosAjustesService : MotivoAjusteService) {}

  public getMotivosAjustes(){
    this._motivosAjustesService.getMotivosAjustes().subscribe(
      response => {
        if(response){
          datosMotivosAjustes = response;
          console.log(datosMotivosAjustes)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosMotivosAjustes);
          this.dataSource.paginator = this.paginator;

        } 
      },
      error=>{
        console.log(<any>error);
      }

    )
  }


  buscar(id, descripcion2, empresa2, descripcionDos2, descripcionTres2, 
    afectaSaldoCapital2, afectaSaldoInteres2, afectaSaldoMora2 ){
    codigo = id;
    descripcion = descripcion2;
    descripcion2 = descripcionDos2;
    descripcion3 = descripcionTres2;
    afectaSaldoCapital = afectaSaldoCapital2,
    afectaSaldoInteres = afectaSaldoInteres2,
    afectaSaldoMora = afectaSaldoMora2,
    empresa = empresa2;
    console.log(codigo + " - " + descripcion + " - " + empresa + " - " + afectaSaldoCapital + " - " + 
    afectaSaldoInteres + " - " + afectaSaldoMora)
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMotivoAjuste, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
      this.getMotivosAjustes();    
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMotivoAjuste, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getMotivosAjustes();    
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarMotivoAjuste, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getMotivosAjustes();    
    });
  }
  openDialog4(): void {
    const dialogRef = this.dialog.open(VerMotivoAjuste, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-motivos-ajustes',
  templateUrl: 'editar-motivos-ajustes.html',
  styleUrls: ['./motivos-ajustes.component.scss']
})
export class EditarMotivoAjuste {



  ngOnInit() {
    //this.buscarAseguradora();
    this.motivoAjuste.codigo = codigo;
    this.motivoAjuste.descripcion = descripcion;
    this.motivoAjuste.descripcion2 = descripcion2;
    this.motivoAjuste.descripcion3 = descripcion3;
    this.motivoAjuste.empresa = empresa;
    this.motivoAjuste.afectaSaldoCapital = afectaSaldoCapital;
    this.motivoAjuste.afectaSaldoInteres = afectaSaldoInteres;
    this.motivoAjuste.afectaSaldoMora = afectaSaldoMora;
    this.motivoAjuste.empresa = empresa;
  }

  public motivoAjuste : MotivoAjuste;
  public status;
  constructor(
    public dialogRef: MatDialogRef<EliminarMotivoAjuste>, 
    private snackBar: MatSnackBar,
    private _motivosAjustesService : MotivoAjusteService) {
      this.motivoAjuste = new MotivoAjuste("","","","","","","","","","","");
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  editarMotivoAjuste(){
    console.log(this.motivoAjuste)
    this._motivosAjustesService.editarMotivoAjuste(this.motivoAjuste).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if(response.description === 'Editado Correctamente'){
              this.dialogRef.close();
           // openSnackBar() {
            //  super.getAlmacenadoras();
              this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
                duration: 2100, horizontalPosition: 'end'
              });
           // }
          }else{
              this.snackBar.open(response.description, "", {panelClass: ['colorError'],
                duration: 3100, horizontalPosition: 'end'
              });
          }
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error';
        }
      }
    )
  }
}

@Component({
  selector: 'eliminar-motivos-ajustes',
  templateUrl: 'eliminar-motivos-ajustes.html',
  styleUrls: ['./motivos-ajustes.component.scss']
})
export class EliminarMotivoAjuste {

  ngOnInit() {
    //this.buscarAseguradora();
    this.motivoAjuste.codigo = codigo;
    this.motivoAjuste.descripcion = descripcion;
    this.motivoAjuste.descripcion2 = descripcion2;
    this.motivoAjuste.descripcion3 = descripcion3;
    this.motivoAjuste.empresa = empresa;
    this.motivoAjuste.afectaSaldoCapital = afectaSaldoCapital;
    this.motivoAjuste.afectaSaldoInteres = afectaSaldoInteres;
    this.motivoAjuste.afectaSaldoMora = afectaSaldoMora;
    this.motivoAjuste.empresa = empresa;
  }

  public motivoAjuste : MotivoAjuste;
  public status;
  
  constructor(
    public dialogRef: MatDialogRef<EliminarMotivoAjuste>, 
    private snackBar: MatSnackBar,
    private _motivosAjustesService : MotivoAjusteService) {
      this.motivoAjuste = new MotivoAjuste("","","","","","","","","","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarMotivoAjuste(){    
    this._motivosAjustesService.eliminarMotivoAjuste(this.motivoAjuste).subscribe(
      response => {
        if (!response) {
          this.status = "error"
        } else {
          this.status = "Success"
          if(response.description === 'Eliminado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {panelClass: ['colorError'],
              duration: 3100, horizontalPosition: 'end'
            });
          }
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = "error";
        }
      }
    )
  }
}

@Component({
  selector: 'agregar-motivos-ajustes',
  templateUrl: 'agregar-motivos-ajustes.html',
  styleUrls: ['./motivos-ajustes.component.scss']
})
export class AgregarMotivoAjuste {
  
  public motivoAjuste : MotivoAjuste ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarMotivoAjuste>, 
    private snackBar: MatSnackBar,
    private _motivosAjustesService : MotivoAjusteService) {
      this.motivoAjuste = new MotivoAjuste("","","","","","","","","","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  crearMotivoAjuste(){
    this.motivoAjuste.empresa = "1";
    this._motivosAjustesService.crearMotivoAjuste(this.motivoAjuste).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if(response.description === 'Agregado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {panelClass: ['colorError'],
              duration: 3100, horizontalPosition: 'end'
            });
          }
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error';
          
        }
      }
    )
  }

}


@Component({
  selector: 'ver-motivo-ajuste',
  templateUrl: 'ver-motivo-ajuste.html',
  styleUrls: ['./motivos-ajustes.component.scss'],
  providers : [MotivoAjusteService]

})
export class VerMotivoAjuste implements OnInit{

  ngOnInit() {    
    this.motivoAjuste.codigo = codigo;
    this.motivoAjuste.descripcion = descripcion;
    this.motivoAjuste.descripcion2 = descripcion2;
    this.motivoAjuste.descripcion3 = descripcion3;
    this.motivoAjuste.empresa = empresa;
    this.motivoAjuste.afectaSaldoCapital = afectaSaldoCapital;
    this.motivoAjuste.afectaSaldoInteres = afectaSaldoInteres;
    this.motivoAjuste.afectaSaldoMora = afectaSaldoMora;
    this.motivoAjuste.empresa = empresa;
  }
  
  public motivoAjuste : MotivoAjuste ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerMotivoAjuste>,
    private snackBar: MatSnackBar, 
    private _motivosAjustesService : MotivoAjusteService) {
      this.motivoAjuste = new MotivoAjuste("","","","","","","","","","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}