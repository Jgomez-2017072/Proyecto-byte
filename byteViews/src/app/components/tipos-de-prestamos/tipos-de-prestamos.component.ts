import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TipoPrestamo } from 'src/app/models/tipoPrestamo.model';
import { TipoPrestamoService } from 'src/app/services/tipoPrestamo.service';

export interface PeriodicElement {
 codigo: String;
 descripcion: String;
}

var datosTipoPrestamo: TipoPrestamo[];

var codigo = '';
var descripcion = '';




@Component({
  selector: 'app-tipos-de-prestamos',
  templateUrl: './tipos-de-prestamos.component.html',
  styleUrls: ['./tipos-de-prestamos.component.scss'],
  providers : [TipoPrestamoService]
})
export class TiposDePrestamosComponent implements OnInit {
  public dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getTipoPrestamo();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];
  
  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _tipoPrestamoService : TipoPrestamoService) {}


  public getTipoPrestamo(){
    this._tipoPrestamoService.getTipoPrestamo().subscribe(
      response => {
        if(response){
          datosTipoPrestamo = response;
          console.log(datosTipoPrestamo)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosTipoPrestamo);
          this.dataSource.paginator = this.paginator;

        } 
      },
      error=>{
        console.log(<any>error);
      }

    )
  }

  buscar(id, descripcion2){
    codigo = id;
    descripcion = descripcion2;
    
    console.log(codigo + " - " + descripcion)
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarTipoDePrestamos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

     
        this.getTipoPrestamo();
      
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarTipoDePrestamos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
        this.getTipoPrestamo();
     
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarTipoDePrestamos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
        this.getTipoPrestamo();
      
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerTipoPrestamo, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
    });
  }
}

@Component({
  selector: 'editar-tipo-de-prestamo',
  templateUrl: 'editar-tipo-de-prestamo.html',
  styleUrls: ['./tipos-de-prestamos.component.scss']
})
export class EditarTipoDePrestamos implements OnInit{

  ngOnInit() {
    //this.buscarAseguradora();
    this.tipoPrestamo.codigo = codigo;
    this.tipoPrestamo.descripcion = descripcion;
   
  }

  public tipoPrestamo : TipoPrestamo ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarTipoDePrestamos>, private snackBar: MatSnackBar, private _tipoPrestamoService : TipoPrestamoService) {
      this.tipoPrestamo = new TipoPrestamo("","");
    }

    

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  editarTipoPrestamo(){
    console.log(this.tipoPrestamo)
    this._tipoPrestamoService.editarTipoPrestamo(this.tipoPrestamo).subscribe(
      response => {
        if(response){
          this.status = 'ok';
          if(response.description === 'Editado Correctamente'){
              this.dialogRef.close();
              this.snackBar.open(response.description, "", {
                duration: 2100, horizontalPosition: 'end'
              });
           
          }else{
              this.snackBar.open(response.description, "", {
                duration: 3100, horizontalPosition: 'end'
              });
          }
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
  selector: 'eliminar-tipo-de-prestamo',
  templateUrl: 'eliminar-tipo-de-prestamo.html',
  styleUrls: ['./tipos-de-prestamos.component.scss']
})
export class EliminarTipoDePrestamos implements OnInit{

  ngOnInit() {
    //this.buscarAseguradora();
    this.tipoPrestamo.codigo = codigo;
    this.tipoPrestamo.descripcion = descripcion;
    
  }
  
  public tipoPrestamo : TipoPrestamo ;
  public status;

  
  constructor(
    public dialogRef: MatDialogRef<EliminarTipoDePrestamos>, private snackBar: MatSnackBar, private _tipoPrestamoService : TipoPrestamoService) {
      this.tipoPrestamo = new TipoPrestamo("","");
    }

    

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarTipoPrestamo(){
    this._tipoPrestamoService.eliminarTipoPrestamo(this.tipoPrestamo).subscribe(
      response =>{
        if(!response){
          this.status = "error"
        }else{
          this.status = "Success"
          if(response.description === 'Eliminado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {
              duration: 3100, horizontalPosition: 'end'
            });
          }
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage !=null){
          this.status = "error";
        }
      }
    )
  }

}

@Component({
  selector: 'agregar-tipo-de-prestamo',
  templateUrl: 'agregar-tipo-de-prestamo.html',
  styleUrls: ['./tipos-de-prestamos.component.scss'],
  providers : [TipoPrestamoService]
})
export class AgregarTipoDePrestamos {
  
  public tipoPrestamo : TipoPrestamo;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarTipoDePrestamos>, private snackBar: MatSnackBar, private _tipoPrestamoService : TipoPrestamoService) {
      this.tipoPrestamo = new TipoPrestamo("","");
    }

    

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearTipoPrestamo(){
    this._tipoPrestamoService.crearTipoPrestamo(this.tipoPrestamo).subscribe(
      response =>{
        if(response){
          this.status = 'ok';
          if(response.description === 'Agregado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {
              duration: 3100, horizontalPosition: 'end'
            });
          }
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
  selector: 'ver-tipo-prestamo',
  templateUrl: 'ver-tipo-prestamo.html',
  styleUrls: ['./tipos-de-prestamos.component.scss'],
  providers: [TipoPrestamoService]
})
export class VerTipoPrestamo implements OnInit{
  ngOnInit(){
    this.tipoPrestamo.codigo = codigo;
    this.tipoPrestamo.descripcion = descripcion;
    
  }

  public tipoPrestamo : TipoPrestamo;
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerTipoPrestamo>,private snackBar: MatSnackBar) {
      this.tipoPrestamo = new TipoPrestamo("","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}





