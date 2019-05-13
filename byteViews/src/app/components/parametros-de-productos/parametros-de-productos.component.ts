import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface category {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  tipo: number;
  sub: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {tipo: 1, sub: 3, name: 'Fidusuario 1'},
  {tipo: 2, sub: 35, name: 'Consolidacion de deudas'},
  {tipo: 3, sub: 5, name: 'Fidusuario 2'}, 
  {tipo: 4, sub: 8, name: 'Beryllium'},
  {tipo: 5, sub: 9, name: 'Boron'},
  {tipo: 6, sub: 31, name: 'Carbon'},
  {tipo: 7, sub: 5, name: 'Nitrogen'},
  {tipo: 8, sub: 7, name: 'Oxygen'},
  {tipo: 9, sub: 9, name: 'Fluorine'},
  {tipo: 10, sub: 3, name: 'Neon'},
];

@Component({
  selector: 'app-parametros-de-productos',
  templateUrl: './parametros-de-productos.component.html',
  styleUrls: ['./parametros-de-productos.component.scss']
})
export class ParametrosDeProductosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['tipo', 'sub', 'name', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarParametrosDeProductos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarParametrosDeProductos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarParametrosDeProductos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}



@Component({
  selector: 'editar-parametros-de-productos',
  templateUrl: 'editar-parametros-de-productos.html',
  styleUrls: ['./parametros-de-productos.component.scss']
})
export class EditarParametrosDeProductos {
  constructor(
    public dialogRef: MatDialogRef<EditarParametrosDeProductos>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-parametros-de-productos',
  templateUrl: 'eliminar-parametros-de-productos.html',
  styleUrls: ['./parametros-de-productos.component.scss']
})
export class EliminarParametrosDeProductos {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarParametrosDeProductos>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-parametros-de-productos',
  templateUrl: 'agregar-parametros-de-productos.html',
  styleUrls: ['./parametros-de-productos.component.scss']
})
export class AgregarParametrosDeProductos {
  
  foods: category[] = [
    {value: 'GERENTE 1', viewValue: 'GERENTE 1'},
    {value: 'GERENTE 2', viewValue: 'GERENTE 2'},
    {value: 'GERENTE 3', viewValue: 'GERENTE 3'}
  ];

  constructor(
    public dialogRef: MatDialogRef<AgregarParametrosDeProductos>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

