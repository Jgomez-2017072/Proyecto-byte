import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormasDeDesembolso } from 'src/app/models/formasDeDesembolso.model';
import { FormasDeDesembolsoService } from 'src/app/services/formas-de-desembolso.service';


export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosFormasDeDesembolso: FormasDeDesembolso[];

var codigo = '';
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-formas-de-desembolso',
  templateUrl: './formas-de-desembolso.component.html',
  styleUrls: ['./formas-de-desembolso.component.scss'],
  providers: [FormasDeDesembolsoService]
})
export class FormasDeDesembolsoComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getFormasDeDesembolso()
  }


  displayedColumns: string[] = ['position', 'name', 'editar', 'eliminar', 'ver'];

  //FILTRO

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _formasDeDesembolsoService: FormasDeDesembolsoService) {
  }

  //CRUD----------------------------- TRAER DATOS----------------------------

  public getFormasDeDesembolso() {
    this._formasDeDesembolsoService.getFormasDeDesembolsos().subscribe(
      response => {
        if (response) {
          datosFormasDeDesembolso = response;
          console.log(datosFormasDeDesembolso)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosFormasDeDesembolso);
          this.dataSource.paginator = this.paginator;
        }
      },
      error => {
        console.log(<any>error);
      }

    )
  }

  buscar(id, descripcion2, empresa2) {
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    console.log(codigo + " - " + descripcion + " - " + empresa)
  }

  //-------------------------------------------------------------------------

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarFormasDeDesembolso, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getFormasDeDesembolso();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarFormasDeDesembolso, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getFormasDeDesembolso();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarFormasDeDesembolso, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getFormasDeDesembolso();
      }, 800);
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerFormasDeDesembolso, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-formas-de-desembolso',
  templateUrl: 'editar-formas-de-desembolso.html',
  styleUrls: ['./formas-de-desembolso.component.scss']
})
export class EditarFormasDeDesembolso {

  ngOnInit() {
    this.formasDeDesembolso.codigo = codigo;
    this.formasDeDesembolso.descripcion = descripcion;
    this.formasDeDesembolso.empresa = empresa;
  }

  public formasDeDesembolso: FormasDeDesembolso;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarFormasDeDesembolso>, private snackBar: MatSnackBar, private _formasDeDesembolsoService: FormasDeDesembolsoService) {
    this.formasDeDesembolso = new FormasDeDesembolso("", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Actualizado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarFormaDeDesembolso() {
    console.log(this.formasDeDesembolso)
    this._formasDeDesembolsoService.editarFormaDeDesembolso(this.formasDeDesembolso).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          console.log(response);
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
  selector: 'eliminar-formas-de-desembolso',
  templateUrl: 'eliminar-formas-de-desembolso.html',
  styleUrls: ['./formas-de-desembolso.component.scss']
})
export class EliminarFormasDeDesembolso implements OnInit {

  ngOnInit() {
    //this.buscarFormasDeDesembolso();
    this.formasDeDesembolso.codigo = codigo;
    this.formasDeDesembolso.descripcion = descripcion;
    this.formasDeDesembolso.empresa = empresa;
  }

  public formasDeDesembolso: FormasDeDesembolso;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarFormasDeDesembolso>, private snackBar: MatSnackBar, private _formasDeDesembolsoService: FormasDeDesembolsoService) {
    this.formasDeDesembolso = new FormasDeDesembolso("", "", "");

  }

  openSnackBar() {
    this.snackBar.open("Registro Eliminado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarFormaDeDesembolso() {
    this._formasDeDesembolsoService.eliminarFormaDeDesembolso(this.formasDeDesembolso).subscribe(
      response => {
        if (!response) {
          this.status = "error"
        } else {
          this.status = "Success"
          console.log(response)
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
  selector: 'agregar-formas-de-desembolso',
  templateUrl: 'agregar-formas-de-desembolso.html',
  styleUrls: ['./formas-de-desembolso.component.scss']
})
export class AgregarFormasDeDesembolso {

  public formasDeDesembolso: FormasDeDesembolso;
  public status;


  constructor(
    public dialogRef: MatDialogRef<AgregarFormasDeDesembolso>, private snackBar: MatSnackBar, private _formasDeDesembolsoService: FormasDeDesembolsoService) {
    this.formasDeDesembolso = new FormasDeDesembolso("", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Guardado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearFormaDeDesembolso() {
    this.formasDeDesembolso.empresa = "1";
    this._formasDeDesembolsoService.crearFormaDeDesembolso(this.formasDeDesembolso).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          console.log(response);
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
  selector: 'ver-formas-de-desembolso',
  templateUrl: 'ver-formas-de-desembolso.html',
  styleUrls: ['./formas-de-desembolso.component.scss'],
  providers: [FormasDeDesembolsoService]

})
export class VerFormasDeDesembolso implements OnInit {

  ngOnInit() {
    this.formasDeDesembolso.codigo = codigo;
    this.formasDeDesembolso.descripcion = descripcion;
    this.formasDeDesembolso.empresa = empresa;
    //this.buscarFormasDeDesembolso();
  }

  public formasDeDesembolso: FormasDeDesembolso;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerFormasDeDesembolso>, private snackBar: MatSnackBar, private _formasDeDesembolsoService: FormasDeDesembolsoService) {
    this.formasDeDesembolso = new FormasDeDesembolso("", "", "");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /*buscarFormasDeDesembolso(){
      this._requerimientosService.buscarFormasDeDesembolso(this.formasDeDesembolso.codigo).subscribe(
        response=>{
          console.log(response)
          this.formasDeDesembolso = response
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
