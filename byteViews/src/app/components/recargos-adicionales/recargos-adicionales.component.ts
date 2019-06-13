import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { RecargosAdicionalesService } from 'src/app/services/recargos-adicionales.service';
import { RecargoAdicional } from 'src/app/models/recargoAdicional.model';

export interface PeriodicElement {
  codigo: String,
  descripcion: String,
  //description: String,
  empresa: String
}

var datosRecargoAdicional: RecargoAdicional[];


var codigo = '';
var descripcion = '';
//var description = '';
var empresa = '';

@Component({
  selector: 'app-recargos-adicionales',
  templateUrl: './recargos-adicionales.component.html',
  styleUrls: ['./recargos-adicionales.component.scss'],
  providers: [RecargosAdicionalesService]
})
export class RecargosAdicionalesComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getRecargosAdicionales();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', /*'description',*/  'editar', 'eliminar', 'ver'];

  //FILTRO

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _recargosAdicionalesService: RecargosAdicionalesService) {
  }

  //CRUD --------------------- TRAER DATOS --------------------------

  public getRecargosAdicionales() {
    this._recargosAdicionalesService.getRecargosAdicionales().subscribe(
      response => {
        if (response) {
          datosRecargoAdicional = response;
          console.log(datosRecargoAdicional)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosRecargoAdicional);
          this.dataSource.paginator = this.paginator;

        }
      },
      error => {
        console.log(<any>error);
      }

    )
  }

  buscar(id, descripcion2, empresa2/*, description2*/) {
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    //description = description2;
    console.log(codigo + " - " + descripcion + " - " + empresa /*+ " - " + description*/)
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarRecargos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getRecargosAdicionales();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarRecargos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getRecargosAdicionales();
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarRecargos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getRecargosAdicionales();
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerRecargoAdicional, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getRecargosAdicionales();
    });
  }

}

@Component({
  selector: 'editar-recargos',
  templateUrl: 'editar-recargos.html',
  styleUrls: ['./recargos-adicionales.component.scss']
})
export class EditarRecargos implements OnInit {

  ngOnInit() {
    //this.buscarAseguradora();
    this.recargoAdicional.codigo = codigo;
    this.recargoAdicional.descripcion = descripcion;
    this.recargoAdicional.empresa = empresa;
    //this.recargoAdicional.description = description;
  }

