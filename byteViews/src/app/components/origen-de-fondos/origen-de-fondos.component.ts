import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { OrigenDeFondos } from 'src/app/models/origenDeFondos.model';
import { OrigenDeFondosService } from 'src/app/services/origenDeFondos.service';


export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
  abreviatura : String;
  usuario : String; 
  diaApertura : String;
  mesApertura : String;
  anioApertura : String;
}

var datosOrigenDeFondos: OrigenDeFondos[];

var codigo = '';
var descripcion = '';
var empresa = '';
var abreviatura = '';
var usuario = '';
var diaApertura = '';
var mesApertura = '';
var anioApertura = '';


@Component({
  selector: 'app-origen-de-fondos',
  templateUrl: './origen-de-fondos.component.html',
  styleUrls: ['./origen-de-fondos.component.scss'],
  providers : [OrigenDeFondosService]
})
export class OrigenDeFondosComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getOrigenDeFondos()
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'editar', 'eliminar', 'ver'];
  
  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  public getOrigenDeFondos(){
    this._origenDeFondosService.getOrigenDeFondos().subscribe(
      response => {
        if(response){
          datosOrigenDeFondos = response;
          console.log(datosOrigenDeFondos)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosOrigenDeFondos);
          this.dataSource.paginator = this.paginator;
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }


  buscar(id, descripcion2, empresa2, abreviatura2, usuario2, diaApertura2, mesApertura2, añoApertura2){
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    abreviatura = abreviatura2;
    usuario = usuario2;
    diaApertura = diaApertura2;
    mesApertura = mesApertura2;
    anioApertura = añoApertura2;
    console.log(codigo + " - " + descripcion + " - " + empresa + " - " + abreviatura + " - " + usuario + " - " + diaApertura + " - " + mesApertura + " - " + anioApertura) 
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _origenDeFondosService : OrigenDeFondosService) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarOrigenDeFondos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getOrigenDeFondos();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarOrigenDeFondos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getOrigenDeFondos();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarOrigenDeFondos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getOrigenDeFondos();
      }, 800);
    });
  }


  openDialog4(): void {
    const dialogRef = this.dialog.open(VerOrigenDeFondos, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'editar-origen-de-fondos',
  templateUrl: 'editar-origen-de-fondos.html',
  styleUrls: ['./origen-de-fondos.component.scss']
})
export class EditarOrigenDeFondos implements OnInit{

  ngOnInit() {
    //this.buscarAseguradora();
    this.origenDeFondos.codigo = codigo;
    this.origenDeFondos.descripcion = descripcion;
    this.origenDeFondos.empresa = empresa;
    this.origenDeFondos.abreviatura = abreviatura;
    this.origenDeFondos.usuario = usuario;
    this.origenDeFondos.diaApertura = diaApertura;
    this.origenDeFondos.mesApertura = mesApertura;
    this.origenDeFondos.anioApertura = anioApertura;
    
  }

  public origenDeFondos : OrigenDeFondos ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarOrigenDeFondos>, private snackBar: MatSnackBar, private _origenDeFondosService : OrigenDeFondosService) {
      this.origenDeFondos = new OrigenDeFondos("","","","","","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Actualizado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarOrigenDeFondos(){
    console.log(this.origenDeFondos)
    this._origenDeFondosService.editarOrigenDeFondos(this.origenDeFondos).subscribe(
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
  selector: 'eliminar-origen-de-fondos',
  templateUrl: 'eliminar-origen-de-fondos.html',
  styleUrls: ['./origen-de-fondos.component.scss']
})
export class EliminarOrigenDeFondos implements OnInit{

  ngOnInit() {
    //this.buscarAseguradora();
    this.origenDeFondos.codigo = codigo;
    this.origenDeFondos.descripcion = descripcion;
    this.origenDeFondos.empresa = empresa;
    this.origenDeFondos.abreviatura = abreviatura;
    this.origenDeFondos.usuario = usuario;
    this.origenDeFondos.diaApertura = diaApertura;
    this.origenDeFondos.mesApertura = mesApertura;
    this.origenDeFondos.anioApertura = anioApertura;
    
  }

  public origenDeFondos : OrigenDeFondos ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<EliminarOrigenDeFondos>, private snackBar: MatSnackBar, private _origenDeFondosService : OrigenDeFondosService) {
      this.origenDeFondos = new OrigenDeFondos("","","","","","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarOrigenDeFondos(){    
    this._origenDeFondosService.eliminarOrigenDeFondos(this.origenDeFondos).subscribe(
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
  selector: 'agregar-origen-de-fondos',
  templateUrl: 'agregar-origen-de-fondos.html',
  styleUrls: ['./origen-de-fondos.component.scss'],
  providers : [OrigenDeFondosService]
})
export class AgregarOrigenDeFondos {

  public origenDeFondos : OrigenDeFondos;
  public status;


  constructor(
    public dialogRef: MatDialogRef<AgregarOrigenDeFondos>, private snackBar: MatSnackBar, private _origenDeFondosService : OrigenDeFondosService) {
      this.origenDeFondos = new OrigenDeFondos("","","","","","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  crearOrigenDeFondos(){
    this.origenDeFondos.empresa ="1";
    this.origenDeFondos.diaApertura = "0";
    this.origenDeFondos.mesApertura = "0";
    this.origenDeFondos.anioApertura = "0";
    this._origenDeFondosService.crearOrigenDeFondos(this.origenDeFondos).subscribe(
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
  selector: 'ver-origen-de-fondos',
  templateUrl: 'ver-origen-de-fondos.html',
  styleUrls: ['./origen-de-fondos.component.scss'],
  providers : [OrigenDeFondosService]

})
export class VerOrigenDeFondos implements OnInit{

  ngOnInit() {
    this.origenDeFondos.codigo = codigo;
    this.origenDeFondos.descripcion = descripcion;
    this.origenDeFondos.empresa = empresa;
    this.origenDeFondos.abreviatura = abreviatura;
    this.origenDeFondos.usuario = usuario;
    this.origenDeFondos.diaApertura = diaApertura;
    this.origenDeFondos.mesApertura = mesApertura;
    this.origenDeFondos.anioApertura = anioApertura;

    //this.buscarAseguradora();
  }
  
  public origenDeFondos : OrigenDeFondos ;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerOrigenDeFondos>,private snackBar: MatSnackBar) {
      this.origenDeFondos = new OrigenDeFondos("","","","","","","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
 

}