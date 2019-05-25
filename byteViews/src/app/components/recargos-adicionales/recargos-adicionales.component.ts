import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  descripcion: string;
  descripcionParaReportes: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, descripcion: 'Ajuste de intereses', descripcionParaReportes : "asddddd"},
  {position: 2, descripcion: 'gastos de avaluo', descripcionParaReportes : "asddddd"},
  {position: 3, descripcion: 'gastos de gestion legal', descripcionParaReportes : "asddddd"}, 
  {position: 4, descripcion: 'Comision ctas incobrables', descripcionParaReportes : "asddddd"},
  {position: 5, descripcion: 'Excedente Gto Escritura', descripcionParaReportes : "asddddd"},
  {position: 6, descripcion: 'Gastos Escrituras Hipotecario',descripcionParaReportes : "asddddd"},
  {position: 7, descripcion: 'Gtos legales inscripciones',descripcionParaReportes : "asddddd"},
  {position: 8, descripcion: 'Desgravemen', descripcionParaReportes : "asddddd"},
  {position: 9, descripcion: 'Desgravamen tarjeta de credito', descripcionParaReportes : "asddddd"},
  {position: 10, descripcion: 'Neon', descripcionParaReportes : "asddddd"},
];

@Component({
  selector: 'app-recargos-adicionales',
  templateUrl: './recargos-adicionales.component.html',
  styleUrls: ['./recargos-adicionales.component.scss']
})
export class RecargosAdicionalesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'descripcion','editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarRecargos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarRecargos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarRecargos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'editar-recargos',
  templateUrl: 'editar-recargos.html',
  styleUrls: ['./recargos-adicionales.component.scss']
})
export class EditarRecargos {
  constructor(
    public dialogRef: MatDialogRef<EditarRecargos>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-recargos',
  templateUrl: 'eliminar-recargos.html',
  styleUrls: ['./recargos-adicionales.component.scss']
})
export class EliminarRecargos {
  constructor(
    public dialogRef: MatDialogRef<EliminarRecargos>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-recargos',
  templateUrl: 'agregar-recargos.html',
  styleUrls: ['./recargos-adicionales.component.scss']
})
export class AgregarRecargos {
  constructor(
    public dialogRef: MatDialogRef<AgregarRecargos>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
}