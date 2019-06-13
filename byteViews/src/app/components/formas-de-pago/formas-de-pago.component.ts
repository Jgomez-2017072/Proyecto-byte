import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormasDePago } from 'src/app/models/formasDePago.model';
import { FormasDePagoService } from 'src/app/services/formas-de-pago.service';


export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;

}

var datosFormaDePago: FormasDePago[];

var codigo = '';
var descripcion = '';
var empresa = '';


@Component({
  selector: 'app-formas-de-pago',
  templateUrl: './formas-de-pago.component.html',
  styleUrls: ['./formas-de-pago.component.scss']
})
export class FormasDePagoComponent implements OnInit {
  public dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getFormaDePago();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];
  
  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _formaDePagoService : FormasDePagoService) {}


//CRUD --------------------- TRAER DATOS --------------------------
  



public getFormaDePago(){
  this._formaDePagoService.getFormasDePago().subscribe(
    response => {
      if(response){
        datosFormaDePago = response;
        console.log(datosFormaDePago)
        this.dataSource = new MatTableDataSource<PeriodicElement>(datosFormaDePago);
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
    const dialogRef = this.dialog.open(EditarFormasDePago, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
        this.getFormaDePago();
     
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarFormasDePago, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
        this.getFormaDePago();
     
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarFormasDePago, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
        this.getFormaDePago();
     
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerFormaDePago, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'editar-formas-de-pago',
  templateUrl: 'editar-formas-de-pago.html',
  styleUrls: ['./formas-de-pago.component.scss']
})
export class EditarFormasDePago {

  ngOnInit() {
    //this.buscarAseguradora();
    this.formaDePago.codigo = codigo;
    this.formaDePago.descripcion = descripcion;
    this.formaDePago.empresa = empresa;
  }

  public formaDePago : FormasDePago ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarFormasDePago>, private snackBar: MatSnackBar, private _formaDePagoService : FormasDePagoService) {
      this.formaDePago = new FormasDePago("","","");
    }

   

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarFormaDePago(){
    console.log(this.formaDePago)
    this._formaDePagoService.editarFormaDePago(this.formaDePago).subscribe(
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
  selector: 'eliminar-formas-de-pago',
  templateUrl: 'eliminar-formas-de-pago.html',
  styleUrls: ['./formas-de-pago.component.scss']
})
export class EliminarFormasDePago {
  
  ngOnInit() {
    //this.buscarAseguradora();
    this.formaDePago.codigo = codigo;
    this.formaDePago.descripcion = descripcion;
    this.formaDePago.empresa = empresa;
  }
  
  public formaDePago : FormasDePago ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarFormasDePago>, private snackBar: MatSnackBar, private _formasDePagoService : FormasDePagoService) {
      this.formaDePago = new FormasDePago("","","");
    }

    

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarFormaDePAgo(){    
    this._formasDePagoService.eliminarFormaDePago(this.formaDePago).subscribe(
      response=>{
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
  selector: 'agregar-formas-de-pago',
  templateUrl: 'agregar-formas-de-pago.html',
  styleUrls: ['./formas-de-pago.component.scss'],
  providers : [FormasDePagoService]
})
export class AgregarFormasDePago {
  public formasDePago : FormasDePago ;
  public status;
  constructor(
    public dialogRef: MatDialogRef<AgregarFormasDePago>, private snackBar: MatSnackBar, private _formaDePagoService: FormasDePagoService) {
      this.formasDePago = new FormasDePago("","","");
    }

    
  onNoClick(): void {
    this.dialogRef.close();
  }

  crearFormaDePago(){
    this.formasDePago.empresa = "1";
    this._formaDePagoService.crearFormaDePago(this.formasDePago).subscribe(
      response => {
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
  selector: 'ver-forma-de-pago',
  templateUrl: 'ver-forma-de-pago.html',
  styleUrls: ['./formas-de-pago.component.scss'],
  providers : [FormasDePagoService]

})
export class VerFormaDePago implements OnInit{

  ngOnInit() {
    this.formaDePago.codigo = codigo;
    this.formaDePago.descripcion = descripcion;
    this.formaDePago.empresa = empresa;
    //this.buscarAseguradora();
  }
  
  public formaDePago : FormasDePago ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerFormaDePago>,private snackBar: MatSnackBar) {
      this.formaDePago = new FormasDePago("","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  

}
