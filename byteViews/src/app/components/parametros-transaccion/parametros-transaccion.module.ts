import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosTransaccionRoutingModule } from './parametros-transaccion-routing.module';
import { ParametrosTransaccionComponent, AgregarParametrosTransaccion,EditarParametrosTransaccion,EliminarParametrosTransaccion } from './parametros-transaccion.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParametrosTransaccionComponent,
    AgregarParametrosTransaccion,
    EditarParametrosTransaccion,
    EliminarParametrosTransaccion
  ],
  entryComponents : [
    AgregarParametrosTransaccion,
    EditarParametrosTransaccion,
    EliminarParametrosTransaccion
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ParametrosTransaccionRoutingModule
  ]
})
export class ParametrosTransaccionModule { }
