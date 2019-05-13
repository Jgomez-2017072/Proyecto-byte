import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  codigo: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, name: 'Industrial'},
  {codigo: 2, name: 'Banrural'},
  {codigo: 3, name: 'G&T Continental'}, 
  {codigo: 4, name: 'Bantrab'},
  {codigo: 5, name: 'Banco 4'},
  {codigo: 6, name: 'Banco 5'},
  {codigo: 7, name: 'Banco 6'}
];


@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.scss']
})
export class BancosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  displayedColumns: string[] = [ 'codigo', 'name', 'cuentas', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarBancos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarBancos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarBancos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(CuentasBancos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

}



@Component({
  selector: 'editar-bancos',
  templateUrl: 'editar-bancos.html',
  styleUrls: ['./bancos.component.scss']
})
export class EditarBancos {
  constructor(
    public dialogRef: MatDialogRef<EditarBancos>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-bancos',
  templateUrl: 'eliminar-bancos.html',
  styleUrls: ['./bancos.component.scss']
})
export class EliminarBancos {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarBancos>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-bancos',
  templateUrl: 'agregar-bancos.html',
  styleUrls: ['./bancos.component.scss']
})
export class AgregarBancos{
  
  constructor(
    public dialogRef: MatDialogRef<AgregarBancos>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'cuentas-bancos',
  templateUrl: 'cuentas-bancos.html',
  styleUrls: ['./bancos.component.scss']
})
export class CuentasBancos{
  
  constructor(
    public dialogRef: MatDialogRef<CuentasBancos>, private snackBar: MatSnackBar) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

}
