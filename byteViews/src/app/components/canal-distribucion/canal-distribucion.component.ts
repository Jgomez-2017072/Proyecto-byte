import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatSnackBar, MatDialogRef, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  position:number;
  code: number;
  description: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:1, code: 1,  description: 'Manuel Beltran'},
  {position:2, code: 2, description: 'Edzio Auditore'},
  {position:3, code: 4, description: 'Edgar Chinchilla'},
  {position:4, code: 6, description: 'Joel Rivas'},
  {position:5, code: 1, description: 'Pablo Lopez'},
  {position:6, code: 8, description: 'Lucy Bonilla'},
  {position:7, code: 2, description: 'Armando Alboran'},
  {position:8, code: 3, description: 'Alex Sandoval'},
  {position:9, code: 7, description: 'Erick Salazar'},
  {position:10 ,code: 9, description: 'Hugo Quiñones'},
];

@Component({
  selector: 'app-canal-distribucion',
  templateUrl: './canal-distribucion.component.html',
  styleUrls: ['./canal-distribucion.component.scss']
})
export class CanalDistribucionComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position','code', 'description','edit','delete', 'ver'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }

  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarCanalDistribucion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarCanalDistribucion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarCanalDistribucion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-canal-distribucion',
  templateUrl: 'editar-canal-distribucion.html',
  styleUrls: ['./canal-distribucion.component.scss']
})
export class EditarCanalDistribucion {
  constructor(
    public dialogRef: MatDialogRef<EditarCanalDistribucion>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-canal-distribucion',
  templateUrl: 'eliminar-canal-distribucion.html',
  styleUrls: ['./canal-distribucion.component.scss']
})
export class EliminarCanalDistribucion {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarCanalDistribucion>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-canal-distribucion',
  templateUrl: 'agregar-canal-distribucion.html',
  styleUrls: ['./canal-distribucion.component.scss']
})
export class AgregarCanalDistribucion {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarCanalDistribucion>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



  

