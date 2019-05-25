import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'}, 
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
];

@Component({
  selector: 'app-motivos-de-reversa',
  templateUrl: './motivos-de-reversa.component.html',
  styleUrls: ['./motivos-de-reversa.component.scss']
})
export class MotivosDeReversaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  displayedColumns: string[] = ['position', 'name', 'editar', 'eliminar','ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMotivosDeReversa, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMotivosDeReversa, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarMotivosDeReversa, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-motivos-de-reversa',
  templateUrl: 'editar-motivos-de-reversa.html',
  styleUrls: ['./motivos-de-reversa.component.scss']
})
export class EditarMotivosDeReversa {
  constructor(
    public dialogRef: MatDialogRef<EditarMotivosDeReversa>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-motivos-de-reversa',
  templateUrl: 'eliminar-motivos-de-reversa.html',
  styleUrls: ['./motivos-de-reversa.component.scss']
})
export class EliminarMotivosDeReversa{
  
  constructor(
    public dialogRef: MatDialogRef<EliminarMotivosDeReversa>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-motivos-de-reversa',
  templateUrl: 'agregar-motivos-de-reversa.html',
  styleUrls: ['./motivos-de-reversa.component.scss']
})
export class AgregarMotivosDeReversa {
  
  Institucions = [
    {value: 'steak-0', viewValue: 'institucion 1'},
    {value: 'pizza-1', viewValue: 'institucion 2'},
    {value: 'tacos-2', viewValue: 'institucion 3'}
  ];

  Cobros = [
    {value: 'steak-0', viewValue: 'cobro 1'},
    {value: 'pizza-1', viewValue: 'cobro 2'},
    {value: 'tacos-2', viewValue: 'cobro 3'}
  ];

  constructor(
    public dialogRef: MatDialogRef<AgregarMotivosDeReversa>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}