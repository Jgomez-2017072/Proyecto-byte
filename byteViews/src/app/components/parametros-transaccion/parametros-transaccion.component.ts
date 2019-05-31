import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatDialog, MatDialogRef, MatSnackBar, MatPaginator} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  position: number;
  product: number;
  currency: string;
  transactionParams: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, product: 2, currency: 'USD', transactionParams: 'Creditos', description: 'Desembolso de prestamos'},
  {position: 2, product: 6, currency: 'USD', transactionParams: 'Debitos',description: 'Desembolso de prestamos'},
  {position: 3, product: 4, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 4, product: 20, currency: 'USD', transactionParams: 'Debitos',description: 'Desembolso de prestamos'},
  {position: 5, product: 30, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 6, product: 7, currency: 'USD', transactionParams: 'Debitos',description: 'Desembolso de prestamos'},
  {position: 7, product: 3, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 8, product: 1, currency: 'USD', transactionParams: 'Debitos',description: 'Desembolso de prestamos'},
  {position: 9, product: 34, currency: 'USD', transactionParams: 'Debitos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},
  {position: 10, product: 21, currency: 'USD', transactionParams: 'Creditos',description: 'Desembolso de prestamos'},

];


@Component({
  selector: 'app-parametros-transaccion',
  templateUrl: './parametros-transaccion.component.html',
  styleUrls: ['./parametros-transaccion.component.scss']
})


export class ParametrosTransaccionComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['position', 'product', 'currency', 'transactionParams','description', 'edit', 'delete', 'ver'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  constructor(public dialog: MatDialog) {}
  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarParametrosTransaccion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarParametrosTransaccion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarParametrosTransaccion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'editar-parametros-transaccion',
  templateUrl: 'editar-parametros-transaccion.html',
  styleUrls: ['./parametros-transaccion.component.scss']
})

export class EditarParametrosTransaccion {
  constructor(
    public dialogRef: MatDialogRef<EditarParametrosTransaccion>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-parametros-transaccion',
  templateUrl: 'eliminar-parametros-transaccion.html',
  styleUrls: ['./parametros-transaccion.component.scss']
})
export class EliminarParametrosTransaccion {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarParametrosTransaccion>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-parametros-transaccion',
  templateUrl: 'agregar-parametros-transaccion.html',
  styleUrls: ['./parametros-transaccion.component.scss']
})
export class AgregarParametrosTransaccion {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarParametrosTransaccion>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


