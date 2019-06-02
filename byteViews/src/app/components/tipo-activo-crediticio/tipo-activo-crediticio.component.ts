import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TipoActivoCrediticio } from 'src/app/models/tipoActivoCrediticio.model';
import { TipoActivoCrediticioService } from 'src/app/services/tipoActivoCrediticio.service';

export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosTipoActivoCrediticio: TipoActivoCrediticio[];

var codigo = '';
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-tipo-activo-crediticio',
  templateUrl: './tipo-activo-crediticio.component.html',
  styleUrls: ['./tipo-activo-crediticio.component.scss'],
  providers : [TipoActivoCrediticioService]
})
export class TipoActivoCrediticioComponent implements OnInit {

  public dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getTipoActivoCrediticio();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];
  
  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _tipoActivoCrediticio : TipoActivoCrediticioService) {}


  public getTipoActivoCrediticio(){
    this._tipoActivoCrediticio.getTipoActivoCrediticio().subscribe(
      response => {
        if(response){
          datosTipoActivoCrediticio = response;
          console.log(datosTipoActivoCrediticio)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosTipoActivoCrediticio);
          this.dataSource.paginator = this.paginator;

        } 
      },
      error=>{
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
    const dialogRef = this.dialog.open(EditarTipoActivoCrediticio, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getTipoActivoCrediticio();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTipoActivoCrediticio, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getTipoActivoCrediticio();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTipoActivoCrediticio, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getTipoActivoCrediticio();
      }, 800);
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerTipoActivoCrediticio, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
    });
  }

}




@Component({
  selector: 'editar-tipo-activo-crediticio',
  templateUrl: 'editar-tipo-activo-crediticio.html',
  styleUrls: ['./tipo-activo-crediticio.component.scss']
})
export class EditarTipoActivoCrediticio implements OnInit{

  ngOnInit() {
    //this.buscarAseguradora();
    this.tipoActivoCrediticio.codigo = codigo;
    this.tipoActivoCrediticio.descripcion = descripcion;
    this.tipoActivoCrediticio.empresa = empresa;
  }

  public tipoActivoCrediticio : TipoActivoCrediticio ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarTipoActivoCrediticio>, private snackBar: MatSnackBar, private _tipoActivoCrediticioService : TipoActivoCrediticioService) {
      this.tipoActivoCrediticio = new TipoActivoCrediticio("","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Actualizado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarTipoActivoCrediticio(){
    console.log(this.tipoActivoCrediticio)
    this._tipoActivoCrediticioService.editarTipoActivoCrediticio(this.tipoActivoCrediticio).subscribe(
      response => {
        if(response){
          this.status = 'ok';
          console.log(response);
        }
      },
      error => {
        if(error){
          console.log(<any>error);
          this.status = 'error';
        }
      }
    )
  }


}

@Component({
  selector: 'eliminar-tipo-activo-crediticio',
  templateUrl: 'eliminar-tipo-activo-crediticio.html',
  styleUrls: ['./tipo-activo-crediticio.component.scss']
})
export class EliminarTipoActivoCrediticio implements OnInit {

  ngOnInit() {
    //this.buscarAseguradora();
    this.tipoActivoCrediticio.codigo = codigo;
    this.tipoActivoCrediticio.descripcion = descripcion;
    this.tipoActivoCrediticio.empresa = empresa;
  }
  
  public tipoActivoCrediticio : TipoActivoCrediticio ;
  public status;
  
  constructor(
    public dialogRef: MatDialogRef<EliminarTipoActivoCrediticio>, private snackBar: MatSnackBar, private _tipoActivoCrediticioService : TipoActivoCrediticioService) {
      this.tipoActivoCrediticio = new TipoActivoCrediticio("","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarTipoActivoCrediticio(){    
    this._tipoActivoCrediticioService.eliminarTipoActivoCrediticio(this.tipoActivoCrediticio).subscribe(
      response=>{
        if(!response){
          this.status = "error"
        }else{
          this.status = "Success"
          console.log(response)
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = "error";
        }
      }
    )
  }
}

@Component({
  selector: 'agregar-tipo-activo-crediticio',
  templateUrl: 'agregar-tipo-activo-crediticio.html',
  styleUrls: ['./tipo-activo-crediticio.component.scss'],
  providers : [TipoActivoCrediticioService]
})
export class AgregarTipoActivoCrediticio {
  
  public tipoActivoCrediticio : TipoActivoCrediticio;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarTipoActivoCrediticio>, private snackBar: MatSnackBar, private _tipoActivoCrediticioService : TipoActivoCrediticioService) {
      this.tipoActivoCrediticio = new TipoActivoCrediticio("","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearTipoActivoCrediticio(){
    this.tipoActivoCrediticio.empresa = "1";
    this.tipoActivoCrediticio.equivalencia = "";
    this._tipoActivoCrediticioService.crearTipoActivoCrediticio(this.tipoActivoCrediticio).subscribe(
      response =>{
        if(response){
          this.status = 'ok';
          console.log(response);
        }
      },
      error => {
        if(error){
          console.log(<any>error);
          this.status = 'error';
        }
      }
    )
  }

}

@Component({
  selector: 'ver-tipo-activo-crediticio',
  templateUrl: 'ver-tipo-activo-crediticio.html',
  styleUrls: ['./tipo-activo-crediticio.component.scss'],
  providers: [TipoActivoCrediticioService]
})
export class VerTipoActivoCrediticio implements OnInit{
  ngOnInit(){
    this.tipoActivoCrediticio.codigo = codigo;
    this.tipoActivoCrediticio.descripcion = descripcion;
    this.tipoActivoCrediticio.empresa = empresa;
  }

  public tipoActivoCrediticio : TipoActivoCrediticio;
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerTipoActivoCrediticio>,private snackBar: MatSnackBar) {
      this.tipoActivoCrediticio = new TipoActivoCrediticio("","","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}




