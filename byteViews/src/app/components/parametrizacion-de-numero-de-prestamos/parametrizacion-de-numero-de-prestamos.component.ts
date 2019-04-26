import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  OrdenCredito: string;
  separador: string;
  position: number;
  descripcion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, OrdenCredito: 'Agencia', separador : "asddddd", descripcion: 'fsadfsda'},
  {position: 2, OrdenCredito: 'Tipo de producto', separador : "asddddd", descripcion: 'fsadfsda'},
  {position: 3, OrdenCredito: 'Correlativo', separador : "asddddd", descripcion: 'fsadfsda'}, 
  {position: 4, OrdenCredito: 'Digito verificador', separador : "asddddd", descripcion: 'fsadfsda'},
  {position: 5, OrdenCredito: 'Excedente Gto Escritura', separador : "asddddd", descripcion: 'fsadfsda'},
  {position: 6, OrdenCredito: 'Gastos Escrituras Hipotecario',separador : "asddddd", descripcion: 'fsadfsda'},
  {position: 7, OrdenCredito: 'Gtos legales inscripciones',separador : "asddddd", descripcion: 'fsadfsda'},
  {position: 8, OrdenCredito: 'Desgravemen', separador : "asddddd", descripcion: 'fsadfsda'},
  {position: 9, OrdenCredito: 'Desgravamen tarjeta de credito', separador : "asddddd", descripcion: 'fsadfsda'},
  {position: 10, OrdenCredito: 'Neon', separador : "asddddd", descripcion: 'fsadfsda'},
];

@Component({
  selector: 'app-parametrizacion-de-numero-de-prestamos',
  templateUrl: './parametrizacion-de-numero-de-prestamos.component.html',
  styleUrls: ['./parametrizacion-de-numero-de-prestamos.component.scss']
})
export class ParametrizacionDeNumeroDePrestamosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'descripcion', 'dato', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarParametrizacionDeNumeroDePrestamos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarParametrizacionDeNumeroDePrestamos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarParametrizacionDeNumeroDePrestamos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'editar-parametrizacion-de-numero-de-prestamos',
  templateUrl: 'editar-parametrizacion-de-numero-de-prestamos.html',
  styleUrls: ['./parametrizacion-de-numero-de-prestamos.component.scss']
})
export class EditarParametrizacionDeNumeroDePrestamos {
  constructor(
    public dialogRef: MatDialogRef<EditarParametrizacionDeNumeroDePrestamos>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-parametrizacion-de-numero-de-prestamos',
  templateUrl: 'eliminar-parametrizacion-de-numero-de-prestamos.html',
  styleUrls: ['./parametrizacion-de-numero-de-prestamos.component.scss']
})
export class EliminarParametrizacionDeNumeroDePrestamos {
  constructor(
    public dialogRef: MatDialogRef<EliminarParametrizacionDeNumeroDePrestamos>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-parametrizacion-de-numero-de-prestamos',
  templateUrl: 'agregar-parametrizacion-de-numero-de-prestamos.html',
  styleUrls: ['./parametrizacion-de-numero-de-prestamos.component.scss']
})
export class AgregarParametrizacionDeNumeroDePrestamos{
  constructor(
    public dialogRef: MatDialogRef<AgregarParametrizacionDeNumeroDePrestamos>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
}