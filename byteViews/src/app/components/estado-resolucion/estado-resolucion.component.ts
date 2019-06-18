import { Component, OnInit, ViewChild } from '@angular/core';
import { EstadoResolucion } from 'src/app/models/estado-resolucion.model';
import { MatPaginator, MatDialog, MatTableDataSource, MatDialogRef, MatSnackBar } from '@angular/material';
import { EstadoResolucionService } from 'src/app/services/estado-resolucion.service';

export interface PeriodicElement {
  codigo: String,
  descripcion: String,
  empresa: String
}

var datosEstadoResolucion: EstadoResolucion[]

var codigo = '';
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-estado-resolucion',
  templateUrl: './estado-resolucion.component.html',
  styleUrls: ['./estado-resolucion.component.scss']
})
export class EstadoResolucionComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //FILTRO
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _estadoResolucionService: EstadoResolucionService) { }

  //CRUD

  public getEstadoResolucion() {
    this._estadoResolucionService.getEstadoResolucion().subscribe(
      response => {
        if (response) {
          datosEstadoResolucion = response;
          console.log(datosEstadoResolucion);
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosEstadoResolucion);
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

  //Abrir los modals
  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarEstadoResolucion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getEstadoResolucion();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarEstadoResolucion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getEstadoResolucion();
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarEstadoResolucion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getEstadoResolucion();
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerEstadoResolucion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getEstadoResolucion();
    });
  }

  ngOnInit() {
    this.getEstadoResolucion();
  }

}

@Component({
  selector: 'agregar-estado-resolucion',
  templateUrl: './agregar-estado-resolucion.html',
  styleUrls: ['./estado-resolucion.component.scss']
})

export class AgregarEstadoResolucion {
  public estadoResolucion: EstadoResolucion;
  public status;

  constructor(public dialogRef: MatDialogRef<AgregarEstadoResolucion>, private snackBar: MatSnackBar, private _estadoResolucionService: EstadoResolucionService) {
    this.estadoResolucion = new EstadoResolucion('', '', '');
  }
  openSnackBar() {
    this.snackBar.open("Registro Guardado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearEstadoResolucion() {
    this.estadoResolucion.empresa = '1';
    this._estadoResolucionService.crearEstadoResolucion(this.estadoResolucion).subscribe(
      response => {
        if (response) {
          this.status = 'ok'
          if(response.description === "Agregado correctamente") {
            this.dialogRef.close();
            this.snackBar.open(response.description,"", {
              duration: 2100, horizontalPosition: 'end'
            })
          }else {
            this.snackBar.open(response.description,"", {
              duration: 2100, horizontalPosition: 'end'
            })
          }
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error'
        }
      }
    )
  }
}

@Component({
  selector: 'eliminar-estado-resolucion',
  templateUrl: './eliminar-estado-resolucion.html',
  styleUrls: ['./estado-resolucion.component.scss']
})

export class EliminarEstadoResolucion implements OnInit {
  ngOnInit() {
    this.estadoResolucion.codigo = codigo;
    this.estadoResolucion.descripcion = descripcion;
    this.estadoResolucion.empresa = empresa;
  }

  public estadoResolucion: EstadoResolucion;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarEstadoResolucion>, private snackBar: MatSnackBar, private _estadoResolucionService: EstadoResolucionService) {
    this.estadoResolucion = new EstadoResolucion("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarEstadoResolucion() {
    this._estadoResolucionService.eliminarEstadoResolucion(this.estadoResolucion).subscribe(
      response => {
        if (!response) {
          this.status = 'error';
        } else {
          this.status = 'Success'
          if(response.description === "Eliminado correctamente") {
            this.dialogRef.close();
            this.snackBar.open(response.description,"", {
              duration: 2100, horizontalPosition: 'end'
            })
          }else {
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            })
          }
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error'
        }
      }
    )
  }

}

@Component({
  selector: 'editar-estado-resolucion',
  templateUrl: './editar-estado-resolucion.html',
  styleUrls: ['./estado-resolucion.component.scss']
})

export class EditarEstadoResolucion implements OnInit {
  ngOnInit() {
    this.estadoResolucion.codigo = codigo;
    this.estadoResolucion.descripcion = descripcion;
    this.estadoResolucion.empresa = empresa;
  }

  public estadoResolucion: EstadoResolucion;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarEstadoResolucion>, private snackBar: MatSnackBar, private _estadoResolucionService: EstadoResolucionService) {
    this.estadoResolucion = new EstadoResolucion("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarEstadoResolucion() {
    console.log(this.estadoResolucion);
    this._estadoResolucionService.editarEstadoResolucion(this.estadoResolucion).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
            if(response.description === "Editado Correctamente"){
              this.dialogRef.close();
              this.snackBar.open(response.description, "", {
                duration:2100, horizontalPosition: 'end'
              })
            }else {
              this.snackBar.open(response.description, "", {
                duration: 2100, horizontalPosition:'end'
              })
            }
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error'
        }
      }
    )

  }
}

@Component({
  selector: 'ver-estado-resolucion',
  templateUrl: './ver-estado-resolucion.html',
  styleUrls: ['./estado-resolucion.component.scss']
})

export class VerEstadoResolucion implements OnInit {
  ngOnInit() {
    this.estadoResolucion.codigo = codigo;
    this.estadoResolucion.descripcion = descripcion;
    this.estadoResolucion.empresa = empresa;
  }
public estadoResolucion: EstadoResolucion;
public status;

constructor(
  public dialogRef: MatDialogRef<VerEstadoResolucion>, private snackBar: MatSnackBar, private _estadoResolucionService: EstadoResolucionService) {
  this.estadoResolucion = new EstadoResolucion("", "", "");
}

onNoClick(): void {
  this.dialogRef.close();
}
}
