import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {Destino} from 'src/app/models/destino.model';
import {DestinoService} from 'src/app/services/destino.service';

export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosDestino: Destino[];


var codigo = '';
var descripcion = '';
var empresa = '';



@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss'],
  providers : [DestinoService]
})
export class DestinosComponent implements OnInit {
  public dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getDestinos()
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];
  
  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _destinoServie : DestinoService) {}

  //CRUD --------------------- TRAER DATOS --------------------------
  



  public getDestinos(){
    this._destinoServie.getDestinos().subscribe(
      response => {
        if(response){
          datosDestino = response;
          console.log(datosDestino)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosDestino);
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
    const dialogRef = this.dialog.open(EditarDestino, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getDestinos();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarDestino, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getDestinos();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarDestino, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getDestinos();
      }, 800);
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerDestino, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'editar-destinos',
  templateUrl: 'editar-destinos.html',
  styleUrls: ['./destinos.component.scss']
})
export class EditarDestino {

  ngOnInit() {
    //this.buscarAseguradora();
    this.destino.codigo = codigo;
    this.destino.descripcion = descripcion;
    this.destino.empresa = empresa;
  }

  public destino : Destino ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarDestino>, private snackBar: MatSnackBar, private _destinoService : DestinoService) {
      this.destino = new Destino("","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Actualizado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarDestino(){
    console.log(this.destino)
    this._destinoService.editarDestino(this.destino).subscribe(
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
  selector: 'eliminar-destinos',
  templateUrl: 'eliminar-destinos.html',
  styleUrls: ['./destinos.component.scss'],
  providers : [DestinoService]
})
export class EliminarDestino {
  
  ngOnInit() {
    //this.buscarAseguradora();
    this.destino.codigo = codigo;
    this.destino.descripcion = descripcion;
    this.destino.empresa = empresa;
  }
  
  public destino : Destino ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarDestino>, private snackBar: MatSnackBar, private _destinoService : DestinoService) {
      this.destino = new Destino("","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarDestino(){    
    this._destinoService.eliminarDestino(this.destino).subscribe(
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
  selector: 'agregar-destinos',
  templateUrl: 'agregar-destinos.html',
  styleUrls: ['./destinos.component.scss']
})
export class AgregarDestino {
  
public destino : Destino;
public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarDestino>, private snackBar: MatSnackBar, private _destinoService : DestinoService) {
      this.destino = new Destino("","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearDestino(){
    this.destino.empresa = "1";
    this._destinoService.crearDestino(this.destino).subscribe(
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
  selector: 'ver-destino',
  templateUrl: 'ver-destino.html',
  styleUrls: ['./destinos.component.scss'],
  providers : [DestinoService]

})
export class VerDestino implements OnInit{

  ngOnInit() {
    this.destino.codigo = codigo;
    this.destino.descripcion = descripcion;
    this.destino.empresa = empresa;
    //this.buscarAseguradora();
  }
  
  public destino : Destino ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerDestino>,private snackBar: MatSnackBar) {
      this.destino = new Destino("","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  

}