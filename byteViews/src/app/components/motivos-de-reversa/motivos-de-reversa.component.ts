import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MotivosDeReversaService } from 'src/app/services/motivos-de-reversa.service';
import { MotivoDeReversa } from 'src/app/models/motivoDeReversa.model';
import { Institucion } from "src/app/models/institucion.model";
import { RecargoAdicional } from "src/app/models/recargoAdicional.model";


export interface PeriodicElement {
  cobroAdicional: String;
  code: Number;
  codigo: Number;
  descripcion: String;
  description: String;
  empresa: String;
  errorCore: Boolean;
  institucion: Number;
  referencia1: String;
  referencia2: String;
  referencia3: String;
  tipoRetencion: String;
}

var datosMotivoDeReversa: MotivoDeReversa[];

/*var codigo = '';
var descripcion = '';
var empresa = '';*/

var cobroAdicional = "";
var code = 0;
var codigo = 0;
var descripcion = "";
var description = "";
var empresa = "";
var errorCore = true;
var institucion = 0;
var referencia1 = "";
var referencia2 = "";
var referencia3 = "";
var tipoRetencion = "";

@Component({
  selector: 'app-motivos-de-reversa',
  templateUrl: './motivos-de-reversa.component.html',
  styleUrls: ['./motivos-de-reversa.component.scss'],
  providers: [MotivosDeReversaService]
})
export class MotivosDeReversaComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getMotivosDeReversa();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //FILTRO
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _motivosDeReversaService: MotivosDeReversaService) { }


  //Crud -------------- Trae datos -----------------------

  public getMotivosDeReversa() {
    this._motivosDeReversaService.getMotivosDeReversa().subscribe(
      response => {
        if (response) {
          datosMotivoDeReversa = response;
          console.log(datosMotivoDeReversa)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosMotivoDeReversa);
          this.dataSource.paginator = this.paginator;

        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  buscar(cobroAdicional2, code2, codigo2, descripcion2, description2,
    empresa2, errorCore2, institucion2, referencia12, referencia22,
    referencia32, tipoRetencion2) {

    cobroAdicional = cobroAdicional2;
    code = code2;
    codigo = codigo2;
    descripcion = descripcion2;
    description = description2;
    empresa = empresa2;
    errorCore = errorCore2;
    institucion = institucion2;
    referencia1 = referencia12;
    referencia2 = referencia22;
    referencia3 = referencia32;
    tipoRetencion = tipoRetencion2;
    console.log(cobroAdicional + " - " + code + " - " + codigo + " - " + descripcion + " - "
      + description + " - " + empresa + " - " + errorCore + " - " + institucion + " - " +
      referencia1 + " - " + referencia2 + " - " + referencia3 + " - " + tipoRetencion)
  }


  //----------------------------------------------------------

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMotivoDeReversa, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getMotivosDeReversa();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMotivosDeReversa, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getMotivosDeReversa();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarMotivoDeReversa, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getMotivosDeReversa();
      }, 800);
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerMotivoDeReversa, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-motivos-de-reversa',
  templateUrl: 'editar-motivos-de-reversa.html',
  styleUrls: ['./motivos-de-reversa.component.scss'],
  providers: [MotivosDeReversaService]
})
export class EditarMotivoDeReversa implements OnInit {

  ngOnInit() {
    this.motivoDeReversa.cobroAdicional = cobroAdicional;
    this.motivoDeReversa.code = code;
    this.motivoDeReversa.codigo = codigo;
    this.motivoDeReversa.descripcion = descripcion;
    this.motivoDeReversa.description = description;
    this.motivoDeReversa.empresa = empresa;
    this.motivoDeReversa.errorCore = errorCore;
    this.motivoDeReversa.institucion = institucion;
    this.motivoDeReversa.referencia1 = referencia1;
    this.motivoDeReversa.referencia2 = referencia2;
    this.motivoDeReversa.referencia3 = referencia3;
    this.motivoDeReversa.tipoRetencion = tipoRetencion;
  }

