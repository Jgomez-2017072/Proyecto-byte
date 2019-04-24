import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'}, 
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
  {position: 9, name: 'Fluorine'},
  {position: 10, name: 'Neon'},
];


@Component({
  selector: 'app-formas-de-pago',
  templateUrl: './formas-de-pago.component.html',
  styleUrls: ['./formas-de-pago.component.scss']
})
export class FormasDePagoComponent implements OnInit {

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
    const dialogRef = this.dialog.open(EditarFormasDePago, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarFormasDePago, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarFormasDePago, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'editar-formas-de-pago',
  templateUrl: 'editar-formas-de-pago.html',
  styleUrls: ['./formas-de-pago.component.scss']
})
export class EditarFormasDePago {
  constructor(
    public dialogRef: MatDialogRef<EditarFormasDePago>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-formas-de-pago',
  templateUrl: 'eliminar-formas-de-pago.html',
  styleUrls: ['./formas-de-pago.component.scss']
})
export class EliminarFormasDePago {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarFormasDePago>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-formas-de-pago',
  templateUrl: 'agregar-formas-de-pago.html',
  styleUrls: ['./formas-de-pago.component.scss']
})
export class AgregarFormasDePago {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarFormasDePago>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
