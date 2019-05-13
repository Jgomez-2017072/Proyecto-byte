import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

import { Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface Food {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.scss']
})
export class DatosGeneralesComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog3(): void {
    const dialogRef = this.dialog.open(GenerarNumeroAutomatico, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(FechasDelSistema, {
      width: '61%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog5(): void {
    const dialogRef = this.dialog.open(Provision, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog6(): void {
    const dialogRef = this.dialog.open(FechaValor, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}



@Component({
  selector: 'numeros-automaticos-generacion',
  templateUrl: 'numeros-automaticos-generacion.html',
  styleUrls: ['./datos-generales.component.scss']
})
export class GenerarNumeroAutomatico{
  
  constructor(
    public dialogRef: MatDialogRef<GenerarNumeroAutomatico>, private snackBar: MatSnackBar) {}

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
  selector: 'fechas-del-sistema',
  templateUrl: 'fechas-del-sistema.html',
  styleUrls: ['./datos-generales.component.scss']
})
export class FechasDelSistema{
  
  constructor(
    public dialogRef: MatDialogRef<FechasDelSistema>, private snackBar: MatSnackBar) {}

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
  selector: 'provision',
  templateUrl: 'provision.html',
  styleUrls: ['./datos-generales.component.scss']
})
export class Provision{
  
  foods: Food[] = [
    {value: 'A fin de mes', viewValue: 'A fin de mes'},
    {value: 'Al vencer el pago', viewValue: 'Al vencer el pago'},
    {value: 'Diaria', viewValue: 'Diaria'}
  ];



  constructor(
    public dialogRef: MatDialogRef<Provision>, private snackBar: MatSnackBar) {}

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
  selector: 'fecha-valor',
  templateUrl: 'fecha-valor.html',
  styleUrls: ['./datos-generales.component.scss']
})
export class FechaValor{
  
  constructor(
    public dialogRef: MatDialogRef<FechaValor>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

}

