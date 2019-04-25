import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  descripcion: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, descripcion: 'Referido' },
  {position: 2, descripcion: 'Nuevo cliente' },
  {position: 3, descripcion: 'via electronica' }, 
  {position: 4, descripcion: 'Comision ctas incobrables' },
  {position: 5, descripcion: 'Excedente Gto Escritura' },
  {position: 6, descripcion: 'Gastos Escrituras Hipotecario' },
  {position: 7, descripcion: 'Gtos legales inscripciones' },
  {position: 8, descripcion: 'Desgravemen' },
  {position: 9, descripcion: 'Desgravamen tarjeta de credito' },
  {position: 10, descripcion: 'Neon' },
];

@Component({
  selector: 'app-motivos-de-referencias-clientes',
  templateUrl: './motivos-de-referencias-clientes.component.html',
  styleUrls: ['./motivos-de-referencias-clientes.component.scss']
})
export class MotivosDeReferenciasClientesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'descripcion','editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMotivosDeReferenciasClientes, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMotivosDeReferenciasClientes, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarMotivosDeReferenciasClientes, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'editar-motivos-de-referencias-clientes',
  templateUrl: 'editar-motivos-de-referencias-clientes.html',
  styleUrls: ['./motivos-de-referencias-clientes.component.scss']
})
export class EditarMotivosDeReferenciasClientes {
  constructor(
    public dialogRef: MatDialogRef<EditarMotivosDeReferenciasClientes>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-motivos-de-referencias-clientes',
  templateUrl: 'eliminar-motivos-de-referencias-clientes.html',
  styleUrls: ['./motivos-de-referencias-clientes.component.scss']
})
export class EliminarMotivosDeReferenciasClientes {
  constructor(
    public dialogRef: MatDialogRef<EliminarMotivosDeReferenciasClientes>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-motivos-de-referencias-clientes',
  templateUrl: 'agregar-motivos-de-referencias-clientes.html',
  styleUrls: ['./motivos-de-referencias-clientes.component.scss']
})
export class AgregarMotivosDeReferenciasClientes {
  constructor(
    public dialogRef: MatDialogRef<AgregarMotivosDeReferenciasClientes>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
}