  public motivoDeReversa: MotivoDeReversa;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarMotivoDeReversa>, private snackBar: MatSnackBar, private _motivosDeReversaService: MotivosDeReversaService) {
    this.motivoDeReversa = new MotivoDeReversa("", 0, 0, "", "", "", true, 0, "", "", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Actualizado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarMotivoDeReversa() {
    console.log(this.motivoDeReversa)
    this._motivosDeReversaService.editarMotivoDeReversa(this.motivoDeReversa).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          console.log(response);
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
  selector: 'eliminar-motivos-de-reversa',
  templateUrl: 'eliminar-motivos-de-reversa.html',
  styleUrls: ['./motivos-de-reversa.component.scss'],
  providers: [MotivosDeReversaService]
})
export class EliminarMotivosDeReversa implements OnInit{

  ngOnInit() {
    
    this.motivoDeReversa.codigo = codigo;
    this.motivoDeReversa.descripcion = descripcion;
    this.motivoDeReversa.institucion = institucion;
    this.motivoDeReversa.referencia1 = referencia1;
    this.motivoDeReversa.referencia2 = referencia2;
    this.motivoDeReversa.referencia3 = referencia3;
    this.motivoDeReversa.tipoRetencion = tipoRetencion;
  }

  public motivoDeReversa: MotivoDeReversa;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarMotivosDeReversa>, private snackBar: MatSnackBar, private _motivosDeReversaService: MotivosDeReversaService) {
    this.motivoDeReversa = new MotivoDeReversa("", 0, 0, "", "", "", true, 0, "", "", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Eliminado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarMotivoDeReversa() {
    this._motivosDeReversaService.eliminarMotivoDeReversa(this.motivoDeReversa).subscribe(
      response => {
        if (!response) {
          this.status = "error"
        } else {
          this.status = "Success"
          console.log(response)
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
  selector: 'agregar-motivos-de-reversa',
  templateUrl: 'agregar-motivos-de-reversa.html',
  styleUrls: ['./motivos-de-reversa.component.scss'],
  providers: [MotivosDeReversaService]
})
export class AgregarMotivoDeReversa {

  public motivoDeReversa: MotivoDeReversa;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarMotivoDeReversa>, private snackBar: MatSnackBar, private _motivosDeReversaService: MotivosDeReversaService) {
    this.motivoDeReversa = new MotivoDeReversa("", 0, 0, "", "", "", true, 0, "", "", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Guardado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearMotivoDeReversa() {
    this.motivoDeReversa.empresa = "1";
    this.motivoDeReversa.errorCore = true;
    this.motivoDeReversa.description = "";
    this.motivoDeReversa.cobroAdicional = "";
    this.motivoDeReversa.code = 0;
    this._motivosDeReversaService.crearMotivoDeReversa(this.motivoDeReversa).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          console.log(response);

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

/*
@Component({
  selector: 'agregar-motivos-de-reversa',
  templateUrl: 'agregar-motivos-de-reversa.html',
  styleUrls: ['./motivos-de-reversa.component.scss'],
  providers: [MotivosDeReversaService]
})
export class AgregarMotivosDeReversa implements OnInit {

  public institucion: Institucion;
  public institucion2: any[];
  public recargoAdicional: RecargoAdicional;
  public motivoDeReversa: MotivoDeReversa;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarMotivosDeReversa>, private snackBar: MatSnackBar, private _motivosDeReversaservice: MotivosDeReversaService) {
    this.motivoDeReversa = new MotivoDeReversa("", 0, 0, "", "", "", true, 0, "", "", "", "");
    this.institucion = new Institucion(0, "", "");
    this.recargoAdicional = new RecargoAdicional("", "", "", "", "", "", 0, "", "", true, "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  }

  openSnackBar() {
    this.snackBar.open("Registro Guardado!", "", {
      duration: 2100, horizontalPosition: 'end'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this._motivosDeReversaservice.getInstituciones().subscribe(
      response => {
        //console.log(response);
        this.institucion = response;

        //console.log(this.institucion)
        //console.log(response[1])

        //console.log(response.length)

        for (let i = 0; i < 4/*response.length; i++){
          //this.institucion2 = ({value: response[i].codigo,viewValue: response[i].descripcion})
          //this.institucion2[i].value = response[i].codigo;
          //this.institucion2[i].viewValue = response[i].descripcion;
          this.institucion2.push({value: i, viewValue: i})
        }
        
        console.log(this.institucion2[0])
        console.log(this.institucion2[1])
        console.log(this.institucion2[2])
        console.log(this.institucion2[3])

      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error';
        }
      }
    )


  }

  Cobros = [
    { value: 'steak-0', viewValue: 'cobro 1' },
    { value: 'pizza-1', viewValue: 'cobro 2' },
    { value: 'tacos-2', viewValue: 'cobro 3' }
  ];

  crearMotivoDeReversa() {
    this.motivoDeReversa.empresa = "1";
    this._motivosDeReversaservice.crearMotivoDeReversa(this.motivoDeReversa).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          console.log(response);

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
*/

@Component({
  selector: 'ver-motivos-de-reversa',
  templateUrl: 'ver-motivos-de-reversa.html',
  styleUrls: ['./motivos-de-reversa.component.scss']

})
export class VerMotivoDeReversa implements OnInit {

  ngOnInit() {
    this.motivoDeReversa.cobroAdicional = cobroAdicional;
    this.motivoDeReversa.code = code;
    this.motivoDeReversa.codigo = codigo;
    this.motivoDeReversa.descripcion = descripcion;
    this.motivoDeReversa.description = description;
    this.motivoDeReversa.empresa = empresa;
    this.motivoDeReversa.errorCore = errorCore;
    this.motivoDeReversa.institucion = institucion;
    this.motivoDeReversa.referencia1 = referencia1;
    this.motivoDeReversa.referencia2 = referencia2;
    this.motivoDeReversa.referencia3 = referencia3;
    this.motivoDeReversa.tipoRetencion = tipoRetencion;
  }

  public motivoDeReversa: MotivoDeReversa;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerMotivoDeReversa>, private snackBar: MatSnackBar, private _motivosDereversasService: MotivosDeReversaService) {
      this.motivoDeReversa = new MotivoDeReversa("", 0, 0, "", "", "", true, 0, "", "", "", "");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}