import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposDeTransaccionRoutingModule } from './tipos-de-transaccion-routing.module';
import { TiposDeTransaccionComponent, AgregarTiposTransacciones, EditarTiposTransacciones,EliminarTiposTransacciones } from './tipos-de-transaccion.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TiposDeTransaccionComponent,
    AgregarTiposTransacciones, 
    EditarTiposTransacciones,
    EliminarTiposTransacciones
  ],
  entryComponents : [
    AgregarTiposTransacciones, 
    EditarTiposTransacciones,
    EliminarTiposTransacciones
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    TiposDeTransaccionRoutingModule
  ]
})
export class TiposDeTransaccionModule { }
