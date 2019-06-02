import { Component, OnInit, ViewChild } from '@angular/core';
import { Poder } from 'src/app/models/poder.model';
import { MatPaginator, MatDialog, MatTableDataSource, MatDialogRef, MatSnackBar } from '@angular/material';
import { PoderService } from 'src/app/services/poder.service';

export interface PeriodicElement {
  codigo: String,
  descripcion: String,
  empresa: String
}

var datosPoder: Poder[];

var codigo = '';
var descripcion = '';
var empresa = '';


@Component({
  selector: 'app-poder',
  templateUrl: './poder.component.html',
  styleUrls: ['./poder.component.scss']
})
export class PoderComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //FILTRO
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _poderService: PoderService) { }


  //CRUD

  public getPoderes() {
    this._poderService.getPoder().subscribe(
      response => {
        if (response) {
          datosPoder = response;
          console.log(datosPoder);
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosPoder);
          this.dataSource.paginator = this.paginator;
        }
      },
       error => {
        console.log(<any>error);
      }
    )
     
  }

  buscar(id, descripcion2, empresa2) {
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    console.log(codigo + " - " + descripcion + " - " + empresa)
  }

  //Abrir los modals
  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarPoder, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getPoderes();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarPoder, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getPoderes();
      }, 800);
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarPoder, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getPoderes();
      }, 800);
    });
  }
  ngOnInit() {
    this.getPoderes();
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerPoder, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getPoderes();
      }, 800);
    });
  }
}

@Component({
  selector: 'agregar-poder',
  templateUrl: './agregar-poder.html',
  styleUrls: ['./poder.component.scss']
})

export class AgregarPoder {
  public poder: Poder;
  public status;

  constructor(public dialogRef: MatDialogRef<AgregarPoder>, private snackBar: MatSnackBar, private _poderService: PoderService) {
    this.poder = new Poder('', '', '');
  }
  openSnackBar() {
    this.snackBar.open("Registro Guardado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearPoder() {
    this.poder.empresa = '1';
    this._poderService.crearPoder(this.poder).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.status = 'ok';
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error'
        }
      }
    )
  }
}

@Component({
  selector: 'eliminar-poder',
  templateUrl: './eliminar-poder.html',
  styleUrls: ['./poder.component.scss']
})

export class EliminarPoder implements OnInit {
  ngOnInit() {
    this.poder.codigo = codigo;
    this.poder.descripcion = descripcion;
    this.poder.empresa = empresa;
  }

  public poder: Poder;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarPoder>, private snackBar: MatSnackBar, private _poderService: PoderService) {
    this.poder = new Poder("", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Eliminado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarPoder() {
    this._poderService.eliminarPoder(this.poder).subscribe(
      response => {
        if (!response) {
          this.status = 'error'
        } else {
          this.status = 'Success'
          console.log(response);
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error'
        }
      }
    )
  }
}

@Component({
  selector: 'editar-poder',
  templateUrl: './editar-poder.html',
  styleUrls: ['./poder.component.scss']
})

export class EditarPoder implements OnInit {

  ngOnInit() {
    this.poder.codigo = codigo;
    this.poder.descripcion = descripcion;
    this.poder.empresa = empresa;
  }

  public poder: Poder;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarPoder>, private snackBar: MatSnackBar, private _poderService: PoderService) {
    this.poder = new Poder("", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Actualizado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarPoder() {
    console.log(this.poder);
    this._poderService.editarPoder(this.poder).subscribe(
      response => {
        if (response) {
          this.status = 'ok'
          console.log(response);
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error'
        }
      }
    )
  }
}

@Component({
  selector: 'ver-poder',
  templateUrl: './ver-poder.html',
  styleUrls: ['./poder.component.scss']
})

export class VerPoder implements OnInit {
  ngOnInit() {
   this.poder.codigo = codigo;
   this.poder.descripcion = descripcion;
   this.poder.empresa = empresa;
  }

  public poder: Poder;
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerPoder>, private snackBar: MatSnackBar, private _poderService: PoderService) {
    this.poder = new Poder("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}