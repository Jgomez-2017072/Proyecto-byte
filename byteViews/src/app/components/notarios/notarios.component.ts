
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { NotarioService } from 'src/app/services/notario.service';
import { Notario } from 'src/app/models/notario.model';


export interface PeriodicElement {
  cheque: String,
  codigo: String,
  colegiado: String,
  direccion: String,
  direccionDos: String,
  email: String,
  empresa: String,
  fax: String,
  identificacion: String,
  isr: String,
  nombre: String,
  numeroCuenta: String,
  telefono: String,
  tipoCuenta: String
}

var datosNotario: Notario[];


var cheque = '';
var codigo = '';
var colegiado = '';
var direccion = '';
var direccionDos = '';
var email = '';
var empresa = '';
var fax = '';
var identificacion = '';
var isr = '';
var nombre = '';
var numeroCuenta = '';
var telefono = '';
var tipoCuenta = '';


@Component({
  selector: 'app-notarios',
  templateUrl: './notarios.component.html',
  styleUrls: ['./notarios.component.scss'],
  providers: [NotarioService]
})
export class NotariosComponent implements OnInit {

  public dataSource;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getNotarios()
  }


  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //SELECTOR

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog,
    private _notariosService: NotarioService) { }


  //CRUD --------------------- TRAER DATOS --------------------------




  public getNotarios() {
    this._notariosService.getNotarios().subscribe(
      response => {
        if (response) {
          datosNotario = response;
          console.log(datosNotario)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosNotario);
          this.dataSource.paginator = this.paginator;

        }
      },
      error => {
        console.log(<any>error);
      }

    )
  }



  buscar(id, cheque2, colegiado2, direccion2, direccionDos2,email2,
    empresa2,fax2,identificacion2,isr2,nombre2,
    numeroCuenta2,telefono2,tipoCuenta2) {
    codigo = id;
    cheque = cheque2;
    colegiado = colegiado2;
    direccion = direccion2;
    direccionDos = direccionDos2;
    email = email2;
    empresa = empresa2;
    fax = fax2;
    identificacion = identificacion2;
    isr = isr2;
    nombre = nombre2;
    numeroCuenta = numeroCuenta2;
    telefono = telefono2;
    tipoCuenta = tipoCuenta2;    
    //console.log(codigo + " - " + descripcion + " - " + empresa + " - " + numeroRegistro)
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarNotarios, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getNotarios();      
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarNotarios, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getNotarios();      
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarNotarios, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getNotarios();      
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerNotario, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-notarios',
  templateUrl: 'editar-notarios.html',
  styleUrls: ['./notarios.component.scss']
})
export class EditarNotarios {



  ngOnInit() {
    //this.buscarAseguradora();
    this.notario.codigo = codigo;
    this.notario.cheque = cheque;
    this.notario.colegiado = empresa;
    this.notario.direccion = direccion;
    this.notario.direccionDos = direccionDos;
    this.notario.email = email;
    this.notario.empresa = empresa;
    this.notario.fax = fax;
    this.notario.identificacion = identificacion;
    this.notario.isr = isr;
    this.notario.nombre = nombre;
    this.notario.numeroCuenta = numeroCuenta;
    this.notario.telefono = telefono;
    this.notario.tipoCuenta = tipoCuenta;    
  }

  public notario: Notario;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarNotarios>,
    private snackBar: MatSnackBar,
    private _notariosService: NotarioService) {
    this.notario = new Notario("","","","","","","","","",true,"","","","","","","");
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }
  editarNotario() {
    console.log(this.notario)
    this._notariosService.editarNotario(this.notario).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if(response.description === 'Editado Correctamente'){
              this.dialogRef.close();
              this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
                duration: 2100, horizontalPosition: 'end'
              });
           // }
          }else{
              this.snackBar.open(response.description, "", {panelClass: ['colorError'],
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
        this.snackBar.open("Verifique los datos!", "", { panelClass: ['colorError'],
        duration: 3100, horizontalPosition: 'end'
        });
      }
    )
  }
}

@Component({
  selector: 'eliminar-notarios',
  templateUrl: 'eliminar-notarios.html',
  styleUrls: ['./notarios.component.scss']
})
export class EliminarNotarios {

  ngOnInit() {
    //this.buscarAseguradora();
    this.notario.codigo = codigo;
    this.notario.cheque = cheque;
    this.notario.colegiado = empresa;
    this.notario.direccion = direccion;
    this.notario.direccionDos = direccionDos;
    this.notario.email = email;
    this.notario.empresa = empresa;
    this.notario.fax = fax;
    this.notario.identificacion = identificacion;
    this.notario.isr = isr;
    this.notario.nombre = nombre;
    this.notario.numeroCuenta = numeroCuenta;
    this.notario.telefono = telefono;
    this.notario.tipoCuenta = tipoCuenta;    
  }

  public notario: Notario;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarNotarios>,
    private snackBar: MatSnackBar,
    private _notariosService: NotarioService) {
      this.notario = new Notario("","","","","","","","","",true,"","","","","","","");
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  eliminarNotario() {
    this._notariosService.eliminarNotario(this.notario).subscribe(
      response => {
        if (!response) {
          this.status = "error"
        } else {
          this.status = "Success"
          if(response.description === 'Eliminado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {panelClass: ['colorError'],
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
  selector: 'agregar-notarios',
  templateUrl: 'agregar-notarios.html',
  styleUrls: ['./notarios.component.scss'],
  providers: [NotarioService]
})
export class AgregarNotarios {

  public notario: Notario;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarNotarios>,
    private snackBar: MatSnackBar,
    private _notariosService: NotarioService) {
      this.notario = new Notario("","","","","","","","","",true,"","","","","","","");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  crearNotario() {
    this.notario.empresa = "1";
    this._notariosService.crearNotario(this.notario).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if(response.description === 'Agregado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {panelClass: ['colorError'],
              duration: 3100, horizontalPosition: 'end'
            });
          }
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error';
          this.snackBar.open("Verifique los datos!", "", { panelClass: ['colorError'],
          duration: 3100, horizontalPosition: 'end'
          });
        }
      }
    )
  }
}

@Component({
  selector: 'ver-notario',
  templateUrl: 'ver-notario.html',
  styleUrls: ['./notarios.component.scss'],
  providers: [NotarioService]

})
export class VerNotario implements OnInit {

  ngOnInit() {
    //this.buscarAseguradora();
    this.notario.codigo = codigo;
    this.notario.cheque = cheque;
    this.notario.colegiado = empresa;
    this.notario.direccion = direccion;
    this.notario.direccionDos = direccionDos;
    this.notario.email = email;
    this.notario.empresa = empresa;
    this.notario.fax = fax;
    this.notario.identificacion = identificacion;
    this.notario.isr = isr;
    this.notario.nombre = nombre;
    this.notario.numeroCuenta = numeroCuenta;
    this.notario.telefono = telefono;
    this.notario.tipoCuenta = tipoCuenta;    
  }

  public notario: Notario;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerNotario>,
    private snackBar: MatSnackBar,
    private _NotariosService: NotarioService) {
    this.notario = new Notario("","","","","","","","","",true,"","","","","","","");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}