import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { InstitucionesService } from 'src/app/services/instituciones.service';
import { Institucion } from 'src/app/models/institucion.model';

export interface PeriodicElement {
  codigo: Number;
  descripcion: String;
  empresa: String;
}

var datosInstitucion: Institucion[];


var codigo = 0;
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss'],
  providers: [InstitucionesService]
})
export class InstitucionesComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getInstituciones();
  }


  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];
  // displayedColumns: string[] = ['position', 'name', 'editar', 'eliminar', 'maestros', 'ver'];

  //SELECTOR

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _institucionesService: InstitucionesService) { }

  //CRUD --------------------- TRAER DATOS --------------------------

  public getInstituciones() {
    this._institucionesService.getInstituciones().subscribe(
      response => {
        if (response) {
          datosInstitucion = response;
          console.log(datosInstitucion)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosInstitucion);
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

  // ---------------------------------------------------

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarInstituciones, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getInstituciones();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarInstitucion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getInstituciones();
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarInstituciones, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getInstituciones();
    });
  }

  openDialog4(): void {
    //const dialogRef = this.dialog.open(AgregarInstituciones, {
    //const dialogRef = this.dialog.open(AgregarMaestros, {
    const dialogRef = this.dialog.open(VerInstituciones, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getInstituciones();
    });
  }
}


@Component({
  selector: 'editar-instituciones',
  templateUrl: '/editar-instituciones.html',
  styleUrls: ['./instituciones.component.scss']
})
export class EditarInstituciones implements OnInit {

  ngOnInit() {
    //this.buscarInstitucion();
    this.institucion.codigo = codigo;
    this.institucion.descripcion = descripcion;
    this.institucion.empresa = empresa;
  }

  public institucion: Institucion;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarInstituciones>, private snackBar: MatSnackBar, private _institucionService: InstitucionesService) {
    this.institucion = new Institucion(0, "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarInstitucion() {
    console.log(this.institucion)
    this._institucionService.editarInstitucion(this.institucion).subscribe(
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
  selector: 'eliminar-instituciones',
  templateUrl: 'eliminar-instituciones.html',
  styleUrls: ['./instituciones.component.scss']
})
export class EliminarInstitucion implements OnInit {

  ngOnInit() {
    //this.buscarInstitucion();
    this.institucion.codigo = codigo;
    this.institucion.descripcion = descripcion;
    this.institucion.empresa = empresa;
  }

  public institucion: Institucion;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarInstitucion>, private snackBar: MatSnackBar, private _institucionesService: InstitucionesService) {
    this.institucion = new Institucion(0, "", "");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarInstitucion() {
    this._institucionesService.eliminarInstitucion(this.institucion).subscribe(
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
  selector: 'agregar-instituciones',
  templateUrl: 'agregar-instituciones.html',
  styleUrls: ['./instituciones.component.scss']
})
export class AgregarInstituciones {

  public institucion: Institucion;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarInstituciones>, private snackBar: MatSnackBar,
    private _institucionesService: InstitucionesService) {
    this.institucion = new Institucion(0, "", "");
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    console.log("1")

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearInstitucion() {
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    console.log("2")
    console.log(this.institucion)
    this.institucion.empresa = "1";
    this._institucionesService.crearInstitucion(this.institucion).subscribe(
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
  selector: 'ver-instituciones',
  templateUrl: 'ver-instituciones.html',
  styleUrls: ['./instituciones.component.scss'],
  providers: [InstitucionesService]

})
export class VerInstituciones implements OnInit {

  ngOnInit() {
    this.institucion.codigo = codigo;
    this.institucion.descripcion = descripcion;
    this.institucion.empresa = empresa;
    //this.buscarAseguradora();
  }

  public institucion: Institucion;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerInstituciones>, private snackBar: MatSnackBar, private _institucionesService: InstitucionesService) {
    this.institucion = new Institucion(0, "", "");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
@Component({
  selector: 'agregar-maestros',
  templateUrl: 'agregar-maestros.html',
  styleUrls: ['./instituciones.component.scss']
})
export class AgregarMaestros {

  constructor(
    public dialogRef: MatDialogRef<AgregarMaestros>, private snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open("Registro Guardado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????