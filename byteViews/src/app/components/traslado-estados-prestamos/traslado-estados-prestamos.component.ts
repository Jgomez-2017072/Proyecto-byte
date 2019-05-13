import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  codigo: number;
  subcodigo: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, subcodigo: 1, name: 'ATRASADO'},
  {codigo: 10, subcodigo: 10, name: 'VENCIDO'},
  {codigo: 20, subcodigo: 20, name: 'EJECUCION JUDICIAL'}, 
  {codigo: 35, subcodigo: 35, name: 'EJECUCION JUDICIAL'},
  {codigo: 50, subcodigo: 50, name: '**ANULADOS**'},
  {codigo: 60, subcodigo: 60, name: 'CANCELADOS'}
];


@Component({
  selector: 'app-traslado-estados-prestamos',
  templateUrl: './traslado-estados-prestamos.component.html',
  styleUrls: ['./traslado-estados-prestamos.component.scss']
})
export class TrasladoEstadosPrestamosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['codigo', 'sub-cod', 'name', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarTrasladoEstPrestamo, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTrasladoEstPrestamo, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTrasladoEstPrestamo, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-traslado-estados-prestamos',
  templateUrl: 'editar-traslado-estados-prestamos.html',
  styleUrls: ['./traslado-estados-prestamos.component.scss']
})
export class EditarTrasladoEstPrestamo {
  constructor(
    public dialogRef: MatDialogRef<EditarTrasladoEstPrestamo>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-traslado-estados-prestamos',
  templateUrl: 'eliminar-traslado-estados-prestamos.html',
  styleUrls: ['./traslado-estados-prestamos.component.scss']
})
export class EliminarTrasladoEstPrestamo {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarTrasladoEstPrestamo>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-traslado-estados-prestamos',
  templateUrl: 'agregar-traslado-estados-prestamos.html',
  styleUrls: ['./traslado-estados-prestamos.component.scss']
})
export class AgregarTrasladoEstPrestamo {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarTrasladoEstPrestamo>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}