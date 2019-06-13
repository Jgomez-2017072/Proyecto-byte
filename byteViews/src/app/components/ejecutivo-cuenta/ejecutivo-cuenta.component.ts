import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator, DialogPosition } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { EjecutivoCuenta } from 'src/app/models/ejecutivoCuenta.model';
import { EjecutivoCuentaService } from 'src/app/services/ejecutivo-cuenta.service';

export interface PeriodicElement {
  code: Number;
  codigo: String;
  codigoEmpleado: Number;
  description: String;
  errorCore: Boolean;
  nombre: String;
  status: String;
}

var datosEjecutivoCuenta: EjecutivoCuenta[];

var code = 0;
var codigo = '';
var codigoEmpleado = 0;
var description = '';
var errorCore = true;
var nombre = '';
var status = '';

@Component({
  selector: 'app-ejecutivo-cuenta',
  templateUrl: './ejecutivo-cuenta.component.html',
  styleUrls: ['./ejecutivo-cuenta.component.scss'],
  providers: [EjecutivoCuentaService]
})

export class EjecutivoCuentaComponent implements OnInit {

  public dataSource;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getEjecutivosCuentas();
  }

  displayedColumns: string[] = ['codigo', 'nombre', 'editar', 'eliminar', 'ver'];

  //FILTRO
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _ejecutivoCuentaServiceService: EjecutivoCuentaService) { }


  //Crud -------------- Trae datos -----------------------


  public getEjecutivosCuentas() {
    this._ejecutivoCuentaServiceService.getEjecutivosCuentas().subscribe(
      response => {
        if (response) {
          datosEjecutivoCuenta = response;
          console.log(datosEjecutivoCuenta)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosEjecutivoCuenta);
          this.dataSource.paginator = this.paginator;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  buscar(code2, id, codigoEmpleado2, description2, errorCore2, nombre2, status2) {

    code = code2;
    codigo = id;
    codigoEmpleado = codigoEmpleado2;
    description = description2;
    errorCore = errorCore2;
    nombre = nombre2;
    status = status2;
    console.log(code + " - " + codigo + " - " + codigoEmpleado + " - " + description + " - " + errorCore + " - " + nombre + " - " + status)
  }


  //----------------------------------------------------------


  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarEjecutivoCuenta, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getEjecutivosCuentas();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarEjecutivoCuenta, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getEjecutivosCuentas();
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarEjecutivoCuenta, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getEjecutivosCuentas();
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerEjecutivoCuenta, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getEjecutivosCuentas();
    });
  }
}

@Component({
  selector: 'editar-ejecutivo-cuenta',
  templateUrl: 'editar-ejecutivo-cuenta.html',
  styleUrls: ['./ejecutivo-cuenta.component.scss']
})
export class EditarEjecutivoCuenta implements OnInit {

  ngOnInit() {
    this.ejecutivoCuenta.code = code;
    this.ejecutivoCuenta.codigo = codigo;
    this.ejecutivoCuenta.codigoEmpleado = codigoEmpleado;
    this.ejecutivoCuenta.description = description;
    this.ejecutivoCuenta.errorCore = errorCore;
    this.ejecutivoCuenta.nombre = nombre;
    this.ejecutivoCuenta.status = status;
  }

  public ejecutivoCuenta: EjecutivoCuenta;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarEjecutivoCuenta>, private snackBar: MatSnackBar, private _ejecutivoCuentaService: EjecutivoCuentaService) {
    this.ejecutivoCuenta = new EjecutivoCuenta(0, "", 0, "", true, "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarEjecutivoCuenta() {
    this.ejecutivoCuenta.code = 0;
    this.ejecutivoCuenta.description = "";
    this.ejecutivoCuenta.errorCore = true;
    console.log(this.ejecutivoCuenta)
    this._ejecutivoCuentaService.editarEjecutivoCuenta(this.ejecutivoCuenta).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if (response.description === 'Editado Correctamente') {
            this.dialogRef.close();
            // openSnackBar() {
            //  super.getAlmacenadoras();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
            // }
          } else {
            this.snackBar.open(response.description, "", {
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
  selector: 'eliminar-ejecutivo-cuenta',
  templateUrl: 'eliminar-ejecutivo-cuenta.html',
  styleUrls: ['./ejecutivo-cuenta.component.scss']
})
export class EliminarEjecutivoCuenta implements OnInit {

  ngOnInit() {
    this.ejecutivoCuenta.code = code;
    this.ejecutivoCuenta.codigo = codigo;
    this.ejecutivoCuenta.codigoEmpleado = codigoEmpleado;
    this.ejecutivoCuenta.description = description;
    this.ejecutivoCuenta.errorCore = errorCore;
    this.ejecutivoCuenta.nombre = nombre;
    this.ejecutivoCuenta.status = status;
  }

  public ejecutivoCuenta: EjecutivoCuenta;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarEjecutivoCuenta>, private snackBar: MatSnackBar, private _ejecutivoCuentaService: EjecutivoCuentaService) {
    this.ejecutivoCuenta = new EjecutivoCuenta(0, "", 0, "", true, "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarEjecutivoCuenta() {
    this._ejecutivoCuentaService.eliminarEjecutivoCuenta(this.ejecutivoCuenta).subscribe(
      response => {
        if (!response) {
          this.status = "error"
        } else {
          this.status = "Success"
          if (response.description === 'Eliminado correctamente') {
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
          } else {
            this.snackBar.open(response.description, "", {
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
  selector: 'agregar-ejecutivo-cuenta',
  templateUrl: 'agregar-ejecutivo-cuenta.html',
  styleUrls: ['./ejecutivo-cuenta.component.scss']
})
export class AgregarEjecutivoCuenta {

  public ejecutivoCuenta: EjecutivoCuenta;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarEjecutivoCuenta>, private snackBar: MatSnackBar, private _ejecutivoCuentaService: EjecutivoCuentaService) {
    this.ejecutivoCuenta = new EjecutivoCuenta(0, "", 0, "", true, "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearEjecutivoCuenta() {
    this.ejecutivoCuenta.code = 0;
    this.ejecutivoCuenta.description = "";
    this.ejecutivoCuenta.errorCore = true;

    this._ejecutivoCuentaService.crearEjecutivoCuenta(this.ejecutivoCuenta).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if (response.description === 'Agregado correctamente') {
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
          } else {
            this.snackBar.open(response.description, "", {
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
  selector: 'ver-ejecutivo-cuenta',
  templateUrl: 'ver-ejecutivo-cuenta.html',
  styleUrls: ['./ejecutivo-cuenta.component.scss']
})

export class VerEjecutivoCuenta implements OnInit {

  ngOnInit() {
    this.ejecutivoCuenta.code = code;
    this.ejecutivoCuenta.codigo = codigo;
    this.ejecutivoCuenta.codigoEmpleado = codigoEmpleado;
    this.ejecutivoCuenta.description = description;
    this.ejecutivoCuenta.errorCore = errorCore;
    this.ejecutivoCuenta.nombre = nombre;
    this.ejecutivoCuenta.status = status;
  }

  public ejecutivoCuenta: EjecutivoCuenta;
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerEjecutivoCuenta>, private snackBar: MatSnackBar, private _ejecutivoCuentaService: EjecutivoCuentaService) {
    this.ejecutivoCuenta = new EjecutivoCuenta(0, "", 0, "", true, "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}