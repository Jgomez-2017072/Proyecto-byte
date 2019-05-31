import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  position: number;
  equivalente: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'BIEN INMUEBLE', equivalente: '02'},
  {position: 2, name: 'PIGNORACION DE CUENTAS', equivalente: '03'},
  {position: 3, name: 'MAQUINARIA', equivalente: '08'}
];


@Component({
  selector: 'app-tipos-subtipos-garantias-reales',
  templateUrl: './tipos-subtipos-garantias-reales.component.html',
  styleUrls: ['./tipos-subtipos-garantias-reales.component.scss']
})
export class TiposSubtiposGarantiasRealesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  displayedColumns: string[] = ['position', 'name', 'equivalente' , 'add' , 'editar', 'eliminar','ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //SELECTOR

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarTiposSubtiposGR, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTiposSubtiposGR, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTiposSubtiposGR, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-tipos-subtipos-garantias-reales',
  templateUrl: 'editar-tipos-subtipos-garantias-reales.html',
  styleUrls: ['./tipos-subtipos-garantias-reales.component.scss']
})
export class EditarTiposSubtiposGR {
  constructor(
    public dialogRef: MatDialogRef<EditarTiposSubtiposGR>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-tipos-subtipos-garantias-reales',
  templateUrl: 'eliminar-tipos-subtipos-garantias-reales.html',
  styleUrls: ['./tipos-subtipos-garantias-reales.component.scss']
})
export class EliminarTiposSubtiposGR {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarTiposSubtiposGR>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-tipos-subtipos-garantias-reales',
  templateUrl: 'agregar-tipos-subtipos-garantias-reales.html',
  styleUrls: ['./tipos-subtipos-garantias-reales.component.scss']
})
export class AgregarTiposSubtiposGR {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarTiposSubtiposGR>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}