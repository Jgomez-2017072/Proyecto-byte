import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatSnackBar, MatDialogRef, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  position:number;
  chanel: number;
  description: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:1, chanel: 1,  description: 'Cartera Propia'},
  {position:2, chanel: 2, description: 'Cartera Cedida'},
  {position:3, chanel: 4, description: 'Banca Personal'},
  {position:4, chanel: 6, description: 'Otras Empresas'},
  {position:5, chanel: 1, description: 'Cartera Propia'},
  {position:6, chanel: 8, description: 'Cartera Ajena'},
  {position:7, chanel: 2, description: 'Cartera Cedida'},
  {position:8, chanel: 3, description: 'Cartera'},
  {position:9, chanel: 7, description: 'Otros'},
  {position:10 ,chanel: 1, description: 'Cartera  Propia'},
];

@Component({
  selector: 'app-canales-venta',
  templateUrl: './canales-venta.component.html',
  styleUrls: ['./canales-venta.component.scss']
})
export class CanalesVentaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position','chanel', 'description','edit','delete','ver'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }

  constructor(public dialog: MatDialog) {}
  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarCanalesVenta, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarCanalesVenta, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarCanalesVenta, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'editar-canales-venta',
  templateUrl: 'editar-canales-venta.html',
  styleUrls: ['./canales-venta.component.scss']
})

export class EditarCanalesVenta {
  constructor(
    public dialogRef: MatDialogRef<EditarCanalesVenta>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-canales-venta',
  templateUrl: 'eliminar-canales-venta.html',
  styleUrls: ['./canales-venta.component.scss']
})
export class EliminarCanalesVenta {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarCanalesVenta>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-canales-venta',
  templateUrl: 'agregar-canales-venta.html',
  styleUrls: ['./canales-venta.component.scss']
})
export class AgregarCanalesVenta {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarCanalesVenta>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


