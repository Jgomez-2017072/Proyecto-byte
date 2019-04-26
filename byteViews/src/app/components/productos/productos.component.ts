import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

export interface PeriodicElement {
  tipoDescripcion: string;
  tipoProducto: string
  position: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, tipoDescripcion: 'No lo se', tipoProducto: 'Aleacion'},
  {position: 2, tipoDescripcion: 'Archivo tabla', tipoProducto: 'Aleacion'},
  {position: 3, tipoDescripcion: 'Fidora', tipoProducto: 'Aleacion'}, 
  {position: 4, tipoDescripcion: 'Linux', tipoProducto: 'Aleacion'},
  {position: 5, tipoDescripcion: 'Ubuntu', tipoProducto: 'Aleacion'},
  {position: 6, tipoDescripcion: 'Windows', tipoProducto: 'Aleacion'},
  {position: 7, tipoDescripcion: 'Netacad', tipoProducto: 'Aleacion'},
  {position: 8, tipoDescripcion: 'Cisco', tipoProducto: 'Aleacion'},
  {position: 9, tipoDescripcion: 'Fluorine', tipoProducto: 'Aleacion'},
  {position: 10, tipoDescripcion: 'Alcalino', tipoProducto: 'Aleacion'},
];

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
 

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['position', 'tipoProducto','tipoDescripcion', 'edit', 'delete', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //Para los modals
  constructor(public dialog: MatDialog) {}

  //Editar Producto Modal
  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarProducto, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //Eliminar Producto modal
  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarProducto, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

//Agregar Producto Modal
  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarProducto, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-producto',
  templateUrl: 'editar-producto.html',
  styleUrls: ['./productos.component.scss']
})
export class EditarProducto {
  constructor(
    public dialogRef: MatDialogRef<EditarProducto>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-producto',
  templateUrl: 'eliminar-producto.html',
  styleUrls: ['./productos.component.scss']
})
export class EliminarProducto {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarProducto>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-producto',
  templateUrl: 'agregar-producto.html',
  styleUrls: ['./productos.component.scss']
})
export class AgregarProducto {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarProducto>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

 }
