import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Almacenadora } from 'src/app/models/almacenadora.model';
import { AlmacenadorasService } from 'src/app/services/almacenadoras.service';

export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}


var datosAlmacenadora: Almacenadora[];


var codigo = '';
var descripcion = '';
var empresa = '';


 

@Component({
  selector: 'app-almacenadoras',
  templateUrl: './almacenadoras.component.html',
  styleUrls: ['./almacenadoras.component.scss'],
  providers: [AlmacenadorasService]

})

export class AlmacenadorasComponent implements OnInit {

  public dataSource;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAlmacenadoras();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];

  //FILTRO
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _almacenadorasService: AlmacenadorasService) { }


  //Crud -------------- Trae datos -----------------------


  public getAlmacenadoras() {
    this._almacenadorasService.getAlmacenadoras().subscribe(
      response => {
        if (response) {
          datosAlmacenadora = response;
          console.log(datosAlmacenadora)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosAlmacenadora);
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
    const dialogRef = this.dialog.open(EditarAlmacenadora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       this.getAlmacenadoras();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarAlmacenadora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        this.getAlmacenadoras();
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarAlmacenadora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');     
        this.getAlmacenadoras();
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerAlmacenadora, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-almacenadora',
  templateUrl: 'editar-almacenadora.html',
  styleUrls: ['./almacenadoras.component.scss'],
  providers: [AlmacenadorasService]

})
export class EditarAlmacenadora  implements OnInit {

  

  ngOnInit() {
    this.almacenadora.codigo = codigo;
    this.almacenadora.descripcion = descripcion;
    this.almacenadora.empresa = empresa;
  }

  public almacenadora: Almacenadora;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarAlmacenadora>, private snackBar: MatSnackBar, private _almacenadorasService: AlmacenadorasService) {
    //super(dialog,_almacenadorasService2);
    this.almacenadora = new Almacenadora("", "", "");
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarAlmacenadora() {
    
    console.log(this.almacenadora)
    this._almacenadorasService.editarAlmacenadora(this.almacenadora).subscribe(
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
              this.snackBar.open(response.description, "", { panelClass: ['colorError'],
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
  selector: 'eliminar-almacenadora',
  templateUrl: 'eliminar-almacenadora.html',
  styleUrls: ['./almacenadoras.component.scss']
})
export class EliminarAlmacenadora implements OnInit {

  ngOnInit() {
    this.almacenadora.codigo = codigo;
    this.almacenadora.descripcion = descripcion;
    this.almacenadora.empresa = empresa;
  }

  public almacenadora: Almacenadora;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarAlmacenadora>, private snackBar: MatSnackBar, private _almacenadorasService: AlmacenadorasService) {
    this.almacenadora = new Almacenadora("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarAlmacenadora() {
    this._almacenadorasService.eliminarAlmacenadora(this.almacenadora).subscribe(
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
            this.snackBar.open(response.description, "", { panelClass: ['colorError'],
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
  selector: 'agregar-almacenadora',
  templateUrl: 'agregar-almacenadora.html',
  styleUrls: ['./almacenadoras.component.scss']
})
export class AgregarAlmacenadora {

  public almacenadora: Almacenadora;
  public status;
  
  constructor(
    public dialogRef: MatDialogRef<AgregarAlmacenadora>, private snackBar: MatSnackBar, private _almacenadorasService: AlmacenadorasService) {
    this.almacenadora = new Almacenadora("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearAlmacenadora() {
    this.almacenadora.empresa = "1";
    this._almacenadorasService.crearAlmacenadora(this.almacenadora).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if(response.description === 'Agregado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
              duration: 2100, horizontalPosition: 'end',
            });
          }else{    
            this.snackBar.open(response.description, "", { panelClass: ['colorError'],
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
  selector: 'ver-almacenadora',
  templateUrl: 'ver-almacenadora.html',
  styleUrls: ['./almacenadoras.component.scss']
})

export class VerAlmacenadora implements OnInit {

  ngOnInit() {
    this.almacenadora.codigo = codigo;
    this.almacenadora.descripcion = descripcion;
    this.almacenadora.empresa = empresa;
  }

  public almacenadora: Almacenadora;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarAlmacenadora>, private snackBar: MatSnackBar, private _almacenadorasService: AlmacenadorasService) {
    this.almacenadora = new Almacenadora("", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}


