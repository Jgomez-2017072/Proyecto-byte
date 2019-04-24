import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  codigo: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, name: 'Andres'},
  {codigo: 2, name: 'Carmen'},
  {codigo: 3, name: 'Lithium'}, 
  {codigo: 4, name: 'Mauricio'},
  {codigo: 5, name: 'Sharon'},
  {codigo: 6, name: 'Rosa'},
  {codigo: 7, name: 'Lorena'}
];


@Component({
  selector: 'app-asesores-de-prestamo',
  templateUrl: './asesores-de-prestamo.component.html',
  styleUrls: ['./asesores-de-prestamo.component.scss']
})
export class AsesoresDePrestamoComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  displayedColumns: string[] = [ 'codigo', 'name', 'editar', 'eliminar','ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarAsesoresDePrestamo, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarAsesoresDePrestamo, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarAsesoresDePrestamo, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}



@Component({
  selector: 'editar-asesores-de-prestamo',
  templateUrl: 'editar-asesores-de-prestamos.html',
  styleUrls: ['./asesores-de-prestamo.component.scss']
})
export class EditarAsesoresDePrestamo {
  constructor(
    public dialogRef: MatDialogRef<EditarAsesoresDePrestamo>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-asesores-de-prestamo',
  templateUrl: 'eliminar-asesores-de-prestamos.html',
  styleUrls: ['./asesores-de-prestamo.component.scss']
})
export class EliminarAsesoresDePrestamo {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarAsesoresDePrestamo>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-asesores-de-prestamo',
  templateUrl: 'agregar-asesores-de-prestamos.html',
  styleUrls: ['./asesores-de-prestamo.component.scss']
})
export class AgregarAsesoresDePrestamo{
  
  constructor(
    public dialogRef: MatDialogRef<AgregarAsesoresDePrestamo>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
