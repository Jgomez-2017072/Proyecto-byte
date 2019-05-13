import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  columna: number;  
  descripcion1: string;
  campo1: string;
  descripcion2: string;
  campo2: string;
 
}


const ELEMENT_DATA: PeriodicElement[] = [
  {columna: 1, descripcion1: 'Hydrogen',campo1: 'Hydrogen', descripcion2: 'Hydrogen',campo2: 'Hydrogen'},
  {columna: 2, descripcion1: 'Helium',campo1: 'Hydrogen', descripcion2: 'Hydrogen',campo2: 'Hydrogen'},
  {columna: 3, descripcion1: 'Lithium',campo1: 'Hydrogen', descripcion2: 'Hydrogen',campo2: 'Hydrogen'}, 
  {columna: 4, descripcion1: 'Beryllium',campo1: 'Hydrogen', descripcion2: 'Hydrogen',campo2: 'Hydrogen'},
  {columna: 5, descripcion1: 'Boron',campo1: 'Hydrogen', descripcion2: 'Hydrogen',campo2: 'Hydrogen'},
  {columna: 6, descripcion1: 'Carbon',campo1: 'Hydrogen', descripcion2: 'Hydrogen',campo2: 'Hydrogen'},
  {columna: 7, descripcion1: 'Nitrogen',campo1: 'Hydrogen', descripcion2: 'Hydrogen',campo2: 'Hydrogen'},
  {columna: 8, descripcion1: 'Oxygen',campo1: 'Hydrogen', descripcion2: 'Hydrogen',campo2: 'Hydrogen'},
];

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['columna', 'descripcion1', 'campo1','descripcion2','campo2','editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarConsultas, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarConsultas, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarConsultas, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-consultas',
  templateUrl: 'editar-consultas.html',
  styleUrls: ['./consultas.component.scss']
})
export class EditarConsultas {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  constructor(
    public dialogRef: MatDialogRef<EditarConsultas>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-consultas',
  templateUrl: 'eliminar-consultas.html',
  styleUrls: ['./consultas.component.scss']
})
export class EliminarConsultas {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarConsultas>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-consultas',
  templateUrl: 'agregar-consultas.html',
  styleUrls: ['./consultas.component.scss']
})
export class AgregarConsultas {
  
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  constructor(
    public dialogRef: MatDialogRef<AgregarConsultas>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

