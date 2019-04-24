import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Prestamos individuales'},
  {position: 2, name: 'Prestamos Banca Comunal'},
  {position: 3, name: 'Prestamos Grupos Solidarios'}, 
];

@Component({
  selector: 'app-agrupacion-de-creditos',
  templateUrl: './agrupacion-de-creditos.component.html',
  styleUrls: ['./agrupacion-de-creditos.component.scss']
})
export class AgrupacionDeCreditosComponent implements OnInit {
  
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
    const dialogRef = this.dialog.open(EditarCredito, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarCredito, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarCredito, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-creditos',
  templateUrl: 'editar-creditos.html',
  styleUrls: ['./agrupacion-de-creditos.component.scss']
})
export class EditarCredito {
  constructor(
    public dialogRef: MatDialogRef<EditarCredito>,private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-creditos',
  templateUrl: 'eliminar-creditos.html',
  styleUrls: ['./agrupacion-de-creditos.component.scss']
})
export class EliminarCredito {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarCredito>,private snackBar: MatSnackBar) {}

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
  selector: 'agregar-creditos',
  templateUrl: 'agregar-creditos.html',
  styleUrls: ['./agrupacion-de-creditos.component.scss']
})
export class AgregarCredito{
  
  constructor(
    public dialogRef: MatDialogRef<AgregarCredito>,private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
