import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  position: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'AGE', name: 'AGENCIA'},
  {position: 'AMP', name: 'AMPLIACIONES'},
  {position: 'AMT', name: 'AMORTIZACIONES'}, 
  {position: 'APE', name: 'APERTURA DE PRESTAMOS'},
  {position: 'AVI', name: 'INGRESO DE GARANTIA'},
  {position: 'CAS', name: 'CAMBIO DE ESTATUS CASTIGADO'},
  {position: 'CAT', name: 'CAMBIO DE TASA DE INTERES'},
  {position: 'CCM', name: 'CAMBIO DE COMPROMISO DE PAGO'},
  {position: 'CER', name: 'CERTIFICACION DE GARANTIAS'}
];

@Component({
  selector: 'app-tipos-de-transaccion',
  templateUrl: './tipos-de-transaccion.component.html',
  styleUrls: ['./tipos-de-transaccion.component.scss']
})
export class TiposDeTransaccionComponent implements OnInit {

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
    const dialogRef = this.dialog.open(EditarTiposTransacciones, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTiposTransacciones, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTiposTransacciones, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-tipos-transacciones',
  templateUrl: 'editar-tipos-de-transaccion.html',
  styleUrls: ['./tipos-de-transaccion.component.scss']
})
export class EditarTiposTransacciones {
  constructor(
    public dialogRef: MatDialogRef<EditarTiposTransacciones>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-tipos-transacciones',
  templateUrl: 'eliminar-tipos-de-transaccion.html',
  styleUrls: ['./tipos-de-transaccion.component.scss']
})
export class EliminarTiposTransacciones {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarTiposTransacciones>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-tipos-transaccion',
  templateUrl: 'agregar-tipos-de-transaccion.html',
  styleUrls: ['./tipos-de-transaccion.component.scss']
})
export class AgregarTiposTransacciones {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarTiposTransacciones>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}