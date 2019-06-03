import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface PeriodicElement {
  transaccion: string;
  tipoDeContabilizacion: string;
  position: number;
  contabilidadActiva: string;
}

export interface PeriodicElement2 {
  transaccion: string;
  position: number;
}

export interface PeriodicElement3 {
  transaccion: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, transaccion: 'Agencia', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  {position: 2, transaccion: 'Tipo de producto', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  {position: 3, transaccion: 'Apertura de prestamos', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  {position: 4, transaccion: 'Desembolso de prestamos', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  {position: 5, transaccion: 'Notas de credito a prestamos', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  {position: 6, transaccion: 'Pagos de prestamos', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  {position: 7, transaccion: 'Agencia', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  {position: 8, transaccion: 'Tipo de producto', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  {position: 9, transaccion: 'Apertura de prestamos', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  {position: 10, transaccion: 'Desembolso de prestamos', tipoDeContabilizacion : "asddddd", contabilidadActiva: 'fsadfsda'},
  
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {position: 1, transaccion: 'Agencia2'},
  {position: 2, transaccion: 'Tipo de producto2'},
  {position: 3, transaccion: 'Apertura de prestamos2'},
  {position: 4, transaccion: 'Desembolso de prestamos2'},
  {position: 5, transaccion: 'Notas de credito a prestamos2'},
  {position: 6, transaccion: 'Pagos de prestamos2'},
  {position: 7, transaccion: 'Agencia2'},
  {position: 8, transaccion: 'Tipo de producto2'},
  {position: 9, transaccion: 'Apertura de prestamos2'},
  {position: 10, transaccion: 'Desembolso de prestamos2'},

];

const ELEMENT_DATA3: PeriodicElement3[] = [
  {position: 1, transaccion: 'Agencia3'},
  {position: 2, transaccion: 'Tipo de producto3'},
  {position: 3, transaccion: 'Apertura de prestamos3'},
  {position: 4, transaccion: 'Desembolso de prestamos3'},
  {position: 5, transaccion: 'Notas de credito a prestamos3'},
  {position: 6, transaccion: 'Pagos de prestamos3'},
  {position: 7, transaccion: 'Agencia3'},
  {position: 8, transaccion: 'Tipo de producto3'},
  {position: 9, transaccion: 'Apertura de prestamos3'},
  {position: 10, transaccion: 'Desembolso de prestamos3'},

];

@Component({
  selector: 'app-mantenimiento-contabilizacion',
  templateUrl: './mantenimiento-contabilizacion.component.html',
  styleUrls: ['./mantenimiento-contabilizacion.component.scss']
})
export class MantenimientoContabilizacionComponent implements OnInit {
  resumidaSiNo = false;
  detalladaSiNo = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @ViewChild(MatPaginator) paginator3: MatPaginator;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator;
    this.dataSource3.paginator = this.paginator2;
  }

  displayedColumns: string[] = ['position', 'Transaccion', 'Tipo de Contabilizacion', 'Contabilidad Activa', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns2: string[] = ['position', 'Transaccion'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  displayedColumns3: string[] = ['position', 'Transaccion'];
  dataSource3 = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA3);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMantenimientoContabilizacion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMantenimientoContabilizacion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*openDialog3(): void {
    const dialogRef = this.dialog.open(Altas, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }*/

  openDialog4(): void {
    const dialogRef = this.dialog.open(EstatusDelPrestamo, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'editar-mantenimiento-contabilizacion',
  templateUrl: 'editar-mantenimiento-contabilizacion.html',
  styleUrls: ['./mantenimiento-contabilizacion.component.scss']
})
export class EditarMantenimientoContabilizacion {
  constructor(
    public dialogRef: MatDialogRef<EditarMantenimientoContabilizacion>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-mantenimiento-contabilizacion',
  templateUrl: 'eliminar-mantenimiento-contabilizacion.html',
  styleUrls: ['./mantenimiento-contabilizacion.component.scss']
})
export class EliminarMantenimientoContabilizacion {
  constructor(
    public dialogRef: MatDialogRef<EliminarMantenimientoContabilizacion>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*@Component({
  selector: 'altas',
  templateUrl: 'altas.html',
  styleUrls: ['./mantenimiento-contabilizacion.component.scss']
})
export class Altas{
  constructor(
    public dialogRef: MatDialogRef<Altas>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
}*/

@Component({
  selector: 'estatus-del-prestamo',
  templateUrl: 'estatus-del-prestamo.html',
  styleUrls: ['./mantenimiento-contabilizacion.component.scss']
})
export class EstatusDelPrestamo implements OnInit{

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator2: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    //this.dataSource2.paginator = this.paginator2;
  }

  displayedColumns: string[] = ['position', 'Transaccion'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns2: string[] = ['position', 'Transaccion'];
  //dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA2);

  constructor(
    public dialogRef: MatDialogRef<EstatusDelPrestamo>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
}

//Configuracio Stepper
@Component({
  selector: 'mantenimiento-contabilizacion',
  templateUrl: 'mantenimiento-contabilizacion.component.html',
  styleUrls: ['./mantenimiento-contabilizacion.component.scss']
})
export class StepperOverviewExample implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}