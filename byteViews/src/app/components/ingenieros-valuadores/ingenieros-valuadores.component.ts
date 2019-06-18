import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { IngenieroValuadorService } from 'src/app/services/ingeniero-valuador.service';
import { IngenieroValuador } from 'src/app/models/ingeniero-valuador.model'; 


export interface PeriodicElement {
  codigo: String;
  descripcion: String;  
  empresa: String;
  numeroRegistro : String;
}

var datosIngenieroValuador: IngenieroValuador[];


var codigo = '';
var descripcion = '';
var empresa = '';
var numeroRegistro = '';



@Component({
  selector: 'app-ingenieros-valuadores',
  templateUrl: './ingenieros-valuadores.component.html',
  styleUrls: ['./ingenieros-valuadores.component.scss'],
  providers : [IngenieroValuadorService]
})
export class IngenierosValuadoresComponent implements OnInit {

  public dataSource;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getIngenierosValuadores()
 }


  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar','ver'];

  //SELECTOR

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog,
    private _ingenierosValuadoresService: IngenieroValuadorService) {}

    //CRUD --------------------- TRAER DATOS --------------------------
  



  public getIngenierosValuadores(){
    this._ingenierosValuadoresService.getIngenirosValuadores().subscribe(
      response => {
        if(response){
          datosIngenieroValuador = response;
          console.log(datosIngenieroValuador)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosIngenieroValuador);
          this.dataSource.paginator = this.paginator;

        } 
      },
      error=>{
        console.log(<any>error);
      }

    )
  }

  buscar(id, descripcion2, empresa2, numeroRegistro2){
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    numeroRegistro = numeroRegistro2;
    console.log(codigo + " - " + descripcion + " - " + empresa + " - " + numeroRegistro)
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarIngenieroValuador, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');     
      
      this.getIngenierosValuadores();      
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarIngenieroValuador, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getIngenierosValuadores();      
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarIngenieroValuador, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getIngenierosValuadores();      
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerIngenieroValuador, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-almacenadora',
  templateUrl: 'editar-ingenieros-valuadores.html',
  styleUrls: ['./ingenieros-valuadores.component.scss']
})
export class EditarIngenieroValuador {

  ngOnInit() {
    //this.buscarAseguradora();
    this.ingenieroValuador.codigo = codigo;
    this.ingenieroValuador.descripcion = descripcion;
    this.ingenieroValuador.empresa = empresa;
    this.ingenieroValuador.numeroRegistro = numeroRegistro;
  }

  public ingenieroValuador : IngenieroValuador ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarIngenieroValuador>, 
    private snackBar: MatSnackBar,
    private _ingenierosValuadoresService: IngenieroValuadorService) {
      this.ingenieroValuador = new IngenieroValuador("","","","","",true,"");
    }

   
  onNoClick(): void {
    this.dialogRef.close();
  }

  editarIngenieroValuador(){
    console.log(this.ingenieroValuador)
    this._ingenierosValuadoresService.editarIngenieroValuador(this.ingenieroValuador).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          if(response.description === 'Editado Correctamente'){
              this.dialogRef.close();
           // openSnackBar() {
            //  super.getAlmacenadoras();
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
  selector: 'eliminar-almacenadora',
  templateUrl: 'eliminar-ingenieros-valuadores.html',
  styleUrls: ['./ingenieros-valuadores.component.scss']
})
export class EliminarIngenieroValuador {

  ngOnInit() {
    //this.buscarAseguradora();
    this.ingenieroValuador.codigo = codigo;
    this.ingenieroValuador.descripcion = descripcion;
    this.ingenieroValuador.empresa = empresa;
    this.ingenieroValuador.numeroRegistro = numeroRegistro;
  }
  
  public ingenieroValuador : IngenieroValuador ;
  public status;
  
  constructor(
    public dialogRef: MatDialogRef<EliminarIngenieroValuador>, 
    private snackBar: MatSnackBar,
    private _ingenierosValuadoresService: IngenieroValuadorService) {
      this.ingenieroValuador = new IngenieroValuador("","","","","",true,"");
    }

    
  onNoClick(): void {
    this.dialogRef.close();
  }
  eliminarIngenieroValuador(){    
    this._ingenierosValuadoresService.eliminarIngenieroValuador(this.ingenieroValuador).subscribe(
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
  selector: 'agregar-ingenieros-valuadores',
  templateUrl: 'agregar-ingenieros-valuadores.html',
  styleUrls: ['./ingenieros-valuadores.component.scss'],
  providers : [IngenieroValuadorService]
})
export class AgregarIngenieroValuador {

  public ingenieroValuador : IngenieroValuador ;
  public status;
  
  constructor(
    public dialogRef: MatDialogRef<AgregarIngenieroValuador>, 
    private snackBar: MatSnackBar,
    private _ingenierosValuadoresService: IngenieroValuadorService) {
      this.ingenieroValuador = new IngenieroValuador("","","","","",true,"");
    }

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  crearIngenieroValuador(){
    this.ingenieroValuador.empresa = "1";
    this._ingenierosValuadoresService.crearIngenieroValuador(this.ingenieroValuador).subscribe(
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
  selector: 'ver-ingeniero-valuador',
  templateUrl: 'ver-ingeniero-valuador.html',
  styleUrls: ['./ingenieros-valuadores.component.scss'],
  providers : [IngenieroValuadorService]

})
export class VerIngenieroValuador implements OnInit{

  ngOnInit() {
    this.ingenieroValuador.codigo = codigo;
    this.ingenieroValuador.descripcion = descripcion;
    this.ingenieroValuador.empresa = empresa;
    this.ingenieroValuador.numeroRegistro = numeroRegistro;
    //this.buscarAseguradora();
  }
  
  public ingenieroValuador : IngenieroValuador ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerIngenieroValuador>,
    private snackBar: MatSnackBar, 
    private _ingenierosValuadoresService : IngenieroValuadorService) {
      this.ingenieroValuador = new IngenieroValuador("","","","","",true,"");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}