import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator, MatTab } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TipoDeduccion } from 'src/app/models/tipo-deduccion.model';
import { TipoDeduccionService } from 'src/app/services/tipo-deduccion.service';

export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosTipoDeduccion: TipoDeduccion[]//Modelo de Deduccion

var codigo = '';
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-tipos-de-deducciones',
  templateUrl: './tipos-de-deducciones.component.html',
  styleUrls: ['./tipos-de-deducciones.component.scss'],
  providers : [TipoDeduccionService]
})
export class TiposDeDeduccionesComponent implements OnInit {
  public dataSource
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getTiposDeduccion();
  }

  displayedColumns: string[] = ['codigo', 'descripcion' ,'editar', 'eliminar', 'ver'];


  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _tipoDeduccionService : TipoDeduccionService) {}

  //CRUD----------------------------------- TRAER DATOS-------------------------------------

  public getTiposDeduccion(){
    this._tipoDeduccionService.getTiposDeduccion().subscribe(
      response => {
        if(response){
          datosTipoDeduccion = response;
          console.log(datosTipoDeduccion);
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosTipoDeduccion);
          this.dataSource.paginator = this.paginator
        }
      },
      error => {
        console.log(<any>error);    
      }
    )
  }

  buscar(id, descripcion2, empresa2){
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    console.log(codigo + " - " + descripcion + " - " + empresa)
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarTipoDeDeduccion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

     
        this.getTiposDeduccion();
      
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTipoDeDeduccion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
        this.getTiposDeduccion();
      
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTipoDeDeduccion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
        this.getTiposDeduccion();
     
    });
  }
  
  openDialog4(): void {
    const dialogRef = this.dialog.open(VerTipoDeDeduccion, {
      width: '50%',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
        this.getTiposDeduccion();
      
    });
  }
}




@Component({
  selector: 'editar-tipo-de-deduccion',
  templateUrl: 'editar-tipo-de-deduccion.html',
  styleUrls: ['./tipos-de-deducciones.component.scss']
})

export class EditarTipoDeDeduccion {

  public tipoDeduccion : TipoDeduccion;
  public status;

  ngOnInit() {
    //Llenamos los label con la informacion.
    this.tipoDeduccion.codigo = codigo;
    this.tipoDeduccion.descripcion = descripcion;
    this.tipoDeduccion.empresa = empresa;
  }

  constructor(
    public dialogRef: MatDialogRef<EditarTipoDeDeduccion>, private snackBar: MatSnackBar, private _tipoDeduccionService: TipoDeduccionService) {
      this.tipoDeduccion = new TipoDeduccion('','','');
    }

   

  onNoClick(): void {
    this.dialogRef.close();
  }

    editarTipoDeduccion(){
      console.log(this.tipoDeduccion);
      this._tipoDeduccionService.editarTipoDeduccion(this.tipoDeduccion).subscribe(
        response => {
          if(response) {
            this.status = 'ok';
          if(response.description === 'Editado Correctamente'){
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
          if(error){
            console.log(<any>error);
            this.status = 'error';
          }
          this.snackBar.open("Verifique los datos!", "", { panelClass: ['colorError'],
          duration: 3100, horizontalPosition: 'end'
          });
  
        }
      )
    }

}

@Component({
  selector: 'eliminar-tipo-de-deduccion',
  templateUrl: 'eliminar-tipo-de-deduccion.html',
  styleUrls: ['./tipos-de-deducciones.component.scss']
})
export class EliminarTipoDeDeduccion {

  ngOnInit(){
    this.tipoDeduccion.codigo = codigo;
    this.tipoDeduccion.descripcion = descripcion;
    this.tipoDeduccion.empresa = empresa;
  }

  public tipoDeduccion : TipoDeduccion;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarTipoDeDeduccion>, private snackBar: MatSnackBar, private _tipoDeduccionService : TipoDeduccionService) {
      this.tipoDeduccion = new TipoDeduccion('','','');
    }

    
  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarTipoDeduccion(){
    this._tipoDeduccionService.eliminarTipoDeduccion(this.tipoDeduccion).subscribe(
      response => {
        if(!response) {
          this.status = 'error'
        }else{
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
        if(errorMessage != null){
          this.status = 'error'
        }
      }
    )
  }
}

@Component({
  selector: 'agregar-tipo-de-deduccion',
  templateUrl: 'agregar-tipo-de-deduccion.html',
  styleUrls: ['./tipos-de-deducciones.component.scss'],
  providers: [TipoDeduccionService]
})

export class AgregarTipoDeDeduccion {
  public tipoDeduccion : TipoDeduccion;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarTipoDeDeduccion>, private snackBar: MatSnackBar, private _tipoDeduccionService : TipoDeduccionService) {
      this.tipoDeduccion = new TipoDeduccion('','','')
    }

   
  onNoClick(): void {
    this.dialogRef.close();
  }

  crearTipoDeduccion() {
    this.tipoDeduccion.empresa = '1';
    this._tipoDeduccionService.crearTipoDeduccion(this.tipoDeduccion).subscribe(
      response => {
        if(response) {
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
        if(error){
          console.log(<any>error);
          this.status= 'error';
          this.snackBar.open("Verifique los datos!", "", { panelClass: ['colorError'],
          duration: 3100, horizontalPosition: 'end'
          });
  
        }
      }
    )
  }
}

  @Component({
    selector: 'ver-tipo-de-deduccion',
    templateUrl: 'ver-tipo-de-deduccion.html',
    styleUrls: ['./tipos-de-deducciones.component.scss'],
    providers : [TipoDeduccionService]
  })

  export class VerTipoDeDeduccion implements OnInit{
    ngOnInit() {
      this.tipoDeduccion.codigo = codigo;
      this.tipoDeduccion.descripcion = descripcion;
      this.tipoDeduccion.empresa = empresa;
    }
    public tipoDeduccion : TipoDeduccion;
    public status

    constructor(
      public dialogRef: MatDialogRef<VerTipoDeDeduccion>, private snackBar: MatSnackBar, private _tipoDeduccionService : TipoDeduccionService) {
        this.tipoDeduccion = new TipoDeduccion('','','')
      }

      onNoClick(): void {
        this.dialogRef.close();
      }

  }






