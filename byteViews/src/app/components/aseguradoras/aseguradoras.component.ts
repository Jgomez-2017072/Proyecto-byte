import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator, DialogPosition } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { RequerimientosService } from 'src/app/services/requerimientos.service';
import { Aseguradora } from 'src/app/models/aseguradora.model';


export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosAseguradora: Aseguradora[];


var codigo = '';
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-aseguradoras',
  templateUrl: './aseguradoras.component.html',

  styleUrls: ['./aseguradoras.component.scss'],
  providers : [RequerimientosService]

})

export class AseguradorasComponent implements OnInit {

  public dataSource;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAseguradoras()
 }


  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar','ver'];

  //SELECTOR

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _requerimientosService : RequerimientosService) {
  }

  //CRUD --------------------- TRAER DATOS --------------------------
  



  public getAseguradoras(){
    this._requerimientosService.getAseguradoras().subscribe(
      response => {
        if(response){
          datosAseguradora = response;
          console.log(datosAseguradora)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosAseguradora);
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

  

  // ---------------------------------------------------

 openDialog1(): void {
    const dialogRef = this.dialog.open(EditarAseguradora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getAseguradoras();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarAseguradora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      setTimeout(() => {
        this.getAseguradoras();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarAseguradora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      setTimeout(() => {
        this.getAseguradoras();
      }, 800);
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerAseguradora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}



@Component({
  selector: 'editar-aseguradora',
  templateUrl: './editar-aseguradora.html',
  styleUrls: ['./aseguradoras.component.scss']
})
export class EditarAseguradora implements OnInit{

  ngOnInit() {
    //this.buscarAseguradora();
    this.aseguradora.codigo = codigo;
    this.aseguradora.descripcion = descripcion;
    this.aseguradora.empresa = empresa;
  }

  public aseguradora : Aseguradora ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarAseguradora>, private snackBar: MatSnackBar,private _requerimientosService : RequerimientosService) {
      this.aseguradora = new Aseguradora("","","");
    }
    

  openSnackBar() {
    this.snackBar.open("Registro Actualizado!", "", {
      duration: 2100, horizontalPosition : 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarAseguradora(){
    console.log(this.aseguradora)
    this._requerimientosService.editarAseguradora(this.aseguradora).subscribe(
      response => {
        if(response){
          this.status = 'ok';
          console.log(response);
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
  selector: 'eliminar-aseguradora',
  templateUrl: './eliminar-aseguradora.html',
  styleUrls: ['./aseguradoras.component.scss']
})
export class EliminarAseguradora implements OnInit {

  ngOnInit() {
    //this.buscarAseguradora();
    this.aseguradora.codigo = codigo;
    this.aseguradora.descripcion = descripcion;
    this.aseguradora.empresa = empresa;
  }
  
  public aseguradora : Aseguradora ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarAseguradora>, private snackBar: MatSnackBar,private _requerimientosService : RequerimientosService) {
      this.aseguradora = new Aseguradora("","","");

    }

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarAseguradora(){    
    this._requerimientosService.eliminarAseguradora(this.aseguradora).subscribe(
      response=>{
        if(!response){
          this.status = "error"
        }else{
          this.status = "Success"
          console.log(response)
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
  selector: 'agregar-aseguradora',
  templateUrl: 'agregar-aseguradora.html',
  styleUrls: ['./aseguradoras.component.scss'],
  providers : [RequerimientosService]

})
export class AgregarAseguradora {
  
  public aseguradora : Aseguradora ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<AgregarAseguradora>,private snackBar: MatSnackBar, private _requerimientosService : RequerimientosService) {
      this.aseguradora = new Aseguradora("","","");

    }

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  crearAseguradora(){
    this.aseguradora.empresa = "1";
    this._requerimientosService.crearAseguradora(this.aseguradora).subscribe(
      response => {
        if(response){
          this.status = 'ok';
          console.log(response);
          
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
  selector: 'ver-aseguradora',
  templateUrl: 'ver-aseguradora.html',
  styleUrls: ['./aseguradoras.component.scss'],
  providers : [RequerimientosService]

})
export class VerAseguradora implements OnInit{

  ngOnInit() {
    this.aseguradora.codigo = codigo;
    this.aseguradora.descripcion = descripcion;
    this.aseguradora.empresa = empresa;
    //this.buscarAseguradora();
  }
  
  public aseguradora : Aseguradora ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerAseguradora>,private snackBar: MatSnackBar, private _requerimientosService : RequerimientosService) {
      this.aseguradora = new Aseguradora("","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  /*buscarAseguradora(){
      this._requerimientosService.buscarAseguradora(this.aseguradora.codigo).subscribe(
        response=>{
          console.log(response)
          this.aseguradora = response
          if(!response){
            this.status = "error"
          }else{
            this.status = "Success"
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
  }*/

}