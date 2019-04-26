import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  descripcion: string;
  descripcionArchivo: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, descripcion: 'Arch', descripcionArchivo: "archivo de limpieza prueba" },
  { position: 2, descripcion: 'gastos de avaluo', descripcionArchivo: "asddddd" },
  { position: 3, descripcion: 'gastos de gestion legal', descripcionArchivo: "asddddd" },
  { position: 4, descripcion: 'Comision ctas incobrables', descripcionArchivo: "asddddd" },
  { position: 5, descripcion: 'Excedente Gto Escritura', descripcionArchivo: "asddddd" },
  { position: 6, descripcion: 'Gastos Escrituras Hipotecario', descripcionArchivo: "asddddd" },
  { position: 7, descripcion: 'Gtos legales inscripciones', descripcionArchivo: "asddddd" },
  { position: 8, descripcion: 'Desgravemen', descripcionArchivo: "asddddd" },
  { position: 9, descripcion: 'Desgravamen tarjeta de credito', descripcionArchivo: "asddddd" },
  { position: 10, descripcion: 'Neon', descripcionArchivo: "asddddd" },
];

@Component({
  selector: 'app-archivos-de-limpieza',
  templateUrl: './archivos-de-limpieza.component.html',
  styleUrls: ['./archivos-de-limpieza.component.scss']
})
export class ArchivosDeLimpiezaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'descripcion', 'descripcionArchivo', 'editar', 'eliminar', 'ver', 'limpiaArchivos'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) { }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarArchivosDeLimpieza, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarArchivosDeLimpieza, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarArchivosDeLimpieza, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'editar-archivos-de-limpieza',
  templateUrl: 'editar-archivos-de-limpieza.html',
  styleUrls: ['./archivos-de-limpieza.component.scss']
})
export class EditarArchivosDeLimpieza {
  constructor(
    public dialogRef: MatDialogRef<EditarArchivosDeLimpieza>, private snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open("Registro Actualizado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'eliminar-archivos-de-limpieza',
  templateUrl: 'eliminar-archivos-de-limpieza.html',
  styleUrls: ['./archivos-de-limpieza.component.scss']
})
export class EliminarArchivosDeLimpieza {
  constructor(
    public dialogRef: MatDialogRef<EliminarArchivosDeLimpieza>, private snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open("Registro Eliminado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'agregar-archivos-de-limpieza',
  templateUrl: 'agregar-archivos-de-limpieza.html',
  styleUrls: ['./archivos-de-limpieza.component.scss']
})
export class AgregarArchivosDeLimpieza {
  constructor(
    public dialogRef: MatDialogRef<AgregarArchivosDeLimpieza>, private snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open("Registro Guardado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}