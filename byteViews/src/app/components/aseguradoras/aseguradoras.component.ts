import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator, DialogPosition } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Aseguradora } from 'src/app/models/aseguradora.model';
import { AseguradorasService } from 'src/app/services/aseguradoras.service';


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
  providers : [AseguradorasService]

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
  constructor(public dialog: MatDialog, private _aseguradorasService : AseguradorasService) {
  }

  //CRUD --------------------- TRAER DATOS --------------------------
  



  public getAseguradoras(){
    this._aseguradorasService.getAseguradoras().subscribe(
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
        this.getAseguradoras();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarAseguradora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        this.getAseguradoras();
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarAseguradora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        this.getAseguradoras();
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
  templateUrl: 'editar-aseguradora.html',
  styleUrls: ['./aseguradoras.component.scss'],
  providers : [AseguradorasService]
})
export class EditarAseguradora implements OnInit{



  ngOnInit() {
    this.aseguradora.codigo = codigo;
    this.aseguradora.descripcion = descripcion;
    this.aseguradora.empresa = empresa;
  }

  public aseguradora : Aseguradora ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarAseguradora>, private snackBar: MatSnackBar,private _aseguradorasService : AseguradorasService) {
      this.aseguradora = new Aseguradora("","","");

    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  editarAseguradora(){
    console.log(this.aseguradora)
    this._aseguradorasService.editarAseguradora(this.aseguradora).subscribe(
      response => {
        if(response){
          this.status = 'ok';
          if(response.description === 'Editado Correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
              this.snackBar.open(response.description, "", {
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
  selector: 'eliminar-aseguradora',
  templateUrl: 'eliminar-aseguradora.html',
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
    public dialogRef: MatDialogRef<EliminarAseguradora>, private snackBar: MatSnackBar,private _aseguradorasService : AseguradorasService) {
      this.aseguradora = new Aseguradora("","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarAseguradora(){    
    this._aseguradorasService.eliminarAseguradora(this.aseguradora).subscribe(
      response=>{
        if(!response){
          this.status = "error"
        }else{
          this.status = "Success"
          if(response.description === 'Eliminado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {
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
  selector: 'agregar-aseguradora',
  templateUrl: 'agregar-aseguradora.html',
  styleUrls: ['./aseguradoras.component.scss'],
  providers : [AseguradorasService]

})
export class AgregarAseguradora {
  
  public aseguradora : Aseguradora ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<AgregarAseguradora>,private snackBar: MatSnackBar, private _aseguradorasService : AseguradorasService) {
      this.aseguradora = new Aseguradora("","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  crearAseguradora(){
    this.aseguradora.empresa = "1";
    this._aseguradorasService.crearAseguradora(this.aseguradora).subscribe(
      response => {
        if(response){
          this.status = 'ok';
          if(response.description === 'Agregado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {
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
  selector: 'ver-aseguradora',
  templateUrl: 'ver-aseguradora.html',
  styleUrls: ['./aseguradoras.component.scss'],
  providers : [AseguradorasService]

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
    public dialogRef: MatDialogRef<VerAseguradora>,private snackBar: MatSnackBar, private _aseguradorasService : AseguradorasService) {
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