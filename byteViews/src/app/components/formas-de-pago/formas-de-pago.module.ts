import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormasDePagoRoutingModule } from './formas-de-pago-routing.module';
import { FormasDePagoComponent, AgregarFormasDePago, EditarFormasDePago, EliminarFormasDePago, VerFormaDePago } from './formas-de-pago.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormasDePagoComponent,
    AgregarFormasDePago, 
    EditarFormasDePago, 
    EliminarFormasDePago, 
    VerFormaDePago
  ],
  entryComponents : [
    AgregarFormasDePago, 
    EditarFormasDePago, 
    EliminarFormasDePago, 
    VerFormaDePago
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    FormasDePagoRoutingModule
  ]
})
export class FormasDePagoModule { }
