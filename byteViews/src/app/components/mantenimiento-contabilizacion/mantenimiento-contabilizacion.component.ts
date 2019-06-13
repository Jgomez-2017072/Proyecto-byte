import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface PeriodicElement {transaccion: string; 
  tipoDeContabilizacion: string; 
  position: number; 
  contabilidadActiva: string;
}
export interface PeriodicElement2 {transaccion: string; position: number;}
export interface PeriodicElement3 {transaccion: string; position: number;}
export interface PeriodicElement4 {transaccion: string; position: number;}
export interface PeriodicElement5 {transaccion: string; position: number;}
export interface PeriodicElement6 {transaccion: string; position: number;}
export interface PeriodicElement7 {transaccion: string; position: number;}
export interface PeriodicElement8 {transaccion: string; position: number;}
export interface PeriodicElement9 {transaccion: string; position: number;}
export interface PeriodicElement10 {transaccion: string; position: number;}

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
const ELEMENT_DATA4: PeriodicElement4[] = [
  {position: 1, transaccion: 'Agencia4'},
  {position: 2, transaccion: 'Tipo de producto4'},
  {position: 3, transaccion: 'Apertura de prestamos4'},
  {position: 4, transaccion: 'Desembolso de prestamos4'},
  {position: 5, transaccion: 'Notas de credito a prestamos4'},
  {position: 6, transaccion: 'Pagos de prestamos4'},
  {position: 7, transaccion: 'Agencia4'},
  {position: 8, transaccion: 'Tipo de producto4'},
  {position: 9, transaccion: 'Apertura de prestamos4'},
  {position: 10, transaccion: 'Desembolso de prestamos4'},
];
const ELEMENT_DATA5: PeriodicElement5[] = [
  {position: 1, transaccion: 'Agencia5'},
  {position: 2, transaccion: 'Tipo de producto5'},
  {position: 3, transaccion: 'Apertura de prestamos5'},
  {position: 4, transaccion: 'Desembolso de prestamos5'},
  {position: 5, transaccion: 'Notas de credito a prestamos5'},
  {position: 6, transaccion: 'Pagos de prestamos5'},
  {position: 7, transaccion: 'Agencia5'},
  {position: 8, transaccion: 'Tipo de producto5'},
  {position: 9, transaccion: 'Apertura de prestamos5'},
  {position: 10, transaccion: 'Desembolso de prestamos5'},
];
const ELEMENT_DATA6: PeriodicElement6[] = [
  {position: 1, transaccion: 'Agencia6'},
  {position: 2, transaccion: 'Tipo de producto6'},
  {position: 3, transaccion: 'Apertura de prestamos6'},
  {position: 4, transaccion: 'Desembolso de prestamos6'},
  {position: 5, transaccion: 'Notas de credito a prestamos6'},
  {position: 6, transaccion: 'Pagos de prestamos6'},
  {position: 7, transaccion: 'Agencia6'},
  {position: 8, transaccion: 'Tipo de producto6'},
  {position: 9, transaccion: 'Apertura de prestamos6'},
  {position: 10, transaccion: 'Desembolso de prestamos6'},
];
const ELEMENT_DATA7: PeriodicElement7[] = [
  {position: 1, transaccion: 'Agencia7'},
  {position: 2, transaccion: 'Tipo de producto7'},
  {position: 3, transaccion: 'Apertura de prestamos7'},
  {position: 4, transaccion: 'Desembolso de prestamos7'},
  {position: 5, transaccion: 'Notas de credito a prestamos7'},
  {position: 6, transaccion: 'Pagos de prestamos7'},
  {position: 7, transaccion: 'Agencia7'},
  {position: 8, transaccion: 'Tipo de producto7'},
  {position: 9, transaccion: 'Apertura de prestamos7'},
  {position: 10, transaccion: 'Desembolso de prestamos7'},
];
const ELEMENT_DATA8: PeriodicElement8[] = [
  {position: 1, transaccion: 'Agencia8'},
  {position: 2, transaccion: 'Tipo de producto8'},
  {position: 3, transaccion: 'Apertura de prestamos8'},
  {position: 4, transaccion: 'Desembolso de prestamos8'},
  {position: 5, transaccion: 'Notas de credito a prestamos8'},
  {position: 6, transaccion: 'Pagos de prestamos8'},
  {position: 7, transaccion: 'Agencia8'},
  {position: 8, transaccion: 'Tipo de producto8'},
  {position: 9, transaccion: 'Apertura de prestamos8'},
  {position: 10, transaccion: 'Desembolso de prestamos8'},
];
const ELEMENT_DATA9: PeriodicElement9[] = [
  {position: 1, transaccion: 'Agencia9'},
  {position: 2, transaccion: 'Tipo de producto9'},
  {position: 3, transaccion: 'Apertura de prestamos9'},
  {position: 4, transaccion: 'Desembolso de prestamos9'},
  {position: 5, transaccion: 'Notas de credito a prestamos9'},
  {position: 6, transaccion: 'Pagos de prestamos9'},
  {position: 7, transaccion: 'Agencia9'},
  {position: 8, transaccion: 'Tipo de producto9'},
  {position: 9, transaccion: 'Apertura de prestamos9'},
  {position: 10, transaccion: 'Desembolso de prestamos9'},
];
const ELEMENT_DATA10: PeriodicElement10[] = [
  {position: 1, transaccion: 'Agencia10'},
  {position: 2, transaccion: 'Tipo de producto10'},
  {position: 3, transaccion: 'Apertura de prestamos10'},
  {position: 4, transaccion: 'Desembolso de prestamos10'},
  {position: 5, transaccion: 'Notas de credito a prestamos10'},
  {position: 6, transaccion: 'Pagos de prestamos10'},
  {position: 7, transaccion: 'Agencia10'},
  {position: 8, transaccion: 'Tipo de producto10'},
  {position: 9, transaccion: 'Apertura de prestamos10'},
  {position: 10, transaccion: 'Desembolso de prestamos10'},
];

