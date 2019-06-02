import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosDeProductosRoutingModule } from './parametros-de-productos-routing.module';
import { ParametrosDeProductosComponent, AgregarParametrosDeProductos,EditarParametrosDeProductos,EliminarParametrosDeProductos } from './parametros-de-productos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParametrosDeProductosComponent,
    AgregarParametrosDeProductos,
    EditarParametrosDeProductos,
    EliminarParametrosDeProductos
  ],
  entryComponents : [
    AgregarParametrosDeProductos,
    EditarParametrosDeProductos,
    EliminarParametrosDeProductos
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ParametrosDeProductosRoutingModule
  ]
})
export class ParametrosDeProductosModule { }
