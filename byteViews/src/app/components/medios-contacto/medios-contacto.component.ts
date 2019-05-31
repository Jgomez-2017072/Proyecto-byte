import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  position:number;
  contactMedium: number;
  description: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:1, contactMedium: 1,  description: 'Gerencia General'},
  {position:2, contactMedium: 2, description: 'Promociones'},
  {position:3, contactMedium: 4, description: 'Iniciativa del Cliente'},
  {position:4, contactMedium: 6, description: 'Departamento de Creditos'},
  {position:5, contactMedium: 1, description: 'Gerencia General'},
  {position:6, contactMedium: 8, description: 'Jefes de Agencia'},
  {position:7, contactMedium: 2, description: 'Promociones'},
  {position:8, contactMedium: 3, description: 'Educadores'},
  {position:9, contactMedium: 7, description: 'Dirigentes'},
  {position:10 ,contactMedium: 9, description: 'Oficiales de Creditos'},
];

@Component({
  selector: 'app-medios-contacto',
  templateUrl: './medios-contacto.component.html',
  styleUrls: ['./medios-contacto.component.scss']
})
export class MediosContactoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
  displayedColumns: string[] = ['position','contactMedium', 'description','edit','delete', 'ver'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }
  
  constructor(public dialog: MatDialog) {}
  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMediosContacto, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMediosContacto, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarMediosContacto, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'editar-medios-contacto',
  templateUrl: 'editar-medios-contacto.html',
  styleUrls: ['./medios-contacto.component.scss']
})

export class EditarMediosContacto {
  constructor(
    public dialogRef: MatDialogRef<EditarMediosContacto>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-medios-contacto',
  templateUrl: 'eliminar-medios-contacto.html',
  styleUrls: ['./medios-contacto.component.scss']
})
export class EliminarMediosContacto {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarMediosContacto>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-medios-contacto',
  templateUrl: 'agregar-medios-contacto.html',
  styleUrls: ['./medios-contacto.component.scss']
})
export class AgregarMediosContacto {
  
  constructor(
    public dialogRef: MatDialogRef<AgregarMediosContacto>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



