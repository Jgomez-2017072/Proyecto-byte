import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  position: string;
  name: string;  
  otorgar: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'CAC', name: 'CASA DE CAMPO', otorgar: '100.0000'}
];


@Component({
  selector: 'app-subtipo-garantia',
  templateUrl: './subtipo-garantia.component.html',
  styleUrls: ['./subtipo-garantia.component.scss']
})
export class SubtipoGarantiaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'otorgar' , 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarSubTipoGarantia, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarSubTipoGarantia, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarSubTipoGarantia, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-subtipo-garantia',
  templateUrl: 'editar-subtipo-garantia.html',
  styleUrls: ['./subtipo-garantia.component.scss']
})
export class EditarSubTipoGarantia {
  constructor(
    public dialogRef: MatDialogRef<EditarSubTipoGarantia>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-subtipo-garantia',
  templateUrl: 'eliminar-subtipo-garantia.html',
  styleUrls: ['./subtipo-garantia.component.scss']
})
export class EliminarSubTipoGarantia {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarSubTipoGarantia>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-subtipo-garantia',
  templateUrl: 'agregar-subtipo-garantia.html',
  styleUrls: ['./subtipo-garantia.component.scss']
})
export class AgregarSubTipoGarantia {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarSubTipoGarantia>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}