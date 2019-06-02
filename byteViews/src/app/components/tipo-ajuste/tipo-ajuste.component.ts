import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoAjuste } from 'src/app/models/tipo-ajuste.model';
import { MatPaginator, MatDialog, MatTableDataSource, MatDialogRef, MatSnackBar } from '@angular/material';
import { TipoAjusteService } from 'src/app/services/tipo-ajuste.service';

export interface PeriodicElement {
  descripcion: String
  descripcion2: String,
  codigo: String
}

var datosTipoAjuste: TipoAjuste[]

var descripcion = '';
var descripcion2 = '';
var codigo = '';

@Component({
  selector: 'app-tipo-ajuste',
  templateUrl: './tipo-ajuste.component.html',
  styleUrls: ['./tipo-ajuste.component.scss']
})
export class TipoAjusteComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //FILTRO
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _tipoAjusteService: TipoAjusteService) { }


  //CRUD
  public getTipoAjustes() {
    this._tipoAjusteService.getTipoAjustes().subscribe(
      response => {
        if (response) {
          datosTipoAjuste = response;
          console.log(response);
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosTipoAjuste);
          this.dataSource.paginator = this.paginator;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  buscar(id, descripcion, descripcion2) {
    codigo = id;
    descripcion = descripcion;
    descripcion2 = descripcion2;
    console.log(codigo + " - " + descripcion + " - " + descripcion2)
  }

  //Abrir los modals
  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTipoAjuste, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getTipoAjustes();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTipoAjuste, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getTipoAjustes();
      }, 800);
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarTipoAjuste, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getTipoAjustes();
      }, 800);
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerTipoAjuste, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getTipoAjustes();
      }, 800);
    });
  }

  ngOnInit() {
    this.getTipoAjustes()
  }

}

@Component({
  selector: 'agregar-tipo-ajuste',
  templateUrl: './agregar-tipo-ajuste.html',
  styleUrls: ['./tipo-ajuste.component.scss']
})

export class AgregarTipoAjuste {
  public tipoAjuste: TipoAjuste;
  public status;

  constructor(public dialogRef: MatDialogRef<AgregarTipoAjuste>, private snackBar: MatSnackBar, private _tipoAjusteService: TipoAjusteService) {
    this.tipoAjuste = new TipoAjuste('', '', '');
  }
  openSnackBar() {
    this.snackBar.open("Registro Guardado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearTipoAjuste() {
    this._tipoAjusteService.crearTipoAjuste(this.tipoAjuste).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.status = 'ok'
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
  selector: 'eliminar-tipo-ajuste',
  templateUrl: './eliminar-tipo-ajuste.html',
  styleUrls: ['./tipo-ajuste.component.scss']
})

export class EliminarTipoAjuste implements OnInit {
  ngOnInit() {
    this.tipoAjuste.codigo = codigo;
    this.tipoAjuste.descripcion = descripcion;
    this.tipoAjuste.descripcion2 = descripcion2;
  }

  public tipoAjuste: TipoAjuste;
  public status

  constructor(
    public dialogRef: MatDialogRef<EliminarTipoAjuste>, private snackBar: MatSnackBar, private _tipoAjusteService: TipoAjusteService) {
    this.tipoAjuste = new TipoAjuste("", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Eliminado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarTipoAjuste() {
    this._tipoAjusteService.eliminarTipoAjuste(this.tipoAjuste).subscribe(
      response => {
        if (response) {
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
  selector: 'editar-tipo-ajuste',
  templateUrl: './editar-tipo-ajuste.html',
  styleUrls: ['./tipo-ajuste.component.scss']
})

export class EditarTipoAjuste implements OnInit {
  ngOnInit() {
    this.tipoAjuste.codigo = codigo;
    this.tipoAjuste.descripcion = descripcion;
    this.tipoAjuste.descripcion2 = descripcion2;
  }

  public tipoAjuste: TipoAjuste;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarTipoAjuste>, private snackBar: MatSnackBar, private _tipoAjusteService: TipoAjusteService) {
    this.tipoAjuste = new TipoAjuste("", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Actualizado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarTipoAjuste() {
    console.log(this.tipoAjuste);
    this._tipoAjusteService.editarTipoAjuste(this.tipoAjuste).subscribe(
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
  selector: 'ver-tipo-ajuste',
  templateUrl: './ver-tipo-ajuste.html',
  styleUrls: ['./tipo-ajuste.component.scss']
})

export class VerTipoAjuste implements OnInit {
  ngOnInit() {
  this.tipoAjuste.codigo = codigo;
  this.tipoAjuste.descripcion = descripcion;
  this.tipoAjuste.descripcion2 = descripcion2;
  }

  public tipoAjuste: TipoAjuste;
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerTipoAjuste>, private snackBar: MatSnackBar, private _tipoAjusteService: TipoAjusteService) {
    this.tipoAjuste = new TipoAjuste("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
