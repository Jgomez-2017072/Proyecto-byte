import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gastos de Escrituracion'},
  {position: 2, name: 'Comision de Reembolso'},
  {position: 3, name: 'Interes Anticipado'}, 
  
];

@Component({
  selector: 'app-tipos-de-deducciones',
  templateUrl: './tipos-de-deducciones.component.html',
  styleUrls: ['./tipos-de-deducciones.component.scss']
})
export class TiposDeDeduccionesComponent implements OnInit {

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
    const dialogRef = this.dialog.open(EditarTipoDeDeduccion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTipoDeDeduccion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTipoDeDeduccion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-tipo-de-deduccion',
  templateUrl: 'editar-tipo-de-deduccion.html',
  styleUrls: ['./tipos-de-deducciones.component.scss']
})
export class EditarTipoDeDeduccion {
  constructor(
    public dialogRef: MatDialogRef<EditarTipoDeDeduccion>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-tipo-de-deduccion',
  templateUrl: 'eliminar-tipo-de-deduccion.html',
  styleUrls: ['./tipos-de-deducciones.component.scss']
})
export class EliminarTipoDeDeduccion {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarTipoDeDeduccion>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-tipo-de-deduccion',
  templateUrl: 'agregar-tipo-de-deduccion.html',
  styleUrls: ['./tipos-de-deducciones.component.scss']
})
export class AgregarTipoDeDeduccion {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarTipoDeDeduccion>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}




