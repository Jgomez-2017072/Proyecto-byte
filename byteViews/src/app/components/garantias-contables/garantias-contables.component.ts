import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'FIDUCIARIA'},
  {position: 2, name: 'PRENDARIA'},
  {position: 3, name: 'HIPOTECARIA'}, 
  {position: 4, name: 'OTRAS HIPOTECARIAS'},
  {position: 5, name: 'ACCESORIA'}
];


@Component({
  selector: 'app-garantias-contables',
  templateUrl: './garantias-contables.component.html',
  styleUrls: ['./garantias-contables.component.scss']
})
export class GarantiasContablesComponent implements OnInit {

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
    const dialogRef = this.dialog.open(EditarGarantiasContables, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarGarantiasContables, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarGarantiasContables, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-garantias-contables',
  templateUrl: 'editar-garantias-contables.html',
  styleUrls: ['./garantias-contables.component.scss']
})
export class EditarGarantiasContables {
  constructor(
    public dialogRef: MatDialogRef<EditarGarantiasContables>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-garantias-contables',
  templateUrl: 'eliminar-garantias-contables.html',
  styleUrls: ['./garantias-contables.component.scss']
})
export class EliminarGarantiasContables {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarGarantiasContables>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-garantias-contables',
  templateUrl: 'agregar-garantias-contables.html',
  styleUrls: ['./garantias-contables.component.scss']
})
export class AgregarGarantiasContables {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarGarantiasContables>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}