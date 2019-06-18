import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatTableDataSource, MatSnackBar, MatDialogRef } from '@angular/material';
import { MotivoCambioEjecutivoService } from 'src/app/services/motivo-cambio-ejecutivo.service';
import { MotivoCambioEjecutivo } from 'src/app/models/motivo-cambio-ejecutivo.model';
import { componentFactoryName } from '@angular/compiler';



export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String
}

var datosMotivoCambioEjecutivo: MotivoCambioEjecutivo[];

var codigo = '';
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-motivo-cambio-ejecutivo',
  templateUrl: './motivo-cambio-ejecutivo.component.html',
  styleUrls: ['./motivo-cambio-ejecutivo.component.scss'],
  providers: [MotivoCambioEjecutivoService]
})

export class MotivoCambioEjecutivoComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getMotivoCambioEjecutivo();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //Filtro
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Para los modal
  constructor(public dialog: MatDialog, private _motivoCambioEjecutivoService: MotivoCambioEjecutivoService) { }

  //CRUD
  public getMotivoCambioEjecutivo() {
    this._motivoCambioEjecutivoService.getMotivoCambioEjecutivo().subscribe(
      response => {
        if (response) {
          datosMotivoCambioEjecutivo = response;
          console.log(datosMotivoCambioEjecutivo);
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosMotivoCambioEjecutivo);
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

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarMotivoCambioEjecutivo, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getMotivoCambioEjecutivo();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMotivoCambioEjecutivo, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getMotivoCambioEjecutivo();
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMotivoCambioEjecutivo, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getMotivoCambioEjecutivo();
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerMotivoCambioEjecutivo, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getMotivoCambioEjecutivo();
    });
  }
}




//Instanciar Modals

//Modal Agregar
@Component({
  selector: 'agregar-motivo-cambio-ejecutivo',
  templateUrl: 'agregar-motivo-cambio-ejecutivo.html',
  styleUrls: ['./motivo-cambio-ejecutivo.component.scss']
})
export class AgregarMotivoCambioEjecutivo {

  public motivoCambioEjecutivo: MotivoCambioEjecutivo
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarMotivoCambioEjecutivo>, private snackBar: MatSnackBar, private _motivoCambioEjecutivo: MotivoCambioEjecutivoService
  ) {
    this.motivoCambioEjecutivo = new MotivoCambioEjecutivo('', '', '');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  crearMotivoCambioEjecutivo() {
    this.motivoCambioEjecutivo.empresa = '1';
    this._motivoCambioEjecutivo.crearMotivoCambioEjecutivo(this.motivoCambioEjecutivo).subscribe(
      response => {
        if (response) {
          this.status = 'ok'
          if(response.description === 'Agregado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration:2100, horizontalPosition: 'end'
            })
          }else {
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            })
          }
       
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

//Modal Eliminar
@Component({
  selector: 'eliminar-motivo-cambio-ejecutivo',
  templateUrl: 'eliminar-motivo-cambio-ejecutivo.html',
  styleUrls: ['./motivo-cambio-ejecutivo.component.scss']
})
export class EliminarMotivoCambioEjecutivo implements OnInit {
  ngOnInit(): void {
    this.motivoCambioEjecutivo.codigo = codigo,
      this.motivoCambioEjecutivo.descripcion = descripcion,
      this.motivoCambioEjecutivo.empresa = empresa
  }
  public motivoCambioEjecutivo: MotivoCambioEjecutivo;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarMotivoCambioEjecutivo>, private snackBar: MatSnackBar, private _motivoCambioEjecutivoService: MotivoCambioEjecutivoService
  ) {
    this.motivoCambioEjecutivo = new MotivoCambioEjecutivo('', '', '')
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }
  eliminarMotivoCambioEjecutivo() {
    this._motivoCambioEjecutivoService.eliminarMotivoCambioEjecutivo(this.motivoCambioEjecutivo).subscribe(
      response => {
        if (!response) {
          this.status = 'error'
        } else {
          this.status = 'Succes'
          if(response.description === 'Eliminado correctamente' ){
            this.dialogRef.close();
            this.snackBar.open(response.description,"", {
              duration:2100, horizontalPosition:'end'
            })
          }else {
            this.snackBar.open(response.description,"", {
              duration:2100, horizontalPosition:'end'
            })
          }
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = "error"
        }

      }
    )
  }
}

@Component({
  selector: 'editar-motivo-cambio-ejecutivo',
  templateUrl: 'editar-motivo-cambio-ejecutivo.html',
  styleUrls: ['./motivo-cambio-ejecutivo.component.scss']
})

export class EditarMotivoCambioEjecutivo implements OnInit {

  ngOnInit(): void {
    this.motivoCambioEjecutivo.codigo = codigo,
      this.motivoCambioEjecutivo.descripcion = descripcion,
      this.motivoCambioEjecutivo.empresa = empresa
  }
  public motivoCambioEjecutivo: MotivoCambioEjecutivo;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarMotivoCambioEjecutivo>, private snackBar: MatSnackBar, private _motivoCambioEjecutivoService: MotivoCambioEjecutivoService
  ) {
    this.motivoCambioEjecutivo = new MotivoCambioEjecutivo('', '', '')
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  editarMotivoCambioEjecutivo() {
    console.log(this.motivoCambioEjecutivo);
    this._motivoCambioEjecutivoService.editarMotivoCambioEjecutivo(this.motivoCambioEjecutivo).subscribe(
      response => {
        if (response) {
          this.status = 'ok'
          if(response.description === 'Agregado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.descripcion, "", {
              duration:2100, horizontalPosition: 'end'
            })
          }else {
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            })
          }
       
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
  selector: 'ver-motivo-cambio-ejecutivo',
  templateUrl: 'ver-motivo-cambio-ejecutivo.html',
  styleUrls: ['./motivo-cambio-ejecutivo.component.scss'],
})
export class VerMotivoCambioEjecutivo implements OnInit {
  ngOnInit() {
 this.motivoCambioEjecutivo.codigo = codigo;
 this.motivoCambioEjecutivo.descripcion = descripcion;
 this.motivoCambioEjecutivo.empresa = empresa
  }

  public motivoCambioEjecutivo: MotivoCambioEjecutivo
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerMotivoCambioEjecutivo>, private snackBar: MatSnackBar, private _motivoCambioEjecutivoService: MotivoCambioEjecutivoService) {
    this.motivoCambioEjecutivo = new MotivoCambioEjecutivo("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}






