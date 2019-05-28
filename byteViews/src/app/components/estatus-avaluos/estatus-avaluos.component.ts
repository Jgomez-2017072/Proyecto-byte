import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { EstatusAvaluosService } from 'src/app/services/estatus-avaluos.service';
import { EstatusAvaluos } from 'src/app/models/estatus-avaluos.model';


export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosEstatusAvaluos: EstatusAvaluos[];


var codigo = '';
var descripcion = '';
var empresa = '';



@Component({
  selector: 'app-estatus-avaluos',
  templateUrl: './estatus-avaluos.component.html',
  styleUrls: ['./estatus-avaluos.component.scss'],
  providers: [EstatusAvaluosService]
})
export class EstatusAvaluosComponent implements OnInit {

  public dataSource;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAseguradoras()
 }


  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar','ver'];

  //SELECTOR

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //////////////por aca

  //PARA LOS MODALS
  constructor(public dialog: MatDialog,
    private _estatusAvaluosService : EstatusAvaluosService) {}

    //CRUD --------------------- TRAER DATOS --------------------------
  



  public getAseguradoras(){
    this._estatusAvaluosService.getEstatusAvaluos().subscribe(
      response => {
        if(response){
          datosEstatusAvaluos = response;
          console.log(datosEstatusAvaluos)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosEstatusAvaluos);
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
    const dialogRef = this.dialog.open(EditarEstatusAvaluos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getAseguradoras();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarEstatusAvaluos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getAseguradoras();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarEstatusAvaluos, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      setTimeout(() => {
        this.getAseguradoras();
      }, 800);
    });
  }
  openDialog4(): void {
    const dialogRef = this.dialog.open(VerEstatusAvaluos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-almacenadora',
  templateUrl: 'editar-estatus-avaluos.html',
  styleUrls: ['./estatus-avaluos.component.scss']
})
export class EditarEstatusAvaluos {
  ngOnInit() {    
    this.estatusAvaluos.codigo = codigo;
    this.estatusAvaluos.descripcion = descripcion;
    this.estatusAvaluos.empresa = empresa;
  }

  public estatusAvaluos : EstatusAvaluos ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarEstatusAvaluos>, 
    private snackBar: MatSnackBar,
    private _estatusAvaluosService: EstatusAvaluosService) {
      this.estatusAvaluos = new EstatusAvaluos("","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Actualizado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarEstatusAvaluos(){
    console.log(this.estatusAvaluos)
    this._estatusAvaluosService.editarEstatusAvaluos(this.estatusAvaluos).subscribe(
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
  selector: 'eliminar-estatus-avaluos',
  templateUrl: 'eliminar-estatus-avaluos.html',
  styleUrls: ['./estatus-avaluos.component.scss']
})
export class EliminarEstatusAvaluos {

  ngOnInit() {    
    this.estatusAvaluos.codigo = codigo;
    this.estatusAvaluos.descripcion = descripcion;
    this.estatusAvaluos.empresa = empresa;
  }
  
  public estatusAvaluos : EstatusAvaluos ;
  public status;

  
  constructor(
    public dialogRef: MatDialogRef<EliminarEstatusAvaluos>, 
    private snackBar: MatSnackBar,
    private _estatusAvaluosSercice : EstatusAvaluosService) {
      this.estatusAvaluos = new EstatusAvaluos("","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarEstatusAvaluos(){    
    this._estatusAvaluosSercice.eliminarEstatusAvaluos(this.estatusAvaluos).subscribe(
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
  selector: 'agregar-estatus-avaluos',
  templateUrl: 'agregar-estatus-avaluos.html',
  styleUrls: ['./estatus-avaluos.component.scss'],
  providers: [EstatusAvaluosService]
})
export class AgregarEstatusAvaluos {

  public estatusAvaluos : EstatusAvaluos ;
  public status;
  
  constructor(
    public dialogRef: MatDialogRef<AgregarEstatusAvaluos>, 
    private snackBar: MatSnackBar,
    private _estatusAvaluosService : EstatusAvaluosService) {
      this.estatusAvaluos = new EstatusAvaluos("","","")
    }

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  crearEstatusAvaluos(){
    this.estatusAvaluos.empresa = "1";
    this._estatusAvaluosService.crearEstatusAvaluo(this.estatusAvaluos).subscribe(
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
  selector: 'ver-estatus-avaluos',
  templateUrl: 'ver-estatus-avaluos.html',
  styleUrls: ['./estatus-avaluos.component.scss'],
  providers : [EstatusAvaluosService]

})
export class VerEstatusAvaluos implements OnInit{

  ngOnInit() {
    this.estatusAvaluos.codigo = codigo;
    this.estatusAvaluos.descripcion = descripcion;
    this.estatusAvaluos.empresa = empresa;    
  }
  
  public estatusAvaluos : EstatusAvaluos ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerEstatusAvaluos>,
    private snackBar: MatSnackBar, 
    private _estatusAvaluosServie : EstatusAvaluosService) {
      this.estatusAvaluos = new EstatusAvaluos("","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
