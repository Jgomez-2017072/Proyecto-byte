import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonedaMotivoReversionPagoRoutingModule } from './moneda-motivo-reversion-pago-routing.module';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';
import { MonedaMotivoReversionPagoComponent,AgregarMonedaMotivoReversionPago,EditarMonedaMotivoReversionPago,EliminarMonedaMotivoReversionPago,VerMonedaMotivoReversionPago } from './moneda-motivo-reversion-pago.component';

@NgModule({
  declarations: [
    MonedaMotivoReversionPagoComponent,
    AgregarMonedaMotivoReversionPago,
    EditarMonedaMotivoReversionPago,
    EliminarMonedaMotivoReversionPago,
    VerMonedaMotivoReversionPago],
  entryComponents: [ 
    AgregarMonedaMotivoReversionPago,
    EditarMonedaMotivoReversionPago,
    EliminarMonedaMotivoReversionPago,
    VerMonedaMotivoReversionPago
  ],
  imports: [ 
    MaterialModule,
    FormsModule,
    CommonModule,
    MonedaMotivoReversionPagoRoutingModule
  ]
})
export class MonedaMotivoReversionPagoModule { }
 