@Component({
  selector: 'app-mantenimiento-contabilizacion',
  templateUrl: './mantenimiento-contabilizacion.component.html',
  styleUrls: ['./mantenimiento-contabilizacion.component.scss']
})
export class MantenimientoContabilizacionComponent implements OnInit {
  resumidaSiNo = false;
  detalladaSiNo = false;


  @ViewChild('paginator1', {read: MatPaginator}) paginator1: MatPaginator;
  @ViewChild('paginator2', {read: MatPaginator}) paginator2: MatPaginator;
  @ViewChild('paginator3', {read: MatPaginator}) paginator3: MatPaginator;
  @ViewChild('paginator4', {read: MatPaginator}) paginator4: MatPaginator;
  @ViewChild('paginator5', {read: MatPaginator}) paginator5: MatPaginator;
  @ViewChild('paginator6', {read: MatPaginator}) paginator6: MatPaginator;
  @ViewChild('paginator7', {read: MatPaginator}) paginator7: MatPaginator;
  @ViewChild('paginator8', {read: MatPaginator}) paginator8: MatPaginator;
  @ViewChild('paginator9', {read: MatPaginator}) paginator9: MatPaginator;
  @ViewChild('paginator10', {read: MatPaginator}) paginator10: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator1;
    this.dataSource2.paginator = this.paginator2;
    this.dataSource3.paginator = this.paginator3;
    this.dataSource4.paginator = this.paginator4;
    this.dataSource5.paginator = this.paginator5;
    this.dataSource6.paginator = this.paginator6;
    this.dataSource7.paginator = this.paginator7;
    this.dataSource8.paginator = this.paginator8;
    this.dataSource9.paginator = this.paginator9;
    this.dataSource10.paginator = this.paginator10;
  }

  displayedColumns: string[] = ['position', 'Transaccion', 'Tipo de Contabilizacion', 'Contabilidad Activa', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns2: string[] = ['position', 'Transaccion'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  displayedColumns3: string[] = ['position', 'Transaccion'];
  dataSource3 = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA3);

  displayedColumns4: string[] = ['position', 'Transaccion'];
  dataSource4 = new MatTableDataSource<PeriodicElement4>(ELEMENT_DATA4);

  displayedColumns5: string[] = ['position', 'Transaccion'];
  dataSource5 = new MatTableDataSource<PeriodicElement5>(ELEMENT_DATA5);

  displayedColumns6: string[] = ['position', 'Transaccion'];
  dataSource6 = new MatTableDataSource<PeriodicElement6>(ELEMENT_DATA6);

  displayedColumns7: string[] = ['position', 'Transaccion'];
  dataSource7 = new MatTableDataSource<PeriodicElement7>(ELEMENT_DATA7);

  displayedColumns8: string[] = ['position', 'Transaccion'];
  dataSource8 = new MatTableDataSource<PeriodicElement8>(ELEMENT_DATA8);

  displayedColumns9: string[] = ['position', 'Transaccion'];
  dataSource9 = new MatTableDataSource<PeriodicElement9>(ELEMENT_DATA9);

  displayedColumns10: string[] = ['position', 'Transaccion'];
  dataSource10 = new MatTableDataSource<PeriodicElement10>(ELEMENT_DATA10);


  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  /*openDialog1(): void {
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

  openDialog3(): void {
    const dialogRef = this.dialog.open(Altas, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(EstatusDelPrestamo, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }*/

}