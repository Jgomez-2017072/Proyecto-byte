import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  descripcionDeCampo: string;
  campoAContabilizar: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, descripcionDeCampo: 'Ajuste de intereses', campoAContabilizar : "asddddd"},
  {position: 2, descripcionDeCampo: 'gastos de avaluo', campoAContabilizar : "asddddd"},
  {position: 3, descripcionDeCampo: 'gastos de gestion legal', campoAContabilizar : "asddddd"}, 
  {position: 4, descripcionDeCampo: 'Comision ctas incobrables', campoAContabilizar : "asddddd"},
  {position: 5, descripcionDeCampo: 'Excedente Gto Escritura', campoAContabilizar : "asddddd"},
  {position: 6, descripcionDeCampo: 'Gastos Escrituras Hipotecario',campoAContabilizar : "asddddd"},
  {position: 7, descripcionDeCampo: 'Gtos legales inscripciones',campoAContabilizar : "asddddd"},
  {position: 8, descripcionDeCampo: 'Desgravemen', campoAContabilizar : "asddddd"},
  {position: 9, descripcionDeCampo: 'Desgravamen tarjeta de credito', campoAContabilizar : "asddddd"},
  {position: 10, descripcionDeCampo: 'Neon', campoAContabilizar : "asddddd"},
];

@Component({
  selector: 'app-contenidos-contables',
  templateUrl: './contenidos-contables.component.html',
  styleUrls: ['./contenidos-contables.component.scss']
})
export class ContenidosContablesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['Código de contenido', 'Descripción de campo', 'Campo a contabilizar','editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarContenidosContables, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarContenidosContables, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarContenidosContables, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'editar-contenidos-contables',
  templateUrl: 'editar-contenidos-contables.html',
  styleUrls: ['./contenidos-contables.component.scss']
})
export class EditarContenidosContables {
  constructor(
    public dialogRef: MatDialogRef<EditarContenidosContables>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Actualizado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'eliminar-contenidos-contables',
  templateUrl: 'eliminar-contenidos-contables.html',
  styleUrls: ['./contenidos-contables.component.scss']
})
export class EliminarContenidosContables {
  constructor(
    public dialogRef: MatDialogRef<EliminarContenidosContables>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'agregar-contenidos-contables',
  templateUrl: 'agregar-contenidos-contables.html',
  styleUrls: ['./contenidos-contables.component.scss']
})
export class AgregarContenidosContables {
  constructor(
    public dialogRef: MatDialogRef<AgregarContenidosContables>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
}