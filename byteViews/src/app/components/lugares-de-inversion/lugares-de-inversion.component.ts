import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Guatemala'},
  {position: 2, name: 'Peten'},
  {position: 3, name: 'Reu'}, 
  {position: 4, name: 'Copan'},
  {position: 5, name: 'Choluteca'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Azteca'},
  {position: 8, name: 'Gracias a Dios'},
  {position: 9, name: 'Bebesita'},
  {position: 10, name: 'El Paraiso'},  
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
  {position: 9, name: 'Fluorine'},
  {position: 10, name: 'Neon'},
];

@Component({
  selector: 'app-lugares-de-inversion',
  templateUrl: './lugares-de-inversion.component.html',
  styleUrls: ['./lugares-de-inversion.component.scss']
})
export class LugaresDeInversionComponent implements OnInit {
  
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
    const dialogRef = this.dialog.open(EditarLugar, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarLugar, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarLugar, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-lugaresInversion',
  templateUrl: 'editar-lugaresInversion.html',
  styleUrls: ['./lugares-de-inversion.component.scss']
})
export class EditarLugar {
  constructor(
    public dialogRef: MatDialogRef<EditarLugar>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-lugaresInversion',
  templateUrl: 'eliminar-lugaresInversion.html',
  styleUrls: ['./lugares-de-inversion.component.scss']
})
export class EliminarLugar {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarLugar>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-lugaresInversion',
  templateUrl: 'agregar-lugaresInversion.html',
  styleUrls: ['./lugares-de-inversion.component.scss']
})
export class AgregarLugar {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarLugar>,private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
