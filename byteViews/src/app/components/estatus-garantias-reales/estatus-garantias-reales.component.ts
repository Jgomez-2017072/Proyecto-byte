import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { StatusGarantiaReal } from 'src/app/models/statusGarantiaReal.model';
import { StatusGarantiaRealService } from 'src/app/services/status-garantia-real.service';


export interface PeriodicElement {
  codigo: String;
  descripcion: String;
}


var datosStatusGarantiaReal: StatusGarantiaReal[];


var codigo = '';
var descripcion = '';



@Component({
  selector: 'app-estatus-garantias-reales',
  templateUrl: './estatus-garantias-reales.component.html',
  styleUrls: ['./estatus-garantias-reales.component.scss'],
  providers : [StatusGarantiaRealService]
})
export class EstatusGarantiasRealesComponent implements OnInit {
  public dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
   this.getStatusGarantiaReal()
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];
  
  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _statusGarantiaRealService : StatusGarantiaRealService) {}


//CRUD --------------------- TRAER DATOS --------------------------
  



public getStatusGarantiaReal(){
  this._statusGarantiaRealService.getStatusGarantiaReal().subscribe(
    response => {
      if(response){
        datosStatusGarantiaReal = response;
        console.log(datosStatusGarantiaReal)
        this.dataSource = new MatTableDataSource<PeriodicElement>(datosStatusGarantiaReal);
        this.dataSource.paginator = this.paginator;

      } 
    },
    error=>{
      console.log(<any>error);
    }

  )
}

buscar(id, descripcion2){
  codigo = id;
  descripcion = descripcion2;
 
  console.log(codigo + " - " + descripcion)
}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarEstatusGarantiasReales, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

     
        this.getStatusGarantiaReal();
      
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarEstatusGarantiasReales, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

     
        this.getStatusGarantiaReal();
    
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarEstatusGarantiasReales, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
        this.getStatusGarantiaReal();
      
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerStatusGarantiaReal, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'editar-estatus-garantias-reales',
  templateUrl: 'editar-estatus-garantias-reales.html',
  styleUrls: ['./estatus-garantias-reales.component.scss']
})
export class EditarEstatusGarantiasReales {

  ngOnInit() {
    //this.buscarAseguradora();
    this.statusGarantiaReal.codigo = codigo;
    this.statusGarantiaReal.descripcion = descripcion;
    
  }

  public statusGarantiaReal : StatusGarantiaReal ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarEstatusGarantiasReales>, private snackBar: MatSnackBar, private _statusGarantiaRealService : StatusGarantiaRealService) {
      this.statusGarantiaReal = new StatusGarantiaReal("","");
    }

   

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarStatusGarantiaReal(){
    console.log(this.statusGarantiaReal)
    this._statusGarantiaRealService.editarStatusGarantiaReal(this.statusGarantiaReal).subscribe(
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
      }
    )
  }
}

@Component({
  selector: 'eliminar-estatus-garantias-reales',
  templateUrl: 'eliminar-estatus-garantias-reales.html',
  styleUrls: ['./estatus-garantias-reales.component.scss']
})
export class EliminarEstatusGarantiasReales {
  
  ngOnInit() {
    //this.buscarAseguradora();
    this.statusGarantiaReal.codigo = codigo;
    this.statusGarantiaReal.descripcion = descripcion;
    
  }
  
  public statusGarantiaReal : StatusGarantiaReal ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarEstatusGarantiasReales>, private snackBar: MatSnackBar, private _statusGarantiaRealService : StatusGarantiaRealService) {
      this.statusGarantiaReal = new StatusGarantiaReal("","");
    }

    

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarStatusGarantiaReal(){    
    this._statusGarantiaRealService.eliminarStatusGarantiaReal(this.statusGarantiaReal).subscribe(
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
  selector: 'agregar-estatus-garantias-reales',
  templateUrl: 'agregar-estatus-garantias-reales.html',
  styleUrls: ['./estatus-garantias-reales.component.scss'],
  providers : [StatusGarantiaRealService]
})
export class AgregarEstatusGarantiasReales{
  public statusGarantiaReal : StatusGarantiaReal;
  public status;  
  constructor(
    public dialogRef: MatDialogRef<AgregarEstatusGarantiasReales>, private snackBar: MatSnackBar, private _statusGarantiaRealService : StatusGarantiaRealService) {
      this.statusGarantiaReal = new StatusGarantiaReal("","");
    }

   

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearStatusGarantiaReal(){
    
    this._statusGarantiaRealService.crearStatusGarantiaReal(this.statusGarantiaReal).subscribe(
      response => {
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
        }
      }

    )
  }

}


@Component({
  selector: 'ver-status-garantia-real',
  templateUrl: 'ver-status-garantia-real.html',
  styleUrls: ['./estatus-garantias-reales.component.scss'],
  providers : [StatusGarantiaRealService]

})
export class VerStatusGarantiaReal implements OnInit{

  ngOnInit() {
    this.statusGarantiaReal.codigo = codigo;
    this.statusGarantiaReal.descripcion = descripcion;
    
  }
  
  public statusGarantiaReal : StatusGarantiaReal ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerStatusGarantiaReal>,private snackBar: MatSnackBar) {
      this.statusGarantiaReal = new StatusGarantiaReal("","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  

}