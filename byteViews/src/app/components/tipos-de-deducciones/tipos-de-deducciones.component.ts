import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator, MatTab } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TipoDeduccion } from 'src/app/models/tipo-deduccion.model';
import { TipoDeduccionService } from 'src/app/services/tipo-deduccion.service';

export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosTipoDeduccion: TipoDeduccion[]//Modelo de Deduccion

var codigo = '';
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-tipos-de-deducciones',
  templateUrl: './tipos-de-deducciones.component.html',
  styleUrls: ['./tipos-de-deducciones.component.scss']
})
export class TiposDeDeduccionesComponent implements OnInit {
  public dataSource
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getTiposDeduccion();
  }

  displayedColumns: string[] = ['codigo', 'descripcion' ,'editar', 'eliminar', 'ver'];


  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _tipoDeduccionService : TipoDeduccionService) {}

  //CRUD----------------------------------- TRAER DATOS-------------------------------------

  public getTiposDeduccion(){
    this._tipoDeduccionService.getTiposDeduccion().subscribe(
      response => {
        if(response){
          datosTipoDeduccion = response;
          console.log(datosTipoDeduccion);
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosTipoDeduccion);
          this.dataSource.paginator = this.paginator
        }
      },
      error => {
        console.log(<any>error);    
      }
    )
  }

  buscar(id, descripcion2, empresa2){
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    console.log(codigo + " - " + descripcion + " - " + empresa)
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarTipoDeDeduccion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getTiposDeduccion();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTipoDeDeduccion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      setTimeout(() => {
        this.getTiposDeduccion();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTipoDeDeduccion, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      setTimeout(() => {
        this.getTiposDeduccion();
      }, 800);
    });
  }
}

@Component({
  selector: 'editar-tipo-de-deduccion',
  templateUrl: 'editar-tipo-de-deduccion.html',
  styleUrls: ['./tipos-de-deducciones.component.scss']
})

export class EditarTipoDeDeduccion {
  constructor(
    public dialogRef: MatDialogRef<EditarTipoDeDeduccion>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-tipo-de-deduccion',
  templateUrl: 'eliminar-tipo-de-deduccion.html',
  styleUrls: ['./tipos-de-deducciones.component.scss']
})
export class EliminarTipoDeDeduccion {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarTipoDeDeduccion>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-tipo-de-deduccion',
  templateUrl: 'agregar-tipo-de-deduccion.html',
  styleUrls: ['./tipos-de-deducciones.component.scss'],
  providers: [TipoDeduccionService]
})

export class AgregarTipoDeDeduccion {
  public tipoDeduccion : TipoDeduccion;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarTipoDeDeduccion>, private snackBar: MatSnackBar, private _tipoDeduccionService : TipoDeduccionService) {
      this.tipoDeduccion = new TipoDeduccion('','','')
    }

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearTipoDeduccion() {
    this.tipoDeduccion.empresa = '1';
    this._tipoDeduccionService.crearTipoDeduccion(this.tipoDeduccion).subscribe(
      response => {
        if(response) {
          this.status = 'ok'
          console.log(response);
        }
      },
      error => {
        if(error){
          console.log(<any>error);
          this.status= 'error'
        }
      }
    )
  }

}




