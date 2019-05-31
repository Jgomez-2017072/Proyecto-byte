import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  descripcion: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, descripcion: 'Cheque'},
  {position: 2, descripcion: 'Pago en efectivo'},
  {position: 3, descripcion: 'Prestamos'}, 
  {position: 4, descripcion: 'Beryllium'},
  {position: 5, descripcion: 'Boron'},
  {position: 6, descripcion: 'Carbon'},
  {position: 7, descripcion: 'Nitrogen'},
  {position: 8, descripcion: 'Oxygen'},
];

@Component({
  selector: 'app-formas-de-desembolso',
  templateUrl: './formas-de-desembolso.component.html',
  styleUrls: ['./formas-de-desembolso.component.scss']
})
export class FormasDeDesembolsoComponent implements OnInit {

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
    const dialogRef = this.dialog.open(EditarFormasDeDesembolso, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarFormasDeDesembolso, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarFormasDeDesembolso, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-formas-de-desembolso',
  templateUrl: 'editar-formas-de-desembolso.html',
  styleUrls: ['./formas-de-desembolso.component.scss']
})
export class EditarFormasDeDesembolso {
  constructor(
    public dialogRef: MatDialogRef<EditarFormasDeDesembolso>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-formas-de-desembolso',
  templateUrl: 'eliminar-formas-de-desembolso.html',
  styleUrls: ['./formas-de-desembolso.component.scss']
})
export class EliminarFormasDeDesembolso {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarFormasDeDesembolso>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-formas-de-desembolso',
  templateUrl: 'agregar-formas-de-desembolso.html',
  styleUrls: ['./formas-de-desembolso.component.scss']
})
export class AgregarFormasDeDesembolso {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarFormasDeDesembolso>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
