import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface category {
  value: string;
  viewValue: string;
}


export interface PeriodicElement {
  name: string;
  categoria: number;
  usuario: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {usuario: 'AVASQUEZ', categoria: 1, name: 'GERENTE'},
  {usuario: 'BYTECAP', categoria: 2, name: 'GERENTE'},
  {usuario: 'BYTESEF', categoria: 3, name: 'GERENTE'}, 
  {usuario: 'CESTEVEZ', categoria: 4, name: 'PRUEBA'},
  {usuario: 'EDUARTE', categoria: 5, name: 'PRUEBA'},
  {usuario: 'RCHAVEZ', categoria: 6, name: 'GERENTE'},
  {usuario: 'LJIMENEZ', categoria: 7, name: 'GERENTE'},
  {usuario: 'JMARTINEZ', categoria: 8, name: 'GERENTE'},
  {usuario: 'SGODINEZ', categoria: 9, name: 'GERENTE'},
  {usuario: 'LCASTILLO', categoria: 10, name: 'GERENTE'},
];


@Component({
  selector: 'app-asignacion-de-categorias',
  templateUrl: './asignacion-de-categorias.component.html',
  styleUrls: ['./asignacion-de-categorias.component.scss']
})
export class AsignacionDeCategoriasComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['usuario', 'categoria', 'name', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarAsignacionDeCategorias, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarAsignacionDeCategorias, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarAsignacionDeCategorias, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}




@Component({
  selector: 'editar-asignacion-de-categorias',
  templateUrl: 'editar-asignacion-de-categorias.html',
  styleUrls: ['./asignacion-de-categorias.component.scss']
})
export class EditarAsignacionDeCategorias {
  constructor(
    public dialogRef: MatDialogRef<EditarAsignacionDeCategorias>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-asignacion-de-categorias',
  templateUrl: 'eliminar-asignacion-de-categorias.html',
  styleUrls: ['./asignacion-de-categorias.component.scss']
})
export class EliminarAsignacionDeCategorias {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarAsignacionDeCategorias>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-asignacion-de-categorias',
  templateUrl: 'agregar-asignacion-de-categorias.html',
  styleUrls: ['./asignacion-de-categorias.component.scss']
})
export class AgregarAsignacionDeCategorias {
  
  foods: category[] = [
    {value: 'GERENTE 1', viewValue: 'GERENTE 1'},
    {value: 'GERENTE 2', viewValue: 'GERENTE 2'},
    {value: 'GERENTE 3', viewValue: 'GERENTE 3'}
  ];

  constructor(
    public dialogRef: MatDialogRef<AgregarAsignacionDeCategorias>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


