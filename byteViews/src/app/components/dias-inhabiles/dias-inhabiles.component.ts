import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DiaInhabilService } from 'src/app/services/dia-inhabil.service';
import { DiaInhabil } from 'src/app/models/dia-inhabil.model';


export interface PeriodicElement {
  descripcion: String;
  empresa: String;
  fechaFeriado: String;
  tipoFeriado: String;
}

var datosDiaInhabil: DiaInhabil[];


var descripcion = '';
var empresa = '';
var fechaFeriado;
var tipoFeriado = '';

@Component({
  selector: 'app-dias-inhabiles',
  templateUrl: './dias-inhabiles.component.html',
  styleUrls: ['./dias-inhabiles.component.scss'],
  providers : [DiaInhabilService]
})
export class DiasInhabilesComponent implements OnInit {

  public dataSource;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getDiasInhabiles()
 }


  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar','ver'];

  //SELECTOR

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //PARA LOS MODALS
  constructor(public dialog: MatDialog,
    private _diasInhabilesService : DiaInhabilService) {}

    public getDiasInhabiles(){
      this._diasInhabilesService.getDiasInhabiles().subscribe(
        response => {
          if(response){
            datosDiaInhabil = response;
            console.log(datosDiaInhabil)
            this.dataSource = new MatTableDataSource<PeriodicElement>(datosDiaInhabil);
            this.dataSource.paginator = this.paginator;
  
          } 
        },
        error=>{
          console.log(<any>error);
        }
  
      )
    }    
  
    buscar(descripcion2, empresa2, fechaFeriado2, tipoFeriado2){
      descripcion = descripcion2;
      empresa = empresa2;
      fechaFeriado = new Date(fechaFeriado2);
      fechaFeriado = fechaFeriado.toISOString();
      tipoFeriado = tipoFeriado2;
      console.log(descripcion + " - " + empresa + " - " + fechaFeriado+ " - " + tipoFeriado)
    }
  

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarDiaInhabil, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
      this.getDiasInhabiles();    
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarDiaInhabil, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDiasInhabiles();    
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarDiaInhabil, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDiasInhabiles();    
    });
  }
  openDialog4(): void {
    const dialogRef = this.dialog.open(VerDiaInhabil, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-dia-inhabil',
  templateUrl: 'editar-dias-inhabiles.html',
  styleUrls: ['./dias-inhabiles.component.scss']
})
export class EditarDiaInhabil {

  ngOnInit() {
    //this.buscarAseguradora();    
    this.diaInhabil.descripcion = descripcion;
    this.diaInhabil.empresa = empresa;
    this.diaInhabil.fechaFeriado = fechaFeriado;
    this.diaInhabil.tipoFeriado = tipoFeriado;
  }

  public diaInhabil : DiaInhabil ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarDiaInhabil>, 
    private snackBar: MatSnackBar,
    private _diasInhabilesService : DiaInhabilService) {
      this.diaInhabil = new DiaInhabil("","","","");
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
  editarDiaInhabil(){
    console.log(this.diaInhabil)
    this._diasInhabilesService.editarDiaInhabil(this.diaInhabil).subscribe(
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
  selector: 'eliminar-dia-inhabil',
  templateUrl: 'eliminar-dias-inhabiles.html',
  styleUrls: ['./dias-inhabiles.component.scss']
})
export class EliminarDiaInhabil {

  ngOnInit() {
    //this.buscarAseguradora();    
    this.diaInhabil.descripcion = descripcion;
    this.diaInhabil.empresa = empresa;
    fechaFeriado = new Date(fechaFeriado)
    this.diaInhabil.fechaFeriado = fechaFeriado;
    this.diaInhabil.tipoFeriado = tipoFeriado;
  }

  public diaInhabil : DiaInhabil ;
  public status;
  
  constructor(
    public dialogRef: MatDialogRef<EliminarDiaInhabil>, 
    private snackBar: MatSnackBar,
    private _diasInhabilesService : DiaInhabilService) {
      this.diaInhabil = new DiaInhabil("","","","");
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  eliminarDiaInhabil(){    
    this._diasInhabilesService.eliminarDiaInhabil(this.diaInhabil).subscribe(
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
  selector: 'agregar-almacenadora',
  templateUrl: 'agregar-dias-inhabiles.html',
  styleUrls: ['./dias-inhabiles.component.scss'],
  providers : [DiaInhabilService]
})
export class AgregarDiaInhabil {

  public diaInhabil : DiaInhabil ;
  public status;
  
  constructor(
    public dialogRef: MatDialogRef<AgregarDiaInhabil>, 
    private snackBar: MatSnackBar,
    private _diasInhabilesService : DiaInhabilService) {
      this.diaInhabil = new DiaInhabil("","","","");
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  crearDiaInhabil(){
    this.diaInhabil.empresa = "1";
    this._diasInhabilesService.crearDiaInhabil(this.diaInhabil).subscribe(
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
  selector: 'ver-dia-inhabil',
  templateUrl: 'ver-dia-inhabil.html',
  styleUrls: ['./dias-inhabiles.component.scss'],
  providers : [DiaInhabilService]

})
export class VerDiaInhabil implements OnInit{

  ngOnInit() {
    //this.buscarAseguradora();    
    this.diaInhabil.descripcion = descripcion;
    this.diaInhabil.empresa = empresa;
    fechaFeriado = new Date(fechaFeriado).toLocaleDateString();
    this.diaInhabil.fechaFeriado = fechaFeriado;
    this.diaInhabil.fechaFeriado =this.diaInhabil.fechaFeriado;
    this.diaInhabil.tipoFeriado = tipoFeriado;
  }

  public diaInhabil : DiaInhabil ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerDiaInhabil>,
    private snackBar: MatSnackBar, 
    private _diasInhabilesService : DiaInhabilService) {
      this.diaInhabil = new DiaInhabil("","","","");
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}