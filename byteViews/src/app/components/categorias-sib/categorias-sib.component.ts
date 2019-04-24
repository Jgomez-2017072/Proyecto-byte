import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  descripcion: string;
  tipo: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {tipo: 'I', descripcion: 'Hydrogen'},
  {tipo: 'II', descripcion: 'Helium'},
  {tipo: 'III', descripcion: 'Lithium'}, 
  {tipo: 'IV', descripcion: 'Beryllium'},
  {tipo: 'V', descripcion: 'Boron'},
];
@Component({
  selector: 'app-categorias-sib',
  templateUrl: './categorias-sib.component.html',
  styleUrls: ['./categorias-sib.component.scss']
})
export class CategoriasSibComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  displayedColumns: string[] = [ 'tipo', 'descripcion', 'editar', 'eliminar','ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarCategoriasSib, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarCategoriasSib, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarCategoriasSib, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'editar-categorias-sib',
  templateUrl: 'editar-categorias-sib.html',
  styleUrls: ['./categorias-sib.component.scss']
})
export class EditarCategoriasSib {
  constructor(
    public dialogRef: MatDialogRef<EditarCategoriasSib>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-categorias-sib',
  templateUrl: 'eliminar-categorias-sib.html',
  styleUrls: ['./categorias-sib.component.scss']
})
export class EliminarCategoriasSib {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarCategoriasSib>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-categorias-sib',
  templateUrl: 'agregar-categorias-sib.html',
  styleUrls: ['./categorias-sib.component.scss']
})
export class AgregarCategoriasSib {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarCategoriasSib>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
