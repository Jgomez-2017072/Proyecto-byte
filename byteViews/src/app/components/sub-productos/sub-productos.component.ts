import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface PeriodicElement {
  descripcion: string;
  codigo: number;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, codigo: 1, descripcion: 'Hipotecario'},
  {position: 2, codigo: 2, descripcion: 'Viv Nuevo'},
  {position: 3, codigo: 3, descripcion: 'Finca Raiz'},
  {position: 4, codigo: 4, descripcion: 'Cholotio Prueba'}  
];

@Component({
  selector: 'app-sub-productos',
  templateUrl: './sub-productos.component.html',
  styleUrls: ['./sub-productos.component.scss']
})
export class SubProductosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = [ 'position', 'codigo', 'descripcion','editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 
  //SELECTOR

 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

//Para los modals
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarSubProductos, {
      width: '75%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarSubProductos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarSubProductos, {
      width: '75%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    }
}

  @Component({
    selector: 'editar-subProductos',
    templateUrl: 'editar-subProductos.html',
    styleUrls: ['./sub-productos.component.scss']
  })

  export class EditarSubProductos {
    constructor(
      public dialogRef: MatDialogRef<EditarSubProductos>,private snackBar: MatSnackBar) {}
  
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
    selector: 'eliminar-subProductos',
    templateUrl: 'eliminar-subProductos.html',
    styleUrls: ['./sub-productos.component.scss']
  })
  export class EliminarSubProductos {
    
    constructor(
      public dialogRef: MatDialogRef<EliminarSubProductos>,private snackBar: MatSnackBar) {}
  
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
    selector: 'agregar-subProductos',
    templateUrl: 'agregar-subProductos.html',
    styleUrls: ['./sub-productos.component.scss']
  })
  export class AgregarSubProductos{
    
    constructor(
      public dialogRef: MatDialogRef<AgregarSubProductos>,private snackBar: MatSnackBar) {}
  
      openSnackBar() {
        this.snackBar.open("Registro Guardado!", "", {
          duration: 2100, horizontalPosition : 'end'
        });
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }





  

