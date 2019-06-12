import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CorredorSeguro } from 'src/app/models/corredorSeguro.model';
import { CorredorSeguroService } from "src/app/services/corredor-seguro.service";

export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosCorredorSeguro: CorredorSeguro[];

var codigo = '';
var descripcion = '';
var empresa = '';


@Component({
  selector: 'app-corredor-seguro',
  templateUrl: './corredor-seguro.component.html',
  styleUrls: ['./corredor-seguro.component.scss'],
  providers: [CorredorSeguroService]
})
export class CorredorSeguroComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator

  ngOnInit() {
    this.getCorredoresSeguros();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //SELECTOR

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _corredorSegurosService: CorredorSeguroService) {
  }

  //CRUD --------------------- TRAER DATOS --------------------------

  public getCorredoresSeguros() {
    this._corredorSegurosService.getCorredoresSeguros().subscribe(
      response => {
        if (response) {
          datosCorredorSeguro = response;
          console.log(datosCorredorSeguro)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosCorredorSeguro);
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



  // ---------------------------------------------------

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarCorredorSeguro, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getCorredoresSeguros();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarCorredorSeguro, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getCorredoresSeguros();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarCorredorSeguro, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getCorredoresSeguros();
      }, 800);
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerCorredorSeguro, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-corredor-seguro',
  templateUrl: './editar-corredor-seguro.html',
  styleUrls: ['./corredor-seguro.component.scss'],
  providers: [CorredorSeguroService]
})
export class EditarCorredorSeguro implements OnInit {

  ngOnInit() {
    //this.buscarCorredorSeguro();
    this.corredorSeguro.codigo = codigo;
    this.corredorSeguro.descripcion = descripcion;
    this.corredorSeguro.empresa = empresa;
  }

  public corredorSeguro: CorredorSeguro;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarCorredorSeguro>, private snackBar: MatSnackBar, private _corredorSeguroService: CorredorSeguroService) {
    this.corredorSeguro = new CorredorSeguro("", "", "");
  }


  openSnackBar() {
    this.snackBar.open("Registro Actualizado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarCorredorSeguro() {
    console.log(this.corredorSeguro)
    this._corredorSeguroService.editarCorredorSeguro(this.corredorSeguro).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if (response.description === 'Editado Correctamente') {
            this.dialogRef.close();
            // openSnackBar() {
            //  super.getAlmacenadoras();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
            // }
          } else {
            this.snackBar.open(response.description, "", {
              duration: 3100, horizontalPosition: 'end'
            });
          }
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error';
        }
      }
    )
  }

}


@Component({
  selector: 'eliminar-corredor-seguro',
  templateUrl: './eliminar-corredor-seguro.html',
  styleUrls: ['./corredor-seguro.component.scss'],
  providers: [CorredorSeguroService]
})
export class EliminarCorredorSeguro implements OnInit {

  ngOnInit() {
    //this.buscarCorredorSeguro();
    this.corredorSeguro.codigo = codigo;
    this.corredorSeguro.descripcion = descripcion;
    this.corredorSeguro.empresa = empresa;
  }

  public corredorSeguro: CorredorSeguro;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarCorredorSeguro>, private snackBar: MatSnackBar, private _corredorSeguroService: CorredorSeguroService) {
    this.corredorSeguro = new CorredorSeguro("", "", "");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarCorredorSeguro() {
    this._corredorSeguroService.eliminarCorredorSeguro(this.corredorSeguro).subscribe(
      response => {
        if (!response) {
          this.status = "error"
        } else {
          this.status = "Success"
          if (response.description === 'Eliminado correctamente') {
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
          } else {
            this.snackBar.open(response.description, "", {
              duration: 3100, horizontalPosition: 'end'
            });
          }
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = "error";
        }
      }
    )
  }
}

@Component({
  selector: 'agregar-corredor-seguro',
  templateUrl: 'agregar-corredor-seguro.html',
  styleUrls: ['./corredor-seguro.component.scss'],
  providers: [CorredorSeguroService]

})
export class AgregarCorredorSeguro {

  public corredorSeguro: CorredorSeguro;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarCorredorSeguro>, private snackBar: MatSnackBar, private _corredorSeguroService: CorredorSeguroService) {
    this.corredorSeguro = new CorredorSeguro("", "", "");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearCorredorSeguro() {
    this.corredorSeguro.empresa = "1";
    this._corredorSeguroService.crearCorredorSeguro(this.corredorSeguro).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if (response.description === 'Agregado correctamente') {
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
          } else {
            this.snackBar.open(response.description, "", {
              duration: 3100, horizontalPosition: 'end'
            });
          }
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error';
        }
      }
    )
  }
}

@Component({
  selector: 'ver-corredor-seguro',
  templateUrl: 'ver-corredor-seguro.html',
  styleUrls: ['./corredor-seguro.component.scss']
})

export class VerCorredorSeguro implements OnInit {

  ngOnInit() {
    this.corredorSeguro.codigo = codigo;
    this.corredorSeguro.descripcion = descripcion;
    this.corredorSeguro.empresa = empresa;
  }

  public corredorSeguro: CorredorSeguro;
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerCorredorSeguro>, private snackBar: MatSnackBar, private _corredorSeguroService: CorredorSeguroService) {
    this.corredorSeguro = new CorredorSeguro("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
