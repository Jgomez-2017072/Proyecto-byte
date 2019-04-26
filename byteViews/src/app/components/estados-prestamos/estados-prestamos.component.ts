import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';



export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 0, name: 'VIGENTE'},
  {position: 1, name: 'ATRASADO'},
  {position: 10, name: 'VENCIDO'}, 
  {position: 20, name: 'EJECUCION JUDICIAL'},
  {position: 50, name: '**ANULADOS**'},
  {position: 60, name: 'CANCELADOS'},
];


@Component({
  selector: 'app-estados-prestamos',
  templateUrl: './estados-prestamos.component.html',
  styleUrls: ['./estados-prestamos.component.scss']
})
export class EstadosPrestamosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  displayedColumns: string[] = ['position', 'name', 'sub-estados', 'editar', 'eliminar','ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //SELECTOR

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarEstadosPrestamos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarEstadosPrestamos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarEstadosPrestamos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
}

@Component({
  selector: 'editar-estados-prestamos',
  templateUrl: './editar-estados-prestamos.html',
  styleUrls: ['./estados-prestamos.component.scss']
})
export class EditarEstadosPrestamos {
  constructor(
    public dialogRef: MatDialogRef<EditarEstadosPrestamos>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-estados-prestamos',
  templateUrl: './eliminar-estados-prestamos.html',
  styleUrls: ['./estados-prestamos.component.scss']
})
export class EliminarEstadosPrestamos {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarEstadosPrestamos>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-estados-prestamos',
  templateUrl: 'agregar-estados-prestamos.html',
  styleUrls: ['./estados-prestamos.component.scss']
})
export class AgregarEstadosPrestamos {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarEstadosPrestamos>,private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

