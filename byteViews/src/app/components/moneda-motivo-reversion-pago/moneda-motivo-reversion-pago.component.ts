import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MonedaMotivoRerversionPago } from 'src/app/models/moneda-motivo-reversion-pago.model';
import { MonedaMotivoReversionPagoService } from 'src/app/services/moneda-motivo-reversion-pago.service';

export interface PeriodicElement {
  codigoMoneda: String;
  codigoMotivo: String;  
  empresa: String;
  valorCobro: String
}


var datosMoneda: MonedaMotivoRerversionPago[];


var codigoMoneda = '';
var codigoMotivo = '';
var empresa = '';
var valorCobro = '';

@Component({
  selector: 'app-moneda-motivo-reversion-pago',
  templateUrl: './moneda-motivo-reversion-pago.component.html',
  styleUrls: ['./moneda-motivo-reversion-pago.component.scss']
})
export class MonedaMotivoReversionPagoComponent implements OnInit {

  public dataSource;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getMonedasMotivosRerversionPagos();
  }

  displayedColumns: string[] = ['codigoModena', 'codigoMotivo','valorCobro', 'editar', 'eliminar', 'ver'];

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog,private _monedasMotivoService : MonedaMotivoReversionPagoService) {}


  //Crud -------------- Trae datos -----------------------

  
  public getMonedasMotivosRerversionPagos(){
    this._monedasMotivoService.getMonedasMotivosRerversionPagos().subscribe(
      response => {
        if(response){
          datosMoneda = response;
          console.log(datosMoneda)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosMoneda);
          this.dataSource.paginator = this.paginator;

        } 
      },
      error=>{
        console.log(<any>error);
      }

    )
  }

  buscar(codigoMoneda2, codigoMotivo2, empresa2, valorCobro2){
    codigoMoneda = codigoMoneda2;
    codigoMotivo = codigoMotivo2;
    empresa = empresa2;
    valorCobro = valorCobro2;
    console.log(codigoMoneda + " - " + codigoMotivo + " - " + empresa+ " - " + valorCobro)
  }


  //----------------------------------------------------------


  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarMonedaMotivoReversionPago, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getMonedasMotivosRerversionPagos();
      }, 800);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarMonedaMotivoReversionPago, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getMonedasMotivosRerversionPagos();
      }, 800);
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarMonedaMotivoReversionPago, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getMonedasMotivosRerversionPagos();
      }, 800);
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerMonedaMotivoReversionPago, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getMonedasMotivosRerversionPagos();
      }, 800);
    });
  }
}

@Component({
  selector: 'editar-moneda-motivo-reversion-pago',
  templateUrl: 'editar-moneda-motivo-reversion-pago.html',
  styleUrls: ['./moneda-motivo-reversion-pago.component.scss']
})
export class EditarMonedaMotivoReversionPago implements OnInit{

  ngOnInit() {
    this.monedaMotivo.codigoMoneda = codigoMoneda;
    this.monedaMotivo.codigoMotivo = codigoMotivo;
    this.monedaMotivo.empresa = empresa;
    this.monedaMotivo.valorCobro = valorCobro;
  }

  public monedaMotivo : MonedaMotivoRerversionPago ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarMonedaMotivoReversionPago>, private snackBar: MatSnackBar,private _monedasMotivoService : MonedaMotivoReversionPagoService) {
      this.monedaMotivo = new MonedaMotivoRerversionPago("","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Actualizado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarMonedaMotivoReversionPago(){
    console.log(this.monedaMotivo)
    this._monedasMotivoService.editarMonedaMotivoRerversionPago(this.monedaMotivo).subscribe(
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
  selector: 'eliminar-moneda-motivo-reversion-pago',
  templateUrl: 'eliminar-moneda-motivo-reversion-pago.html',
  styleUrls: ['./moneda-motivo-reversion-pago.component.scss']
})
export class EliminarMonedaMotivoReversionPago implements OnInit{

  ngOnInit() {
    this.monedaMotivo.codigoMoneda = codigoMoneda;
    this.monedaMotivo.codigoMotivo = codigoMotivo;
    this.monedaMotivo.empresa = empresa;
    this.monedaMotivo.valorCobro = valorCobro;
  }

  public monedaMotivo : MonedaMotivoRerversionPago ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarMonedaMotivoReversionPago>, private snackBar: MatSnackBar,private _monedasMotivoService : MonedaMotivoReversionPagoService) {
      this.monedaMotivo = new MonedaMotivoRerversionPago("","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarMonedaMotivoRerversionPago(){    
    this._monedasMotivoService.eliminarMonedaMotivoRerversionPago(this.monedaMotivo).subscribe(
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
  selector: 'agregar-moneda-motivo-reversion-pago',
  templateUrl: 'agregar-moneda-motivo-reversion-pago.html',
  styleUrls: ['./moneda-motivo-reversion-pago.component.scss']
})
export class AgregarMonedaMotivoReversionPago {
  
  public monedaMotivo : MonedaMotivoRerversionPago ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarMonedaMotivoReversionPago>, private snackBar: MatSnackBar, private _monedasMotivoService : MonedaMotivoReversionPagoService) {
      this.monedaMotivo = new MonedaMotivoRerversionPago("","","","");
    }

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearMonedaMotivoRerversionPago(){
    this.monedaMotivo.empresa = "1";
    this._monedasMotivoService.crearMonedaMotivoRerversionPago(this.monedaMotivo).subscribe(
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
  selector: 'ver-moneda-motivo-reversion-pago',
  templateUrl: 'ver-moneda-motivo-reversion-pago.html',
  styleUrls: ['./moneda-motivo-reversion-pago.component.scss']
})

export class VerMonedaMotivoReversionPago implements OnInit{

  ngOnInit() {
    this.monedaMotivo.codigoMoneda = codigoMoneda;
    this.monedaMotivo.codigoMotivo = codigoMotivo;
    this.monedaMotivo.empresa = empresa;
    this.monedaMotivo.valorCobro = valorCobro;
  }

  public monedaMotivo : MonedaMotivoRerversionPago ;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarMonedaMotivoReversionPago>, private snackBar: MatSnackBar,private _monedasMotivoService : MonedaMotivoReversionPagoService) {
      this.monedaMotivo = new MonedaMotivoRerversionPago("","","","");
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  

}