import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Lugares } from 'src/app/models/lugares.model';
import { LugaresService } from 'src/app/services/lugares.service';


export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
  equivalencia: String;
}

var datosLugares: Lugares[];


var codigo = '';
var descripcion = '';
var empresa = '';
var equivalencia = '';

@Component({
  selector: 'app-lugares-de-inversion',
  templateUrl: './lugares-de-inversion.component.html',
  styleUrls: ['./lugares-de-inversion.component.scss'],
  providers: [LugaresService]
})
export class LugaresDeInversionComponent implements OnInit {

  public dataSource;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getLugares();
  }


  displayedColumns: string[] = [ 'codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //SELECTOR

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog,private _lugaresService : LugaresService) {}

  //CRud ------------ trae data ----------------



  public getLugares(){
    this._lugaresService.getLugares().subscribe(
      response => {
        if(response){
          datosLugares = response;
          console.log(datosLugares)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosLugares);
          this.dataSource.paginator = this.paginator;

        } 
      },
      error=>{
        console.log(<any>error);
      }

    )
  }

  buscar(id, descripcion2, empresa2, equivalencia2){
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    equivalencia = equivalencia2;
    console.log(codigo + " - " + descripcion + " - " + empresa)
  }

  // ----------------------------------------


  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarLugar, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');    
        this.getLugares();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarLugar, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        this.getLugares();
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarLugar, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        this.getLugares();
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerLugar, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        this.getLugares();
    });
  }
}

@Component({
  selector: 'editar-lugaresInversion',
  templateUrl: 'editar-lugaresInversion.html',
  styleUrls: ['./lugares-de-inversion.component.scss']
})
export class EditarLugar implements OnInit{

  ngOnInit() {
    this.lugares.codigo = codigo;
    this.lugares.descripcion = descripcion;
    this.lugares.empresa = empresa;
    this.lugares.equivalencia = equivalencia;
  }
  
  public lugares : Lugares ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<EditarLugar>,private snackBar: MatSnackBar, private _lugaresService : LugaresService) {
      this.lugares = new Lugares("","","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarLugar(){
    console.log(this.lugares)
    this._lugaresService.editarLugar(this.lugares).subscribe(
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
  selector: 'eliminar-lugaresInversion',
  templateUrl: 'eliminar-lugaresInversion.html',
  styleUrls: ['./lugares-de-inversion.component.scss']
})
export class EliminarLugar implements OnInit{

  ngOnInit() {
    this.lugares.codigo = codigo;
    this.lugares.descripcion = descripcion;
    this.lugares.empresa = empresa;
    this.lugares.equivalencia = equivalencia;
  }
  
  public lugares : Lugares ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<EliminarLugar>,private snackBar: MatSnackBar, private _lugaresService : LugaresService) {
      this.lugares = new Lugares("","","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarLugar(){    
    this._lugaresService.eliminarLugar(this.lugares).subscribe(
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
  selector: 'agregar-lugaresInversion',
  templateUrl: 'agregar-lugaresInversion.html',
  styleUrls: ['./lugares-de-inversion.component.scss']
})
export class AgregarLugar {
  
  public lugares : Lugares ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<AgregarLugar>,private snackBar: MatSnackBar, private _lugaresService : LugaresService) {
      this.lugares = new Lugares("","","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearAseguradora(){
    this.lugares.empresa = "1";
    this._lugaresService.crearLugar(this.lugares).subscribe(
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
  selector: 'ver-lugaresInversion',
  templateUrl: 'ver-lugaresInversion.html',
  styleUrls: ['./lugares-de-inversion.component.scss']
})

export class VerLugar implements OnInit{

  ngOnInit() {
    this.lugares.codigo = codigo;
    this.lugares.descripcion = descripcion;
    this.lugares.empresa = empresa;
    this.lugares.equivalencia = equivalencia;
  }
  
  public lugares : Lugares ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerLugar>,private snackBar: MatSnackBar, private _lugaresService : LugaresService) {
      this.lugares = new Lugares("","","","");

    }
    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
