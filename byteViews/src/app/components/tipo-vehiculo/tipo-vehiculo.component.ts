import { Component, OnInit,  Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TipoVehiculo } from 'src/app/models/tipoVehiculo.model';
import { TipoVehiculoService } from 'src/app/services/tipoVehiculo.service';



export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosTipoVehiculo: TipoVehiculo[];

var codigo = '';
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-tipo-vehiculo',
  templateUrl: './tipo-vehiculo.component.html',
  styleUrls: ['./tipo-vehiculo.component.scss'],
  providers : [TipoVehiculoService]
})
export class TipoVehiculoComponent implements OnInit {

  public dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getTipoVehiculo();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];
  
  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _tipoVehiculoService : TipoVehiculoService) {}


  public getTipoVehiculo(){
    this._tipoVehiculoService.getTipoVehiculo().subscribe(
      response => {
        if(response){
          datosTipoVehiculo = response;
          console.log(datosTipoVehiculo)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosTipoVehiculo);
          this.dataSource.paginator = this.paginator;

        } 
      },
      error=>{
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
    const dialogRef = this.dialog.open(EditarTipoVehiculo, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
        this.getTipoVehiculo();
     
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTipoVehiculo, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

     
        this.getTipoVehiculo();
     
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTipoVehiculo, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

     
        this.getTipoVehiculo();
     
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerTipoVehiculo, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
    });
  }

}


@Component({
  selector: 'editar-tipo-vehiculo',
  templateUrl: 'editar-tipo-vehiculo.html',
  styleUrls: ['./tipo-vehiculo.component.scss']
})
export class EditarTipoVehiculo implements OnInit{

  ngOnInit() {
    //this.buscarAseguradora();
    this.tipoVehiculo.codigo = codigo;
    this.tipoVehiculo.descripcion = descripcion;
    this.tipoVehiculo.empresa = empresa;
  }

  public tipoVehiculo : TipoVehiculo ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarTipoVehiculo>, private snackBar: MatSnackBar, private _tipoVehiculoService : TipoVehiculoService) {
      this.tipoVehiculo = new TipoVehiculo("","","");
    }

    

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarTipoVehiculo(){
    console.log(this.tipoVehiculo)
    this._tipoVehiculoService.editarTipoVehiculo(this.tipoVehiculo).subscribe(
      response => {
        if(response){
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
  selector: 'eliminar-tipo-vehiculo',
  templateUrl: 'eliminar-tipo-vehiculo.html',
  styleUrls: ['./tipo-vehiculo.component.scss']
})
export class EliminarTipoVehiculo implements OnInit {

  ngOnInit() {
    //this.buscarAseguradora();
    this.tipoVehiculo.codigo = codigo;
    this.tipoVehiculo.descripcion = descripcion;
    this.tipoVehiculo.empresa = empresa;
  }
  
  public tipoVehiculo : TipoVehiculo ;
  public status;
  
  constructor(
    public dialogRef: MatDialogRef<EliminarTipoVehiculo>, private snackBar: MatSnackBar, private _tipoVehiculoService : TipoVehiculoService) {
      this.tipoVehiculo = new TipoVehiculo("","","");
    }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarTipoVehiculo(){    
    this._tipoVehiculoService.eliminarTipoVehiculo(this.tipoVehiculo).subscribe(
      response=>{
        if(!response){
          this.status = "error"
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
          this.status = "error";
        }
      }
    )
  }
}

@Component({
  selector: 'agregar-tipo-vehiculo',
  templateUrl: 'agregar-tipo-vehiculo.html',
  styleUrls: ['./tipo-vehiculo.component.scss'],
  providers : [TipoVehiculoService]
})
export class AgregarTipoVehiculo {
  
  public tipoVehiculo : TipoVehiculo;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarTipoVehiculo>, private snackBar: MatSnackBar, private _tipoVehiculoService : TipoVehiculoService) {
      this.tipoVehiculo = new TipoVehiculo("","","");
    }

   

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearTipoVehiculo(){
    this.tipoVehiculo.empresa = "1";
    this._tipoVehiculoService.crearTipoVehiculo(this.tipoVehiculo).subscribe(
      response =>{
        if(response){
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
          this.status = 'error';
          this.snackBar.open("Verifique los datos!", "", { panelClass: ['colorError'],
          duration: 3100, horizontalPosition: 'end'
          });
        }
      }
    )
  }

}

@Component({
  selector: 'ver-tipo-vehiculo',
  templateUrl: 'ver-tipo-vehiculo.html',
  styleUrls: ['./tipo-vehiculo.component.scss'],
  providers: [TipoVehiculoService]
})
export class VerTipoVehiculo implements OnInit{
  ngOnInit(){
    this.tipoVehiculo.codigo = codigo;
    this.tipoVehiculo.descripcion = descripcion;
    this.tipoVehiculo.empresa = empresa;
  }

  public tipoVehiculo : TipoVehiculo;
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerTipoVehiculo>,private snackBar: MatSnackBar) {
      this.tipoVehiculo = new TipoVehiculo("","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}




