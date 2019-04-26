import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  descripcion: string;
  descripcionParaReportes: string;
  position: number;
}

export interface PeriodicElement2 {
  descripcion: string;
  descripcionParaReportes: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, descripcion: 'Ajuste de intereses', descripcionParaReportes: "asddddd" },
  { position: 2, descripcion: 'gastos de avaluo', descripcionParaReportes: "asddddd" },
  { position: 3, descripcion: 'gastos de gestion legal', descripcionParaReportes: "asddddd" },
  { position: 4, descripcion: 'Comision ctas incobrables', descripcionParaReportes: "asddddd" },
  { position: 5, descripcion: 'Excedente Gto Escritura', descripcionParaReportes: "asddddd" },
  { position: 6, descripcion: 'Gastos Escrituras Hipotecario', descripcionParaReportes: "asddddd" },
  { position: 7, descripcion: 'Gtos legales inscripciones', descripcionParaReportes: "asddddd" },
  { position: 8, descripcion: 'Desgravemen', descripcionParaReportes: "asddddd" },
  { position: 9, descripcion: 'Desgravamen tarjeta de credito', descripcionParaReportes: "asddddd" },
  { position: 10, descripcion: 'Neon', descripcionParaReportes: "asddddd" },
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  { position: 1, descripcion: 'Ajuste de intereses', descripcionParaReportes: "asddddd" },
  { position: 2, descripcion: 'gastos de avaluo', descripcionParaReportes: "asddddd" },
  { position: 3, descripcion: 'gastos de gestion legal', descripcionParaReportes: "asddddd" },
  { position: 4, descripcion: 'Comision ctas incobrables', descripcionParaReportes: "asddddd" },
  { position: 5, descripcion: 'Excedente Gto Escritura', descripcionParaReportes: "asddddd" },
  { position: 6, descripcion: 'Gastos Escrituras Hipotecario', descripcionParaReportes: "asddddd" },
  { position: 7, descripcion: 'Gtos legales inscripciones', descripcionParaReportes: "asddddd" },
  { position: 8, descripcion: 'Desgravemen', descripcionParaReportes: "asddddd" },
  { position: 9, descripcion: 'Desgravamen tarjeta de credito', descripcionParaReportes: "asddddd" },
  { position: 10, descripcion: 'Neon', descripcionParaReportes: "asddddd" },
];

@Component({
  selector: 'app-limpia-archivos',
  templateUrl: './limpia-archivos.component.html',
  styleUrls: ['./limpia-archivos.component.scss']
})
export class LimpiaArchivosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'descripcion', 'descripcionParaReportes', 'limpiaArchivos', 'ver'];
  displayedColumns2: string[] = ['position', 'descripcion', 'descripcionParaReportes', 'marcarIndi', 'desmarcarIndi'];
  //'marcarTodos', 'desmarcarTodo',
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA2);

  //FILTRO

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) { }

  openDialog3(): void {
    const dialogRef = this.dialog.open(LimpiezaSeleccionada, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(Opciones, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'opciones',
  templateUrl: 'opciones.html',
  styleUrls: ['./limpia-archivos.component.scss']
})
export class Opciones {
  constructor(
    public dialogRef: MatDialogRef<Opciones>, public dialog: MatDialog) { }


    openDialog3(): void {
      const dialogRef = this.dialog.open(LimpiezaSeleccionada, {
        width: '40%',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'limpieza-seleccionada',
  templateUrl: 'limpieza-seleccionada.html',
  styleUrls: ['./limpia-archivos.component.scss']

  
})
export class LimpiezaSeleccionada implements OnInit{

  public icon = 'check_circle_outline'; 

  public toggleIcon() {
    if (this.icon === 'check_circle_outline') {
        this.icon = 'check_circle';
    } else {
        this.icon = 'check_circle_outline'
    }
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource2.paginator = this.paginator;
  }

  displayedColumns2: string[] = ['position', 'descripcion', 'descripcionParaReportes', 'marcarIndi', 'desmarcarIndi'];
  dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA2);

  applyFilter(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialogRef: MatDialogRef<LimpiezaSeleccionada>) { }


  onNoClick(): void {
    this.dialogRef.close();
  }
}