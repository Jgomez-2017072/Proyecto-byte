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
  selector: 'app-ingenieros-valuadores',
  templateUrl: './ingenieros-valuadores.component.html',
  styleUrls: ['./ingenieros-valuadores.component.scss']
})
export class IngenierosValuadoresComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'editar', 'eliminar','ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarIngenieroValuador, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarIngenieroValuador, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarIngenieroValuador, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-almacenadora',
  templateUrl: 'editar-ingenieros-valuadores.html',
  styleUrls: ['./ingenieros-valuadores.component.scss']
})
export class EditarIngenieroValuador {
  constructor(
    public dialogRef: MatDialogRef<EditarIngenieroValuador>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-almacenadora',
  templateUrl: 'eliminar-ingenieros-valuadores.html',
  styleUrls: ['./ingenieros-valuadores.component.scss']
})
export class EliminarIngenieroValuador {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarIngenieroValuador>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-almacenadora',
  templateUrl: 'agregar-ingenieros-valuadores.html',
  styleUrls: ['./ingenieros-valuadores.component.scss']
})
export class AgregarIngenieroValuador {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarIngenieroValuador>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}