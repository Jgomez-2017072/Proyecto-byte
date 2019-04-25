import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  descripcion: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, descripcion: 'Ingresos institucion'},
  {position: 2, descripcion: 'Ingresos institucion 2'},
  {position: 3, descripcion: 'Ingresos institucion 3'}, 
  {position: 4, descripcion: 'Ingresos institucion 4'},
  {position: 5, descripcion: 'Choluteca'},
  {position: 6, descripcion: 'Carbon'},
  {position: 7, descripcion: 'Azteca'},
  {position: 8, descripcion: 'Gracias a Dios'},
  {position: 9, descripcion: 'Bebesita'},
  {position: 10, descripcion: 'El Paraiso'},  
  {position: 11, descripcion: 'Nitrogen'},
  {position: 12, descripcion: 'Oxygen'},
  {position: 13, descripcion: 'Fluorine'},
  {position: 14, descripcion: 'Neon'},
];

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss']
})
export class InstitucionesComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  displayedColumns: string[] = [ 'position', 'name', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //SELECTOR

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarInstituciones, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarInstituciones, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarInstituciones, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-instituciones',
  templateUrl: 'editar-instituciones.html',
  styleUrls: ['./instituciones.component.scss']
})
export class EditarInstituciones {
  constructor(
    public dialogRef: MatDialogRef<EditarInstituciones>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-instituciones',
  templateUrl: 'eliminar-instituciones.html',
  styleUrls: ['./instituciones.component.scss']
})
export class EliminarInstituciones {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarInstituciones>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-instituciones',
  templateUrl: 'agregar-instituciones.html',
  styleUrls: ['./instituciones.component.scss']
})
export class AgregarInstituciones {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarInstituciones>,private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
