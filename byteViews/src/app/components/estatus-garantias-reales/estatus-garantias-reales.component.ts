import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  descripcion: string;
  estatus: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {estatus: 1, descripcion: 'Hydrogen'},
  {estatus: 2, descripcion: 'Helium'},
  {estatus: 3, descripcion: 'Lithium'}, 
  {estatus: 4, descripcion: 'Beryllium'},
  {estatus: 5, descripcion: 'Boron'},
  {estatus: 6, descripcion: 'Carbon'},
  {estatus: 7, descripcion: 'Nitrogen'},
];

@Component({
  selector: 'app-estatus-garantias-reales',
  templateUrl: './estatus-garantias-reales.component.html',
  styleUrls: ['./estatus-garantias-reales.component.scss']
})
export class EstatusGarantiasRealesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['estatus', 'descripcion', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarEstatusGarantiasReales, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarEstatusGarantiasReales, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarEstatusGarantiasReales, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'editar-estatus-garantias-reales',
  templateUrl: 'editar-estatus-garantias-reales.html',
  styleUrls: ['./estatus-garantias-reales.component.scss']
})
export class EditarEstatusGarantiasReales {
  constructor(
    public dialogRef: MatDialogRef<EditarEstatusGarantiasReales>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-estatus-garantias-reales',
  templateUrl: 'eliminar-estatus-garantias-reales.html',
  styleUrls: ['./estatus-garantias-reales.component.scss']
})
export class EliminarEstatusGarantiasReales {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarEstatusGarantiasReales>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-estatus-garantias-reales',
  templateUrl: 'agregar-estatus-garantias-reales.html',
  styleUrls: ['./estatus-garantias-reales.component.scss']
})
export class AgregarEstatusGarantiasReales{
  
  constructor(
    public dialogRef: MatDialogRef<AgregarEstatusGarantiasReales>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


