import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  descripcion: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', descripcion : "asddddd"},
  {position: 2, name: 'Helium', descripcion : "asddddd"},
  {position: 3, name: 'Lithium', descripcion : "asddddd"}, 
  {position: 4, name: 'Beryllium', descripcion : "asddddd"},
  {position: 5, name: 'Boron',descripcion : "asddddd"},
  {position: 6, name: 'Carbon',descripcion : "asddddd"},
  {position: 7, name: 'Nitrogen',descripcion : "asddddd"},
  {position: 8, name: 'Oxygen',descripcion : "asddddd"},
  {position: 9, name: 'Fluorine',descripcion : "asddddd"},
  {position: 10, name: 'Neon',descripcion : "asddddd"},
];


@Component({
  selector: 'app-origen-de-fondos',
  templateUrl: './origen-de-fondos.component.html',
  styleUrls: ['./origen-de-fondos.component.scss']
})
export class OrigenDeFondosComponent implements OnInit {

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
    const dialogRef = this.dialog.open(EditarOrigenDeFondos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarOrigenDeFondos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarOrigenDeFondos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'editar-origen-de-fondos',
  templateUrl: 'editar-origen-de-fondos.html',
  styleUrls: ['./origen-de-fondos.component.scss']
})
export class EditarOrigenDeFondos {
  constructor(
    public dialogRef: MatDialogRef<EditarOrigenDeFondos>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-origen-de-fondos',
  templateUrl: 'eliminar-origen-de-fondos.html',
  styleUrls: ['./origen-de-fondos.component.scss']
})
export class EliminarOrigenDeFondos {
  constructor(
    public dialogRef: MatDialogRef<EliminarOrigenDeFondos>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-origen-de-fondos',
  templateUrl: 'agregar-origen-de-fondos.html',
  styleUrls: ['./origen-de-fondos.component.scss']
})
export class AgregarOrigenDeFondos {
  constructor(
    public dialogRef: MatDialogRef<AgregarOrigenDeFondos>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
}