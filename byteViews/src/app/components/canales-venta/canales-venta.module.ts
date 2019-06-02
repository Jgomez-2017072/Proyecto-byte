import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalesVentaRoutingModule } from './canales-venta-routing.module';
import { CanalesVentaComponent, AgregarCanalesVenta,EditarCanalesVenta,EliminarCanalesVenta } from './canales-venta.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CanalesVentaComponent,
    AgregarCanalesVenta,
    EditarCanalesVenta,
    EliminarCanalesVenta
  ],
  entryComponents : [
    AgregarCanalesVenta,
    EditarCanalesVenta,
    EliminarCanalesVenta
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    CanalesVentaRoutingModule
  ]
})
export class CanalesVentaModule { }
