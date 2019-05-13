import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Préstamos Nuevos'},
  {position: 2, name: 'Refinanciados'},
  {position: 3, name: 'Re-Adecuado'}, 
  {position: 4, name: 'Préstamos Personales'},
  {position: 5, name: 'Préstamos al consumo'},
  {position: 6, name: 'Préstamos Hipotecarios'},

];

@Component({
  selector: 'app-tipos-de-prestamos',
  templateUrl: './tipos-de-prestamos.component.html',
  styleUrls: ['./tipos-de-prestamos.component.scss']
})
export class TiposDePrestamosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarTipoDePrestamos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTipoDePrestamos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTipoDePrestamos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-tipo-de-prestamo',
  templateUrl: 'editar-tipo-de-prestamo.html',
  styleUrls: ['./tipos-de-prestamos.component.scss']
})
export class EditarTipoDePrestamos {
  constructor(
    public dialogRef: MatDialogRef<EditarTipoDePrestamos>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-tipo-de-prestamo',
  templateUrl: 'eliminar-tipo-de-prestamo.html',
  styleUrls: ['./tipos-de-prestamos.component.scss']
})
export class EliminarTipoDePrestamos {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarTipoDePrestamos>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-tipo-de-prestamo',
  templateUrl: 'agregar-tipo-de-prestamo.html',
  styleUrls: ['./tipos-de-prestamos.component.scss']
})
export class AgregarTipoDePrestamos {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarTipoDePrestamos>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

