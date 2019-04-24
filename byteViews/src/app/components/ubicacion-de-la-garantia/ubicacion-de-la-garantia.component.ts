import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Oficinas centrales'},
  {position: 2, name: 'Oficina Principal de S.P.S'},
];

@Component({
  selector: 'app-ubicacion-de-la-garantia',
  templateUrl: './ubicacion-de-la-garantia.component.html',
  styleUrls: ['./ubicacion-de-la-garantia.component.scss']
})
export class UbicacionDeLaGarantiaComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = [ 'position', 'name', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarUbicacion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarUbicacion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarUbicacion, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-ubicacion',
  templateUrl: 'editar-ubicacion.html',
  styleUrls: ['./ubicacion-de-la-garantia.component.scss']
})
export class EditarUbicacion {
  constructor(
    public dialogRef: MatDialogRef<EditarUbicacion>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-ubicacion',
  templateUrl: 'eliminar-ubicacion.html',
  styleUrls: ['./ubicacion-de-la-garantia.component.scss']
})
export class EliminarUbicacion {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarUbicacion>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-ubicacion',
  templateUrl: 'agregar-ubicacion.html',
  styleUrls: ['./ubicacion-de-la-garantia.component.scss']
})
export class AgregarUbicacion {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarUbicacion>,private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