  public recargoAdicional: RecargoAdicional;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarRecargos>, private snackBar: MatSnackBar, private _recargosAdicionalesService: RecargosAdicionalesService) {
    //this.recargoAdicional = new RecargoAdicional(0, "", ""/*, ""*/);
    this.recargoAdicional = new RecargoAdicional("", "", "", "", "", "", 0, "", "", true, "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarRecargoAdicional() {
    this.recargoAdicional.code = 0,
      this.recargoAdicional.description = "",
      this.recargoAdicional.errorCore = true,
      this.recargoAdicional.empresa = "1",
      //this.recargoAdicional.codigo = "23",
      this.recargoAdicional.formatoImpresion = "string",
      this.recargoAdicional.descripcionCorta = "",
      //this.recargoAdicional.descripcion = "primero",
      this.recargoAdicional.polizaColectiva = "N",
      this.recargoAdicional.seUsaEnFianza = "N",
      this.recargoAdicional.acumulaPeriodos = "N",
      this.recargoAdicional.pagosAterceros = "N",
      this.recargoAdicional.provisiona = "N",
      this.recargoAdicional.asociaSeguros = "",
      this.recargoAdicional.incluyeCalculoInteres = "N",
      this.recargoAdicional.incluyeCalculoMora = "N",
      this.recargoAdicional.incluyeEnCapital = "N",
      this.recargoAdicional.inclusionComprobada = "N",
      this.recargoAdicional.calculoFlatAlVencimiento = "N",
      this.recargoAdicional.paraCalculoDeMora = "N",
      this.recargoAdicional.repPagoTercero = "N",
      this.recargoAdicional.utilizaCodeudor = "N",
      this.recargoAdicional.opcionAcompra = "N",
      this.recargoAdicional.utilizaFactorDivisorParaCalculoFlat = "N"
    console.log(this.recargoAdicional)
    this._recargosAdicionalesService.editarRecargoAdicional(this.recargoAdicional).subscribe(
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
  selector: 'eliminar-recargos',
  templateUrl: 'eliminar-recargos.html',
  styleUrls: ['./recargos-adicionales.component.scss']
})
export class EliminarRecargos implements OnInit {

  ngOnInit() {
    //this.buscarAseguradora();
    this.recargoAdicional.codigo = codigo;
    this.recargoAdicional.descripcion = descripcion;
    this.recargoAdicional.empresa = empresa;
    //this.recargoAdicional.description = description;
  }

  public recargoAdicional: RecargoAdicional;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarRecargos>, private snackBar: MatSnackBar, private _recargosAdicionalesService: RecargosAdicionalesService) {
    //this.recargoAdicional = new RecargoAdicional(0, "", ""/*, ""*/);
    this.recargoAdicional = new RecargoAdicional("", "", "", "", "", "", 0, "", "", true, "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarRecargoAdicional() {
    this._recargosAdicionalesService.eliminarRecargoAdicional(this.recargoAdicional).subscribe(
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
  selector: 'agregar-recargos',
  templateUrl: 'agregar-recargos.html',
  styleUrls: ['./recargos-adicionales.component.scss'],
  providers: [RecargosAdicionalesService]
})
export class AgregarRecargos {

  public recargoAdicional: RecargoAdicional;
  public status;


  constructor(
    public dialogRef: MatDialogRef<AgregarRecargos>, private snackBar: MatSnackBar, private _recargosAdicionalesService: RecargosAdicionalesService) {
    //this.recargoAdicional = new RecargoAdicional(0, "", ""/*, ""*/);
    this.recargoAdicional = new RecargoAdicional("", "", "", "", "", "", 0, "", "", true, "", "", "", "", "", "", "", "", "", "", "", "", "", "");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearRecargoAdicional() {

    //this.recargoAdicional.empresa = "1";
    this.recargoAdicional.code = 0,
      this.recargoAdicional.description = "",
      this.recargoAdicional.errorCore = true,
      this.recargoAdicional.empresa = "1",
      //this.recargoAdicional.codigo = "23",
      this.recargoAdicional.formatoImpresion = "string",
      this.recargoAdicional.descripcionCorta = "",
      //this.recargoAdicional.descripcion = "primero",
      this.recargoAdicional.polizaColectiva = "N",
      this.recargoAdicional.seUsaEnFianza = "N",
      this.recargoAdicional.acumulaPeriodos = "N",
      this.recargoAdicional.pagosAterceros = "N",
      this.recargoAdicional.provisiona = "N",
      this.recargoAdicional.asociaSeguros = "",
      this.recargoAdicional.incluyeCalculoInteres = "N",
      this.recargoAdicional.incluyeCalculoMora = "N",
      this.recargoAdicional.incluyeEnCapital = "N",
      this.recargoAdicional.inclusionComprobada = "N",
      this.recargoAdicional.calculoFlatAlVencimiento = "N",
      this.recargoAdicional.paraCalculoDeMora = "N",
      this.recargoAdicional.repPagoTercero = "N",
      this.recargoAdicional.utilizaCodeudor = "N",
      this.recargoAdicional.opcionAcompra = "N",
      this.recargoAdicional.utilizaFactorDivisorParaCalculoFlat = "N"

    console.log(this.recargoAdicional)
    this._recargosAdicionalesService.crearRecargoAdicional(this.recargoAdicional).subscribe(
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
  selector: 'ver-recargos',
  templateUrl: 'ver-recargos.html',
  styleUrls: ['./recargos-adicionales.component.scss'],
  providers: [RecargosAdicionalesService]
})

export class VerRecargoAdicional implements OnInit {

  ngOnInit() {
    this.recargoAdicional.codigo = codigo;
    this.recargoAdicional.descripcion = descripcion;
    this.recargoAdicional.empresa = empresa;
  }

  public recargoAdicional: RecargoAdicional;
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerRecargoAdicional>, private snackBar: MatSnackBar, private _recargosAdicionalesService: RecargosAdicionalesService) {
    this.recargoAdicional = new RecargoAdicional("", "", "", "", "", "", 0, "", "", true, "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}