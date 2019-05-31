import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  secuencia: string;
  proceso: string;
  position: number;
  programa: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, secuencia: 'Ajuste de intereses', proceso: "asddddd", programa: "asddddd", status: 'A'},
  {position: 2, secuencia: 'gastos de avaluo', proceso: "asddddd", programa: "asddddd", status: 'A'},
  {position: 3, secuencia: 'gastos de gestion legal', proceso: "asddddd", programa: "asddddd", status: 'A'}, 
  {position: 4, secuencia: 'Comision ctas incobrables', proceso: "asddddd", programa: "asddddd", status: 'A'},
  {position: 5, secuencia: 'Excedente Gto Escritura', proceso: "asddddd", programa: "asddddd", status: 'A'},
  {position: 6, secuencia: 'Gastos Escrituras Hipotecario',proceso: "asddddd", programa: "asddddd", status: 'A'},
  {position: 7, secuencia: 'Gtos legales inscripciones',proceso: "asddddd", programa: "asddddd", status: 'A'},
  {position: 8, secuencia: 'Desgravemen', proceso: "asddddd", programa: "asddddd", status: 'A'},
  {position: 9, secuencia: 'Desgravamen tarjeta de credito', proceso: "asddddd", programa: "asddddd", status: 'A'},
  {position: 10, secuencia: 'Neon', proceso: "asddddd", programa: "asddddd", status: 'A'},
];

@Component({
  selector: 'app-mantenimiento-apasos-del-cierre',
  templateUrl: './mantenimiento-apasos-del-cierre.component.html',
  styleUrls: ['./mantenimiento-apasos-del-cierre.component.scss']
})
export class MantenimientoAPasosDelCierreComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'secuencia', 'proceso', 'programa', 'status' ,'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMantenimientoAPasosDelCierre, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMantenimientoAPasosDelCierre, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarMantenimientoAPasosDelCierre, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'editar-mantenimiento-apasos-del-cierre',
  templateUrl: 'editar-mantenimiento-apasos-del-cierre.html',
  styleUrls: ['./mantenimiento-apasos-del-cierre.component.scss']
})
export class EditarMantenimientoAPasosDelCierre {
  constructor(
    public dialogRef: MatDialogRef<EditarMantenimientoAPasosDelCierre>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-mantenimiento-apasos-del-cierre',
  templateUrl: 'eliminar-mantenimiento-apasos-del-cierre.html',
  styleUrls: ['./mantenimiento-apasos-del-cierre.component.scss']
})
export class EliminarMantenimientoAPasosDelCierre {
  constructor(
    public dialogRef: MatDialogRef<EliminarMantenimientoAPasosDelCierre>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-mantenimiento-apasos-del-cierre',
  templateUrl: 'agregar-mantenimiento-apasos-del-cierre.html',
  styleUrls: ['./mantenimiento-apasos-del-cierre.component.scss']
})
export class AgregarMantenimientoAPasosDelCierre {
  constructor(
    public dialogRef: MatDialogRef<AgregarMantenimientoAPasosDelCierre>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
}