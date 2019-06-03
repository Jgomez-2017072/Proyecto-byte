import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Instancia } from 'src/app/models/instancia.model';
import { InstanciaService } from 'src/app/services/instancia.service';

export interface PeriodicElement {
  codigoInstancia: String;
  descripcion: String;
  empresa: String; 
}


var datosInstancia: Instancia[];


var codigoInstancia = '';
var codigo = '';
var descripcion = '';
var empresa = '';


@Component({
  selector: 'app-instancia',
  templateUrl: './instancia.component.html',
  styleUrls: ['./instancia.component.scss']
})
export class InstanciaComponent implements OnInit {

  public dataSource;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getInstancias();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog,private _instanciasService : InstanciaService) {}


  //Crud -------------- Trae datos -----------------------

  
  public getInstancias(){
    this._instanciasService.getInstancias().subscribe(
      response => {
        if(response){
          datosInstancia = response;
          console.log(datosInstancia)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosInstancia);
          this.dataSource.paginator = this.paginator;

        } 
      },
      error=>{
        console.log(<any>error);
      }

    )
  }

  buscar(id, descripcion2, empresa2){
    codigoInstancia = id; 
    descripcion = descripcion2;
    empresa = empresa2;
    codigo = id;
    console.log(codigoInstancia + " - " + descripcion + " - " + empresa)
  }


  //----------------------------------------------------------


  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarInstancia, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getInstancias();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarInstancia, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getInstancias();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarInstancia, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getInstancias();
      }, 800);
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerInstancia, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getInstancias();
      }, 800);
    });
  }
}

@Component({
  selector: 'editar-instancia',
  templateUrl: 'editar-instancia.html',
  styleUrls: ['./instancia.component.scss']
})
export class EditarInstancia implements OnInit{

  ngOnInit() {
    this.instancia.codigoInstancia = codigoInstancia;
    this.instancia.codigo = codigo;
    this.instancia.descripcion = descripcion;
    this.instancia.empresa = empresa;
  }

  public instancia : Instancia ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarInstancia>, private snackBar: MatSnackBar,private _instanciasService : InstanciaService) {
      this.instancia = new Instancia("","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Actualizado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarInstancia(){
    console.log(this.instancia)
    this._instanciasService.editarInstancia(this.instancia).subscribe(
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
  selector: 'eliminar-instancia',
  templateUrl: 'eliminar-instancia.html',
  styleUrls: ['./instancia.component.scss']
})
export class EliminarInstancia implements OnInit{

  ngOnInit() {
    this.instancia.codigoInstancia = codigoInstancia;
    this.instancia.descripcion = descripcion;
    this.instancia.empresa = empresa;
  }

  public instancia : Instancia ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarInstancia>, private snackBar: MatSnackBar,private _instanciasService : InstanciaService) {
      this.instancia = new Instancia("","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarInstancia(){    
    this._instanciasService.eliminarInstancia(this.instancia).subscribe(
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
  selector: 'agregar-instancia',
  templateUrl: 'agregar-instancia.html',
  styleUrls: ['./instancia.component.scss']
})
export class AgregarInstancia {
  
  public instancia : Instancia ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarInstancia>, private snackBar: MatSnackBar, private _instanciasService : InstanciaService) {
      this.instancia = new Instancia("","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearInstancia(){
    this.instancia.empresa = "1";
    this._instanciasService.crearInstancia(this.instancia).subscribe(
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
  selector: 'ver-instancia',
  templateUrl: 'ver-instancia.html',
  styleUrls: ['./instancia.component.scss']
})

export class VerInstancia implements OnInit{

  ngOnInit() {
    this.instancia.codigoInstancia = codigoInstancia;
    this.instancia.descripcion = descripcion;
    this.instancia.empresa = empresa;
  }

  public instancia : Instancia ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarInstancia>, private snackBar: MatSnackBar,private _instanciasService : InstanciaService) {
      this.instancia = new Instancia("","","","");
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  

}