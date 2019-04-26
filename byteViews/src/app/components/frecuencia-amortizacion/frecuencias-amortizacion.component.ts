import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  position: number;
  caefre: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'MENSUAL', caefre: 11},
  {position: 7, name: 'UNA SOLA VEZ', caefre: 9},
  {position: 12, name: 'ANUAL', caefre: 16}, 
  {position: 13, name: 'AL VENCIMIENTO', caefre: 30}
];

@Component({
  selector: 'app-frecuencias-amortizacion',
  templateUrl: './frecuencias-amortizacion.component.html',
  styleUrls: ['./frecuencias-amortizacion.component.scss']
})
export class FrecuenciasAmortizacionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'caefre' , 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarFrecuenciaAmortizacion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarFrecuenciaAmortizacion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarFrecuenciaAmortizacion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-frecuencias-amortizacion',
  templateUrl: 'editar-frecuencias-amortizacion.html',
  styleUrls: ['./frecuencias-amortizacion.component.scss']
})
export class EditarFrecuenciaAmortizacion {
  constructor(
    public dialogRef: MatDialogRef<EditarFrecuenciaAmortizacion>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-frecuencias-amortizacion',
  templateUrl: 'eliminar-frecuencias-amortizacion.html',
  styleUrls: ['./frecuencias-amortizacion.component.scss']
})
export class EliminarFrecuenciaAmortizacion {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarFrecuenciaAmortizacion>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-frecuencias-amortizacion',
  templateUrl: 'agregar-frecuencias-amortizacion.html',
  styleUrls: ['./frecuencias-amortizacion.component.scss']
})
export class AgregarFrecuenciaAmortizacion {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarFrecuenciaAmortizacion>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
