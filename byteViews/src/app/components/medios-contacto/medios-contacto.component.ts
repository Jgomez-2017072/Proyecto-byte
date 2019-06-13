import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Medios } from 'src/app/models/medios.model';
import { MediosContactosService } from 'src/app/services/medios-contactos.service';

export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}


var datosMedios: Medios[];


var codigo = '';
var descripcion = '';
var empresa = '';



@Component({
  selector: 'app-medios-contacto',
  templateUrl: './medios-contacto.component.html',
  styleUrls: ['./medios-contacto.component.scss'],
  providers:[MediosContactosService]
})
export class MediosContactoComponent implements OnInit {
  public dataSource;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getMedios();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //FILTRO
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _mediosService: MediosContactosService) { }


  //Crud -------------- Trae datos -----------------------


  public getMedios() {
    this._mediosService.getMedios().subscribe(
      response => {
        if (response) {
          datosMedios = response;
          console.log(datosMedios)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosMedios);
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


  //----------------------------------------------------------


  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMediosContacto, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getMedios();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMediosContacto, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getMedios();
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarMediosContacto, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getMedios();
    });
  }

  
  openDialog4(): void {
    const dialogRef = this.dialog.open(VerMedio, {
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
  styleUrls: ['./medios-contacto.component.scss'],
  providers : [MediosContactosService]
})

export class EditarMediosContacto {
  ngOnInit() {
    this.medios.codigo = codigo;
    this.medios.descripcion = descripcion;
    this.medios.empresa = empresa;
  }

  public medios: Medios;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarMediosContacto>, private snackBar: MatSnackBar, private _mediosService: MediosContactosService) {
    this.medios = new Medios("", "", "");
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  editarMedios() {
    console.log(this.medios)
    this._mediosService.editarMedios(this.medios).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if(response.description === 'Editado Correctamente') {
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            })
          }else {
            this.snackBar.open(response.description, '', {
              duration: 2100, horizontalPosition: 'end'
            })
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
  selector: 'eliminar-medios-contacto',
  templateUrl: 'eliminar-medios-contacto.html',
  styleUrls: ['./medios-contacto.component.scss'],
  providers : [MediosContactosService]
})
export class EliminarMediosContacto {
  
  ngOnInit() {
    this.medios.codigo = codigo;
    this.medios.descripcion = descripcion;
    this.medios.empresa = empresa;
  }

  public medios: Medios;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarMediosContacto>, private snackBar: MatSnackBar, private _mediosService: MediosContactosService) {
    this.medios = new Medios("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarMedios() {
    this._mediosService.eliminarMedios(this.medios).subscribe(
      response => {
        if (!response) {
          this.status = "error"
        } else {
          this.status = "Success"
         if(response.description === 'Eliminado correctamente'){
           this.dialogRef.close();
           this.snackBar.open(response.description, '', {
             duration: 2100, horizontalPosition: 'end'
           })
         }else {
           this.snackBar.open(response.description, '', {
             duration: 2100, horizontalPosition: 'end'
           })
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
  selector: 'agregar-medios-contacto',
  templateUrl: 'agregar-medios-contacto.html',
  styleUrls: ['./medios-contacto.component.scss'],
  providers : [MediosContactosService]
})
export class AgregarMediosContacto {
  
  public medios: Medios;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarMediosContacto>, private snackBar: MatSnackBar, private _mediosService: MediosContactosService) {
    this.medios = new Medios("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearMedios() {
    this.medios.empresa = "1";
    this._mediosService.crearMedios(this.medios).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if(response.description === 'Eliminado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, '', {
              duration: 2100, horizontalPosition: 'end'
            })
          }else {
            this.snackBar.open(response.description, '', {
              duration: 2100, horizontalPosition: 'end'
            })
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
  selector: 'ver-medio',
  templateUrl: 'ver-medio.html',
  styleUrls: ['./medios-contacto.component.scss'],
  providers : [MediosContactosService]
})

export class VerMedio implements OnInit {

  ngOnInit() {
    this.medios.codigo = codigo;
    this.medios.descripcion = descripcion;
    this.medios.empresa = empresa;
  }

  public medios: Medios;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarMediosContacto>, private snackBar: MatSnackBar, private _mediosService: MediosContactosService) {
    this.medios = new Medios("", "", "");
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


}

