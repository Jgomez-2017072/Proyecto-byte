import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarantiasContablesRoutingModule } from './garantias-contables-routing.module';
import { GarantiasContablesComponent, AgregarGarantiasContables, EditarGarantiasContables, EliminarGarantiasContables } from './garantias-contables.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GarantiasContablesComponent,
    AgregarGarantiasContables, 
    EditarGarantiasContables, 
    EliminarGarantiasContables
  ],
  entryComponents : [
    AgregarGarantiasContables, 
    EditarGarantiasContables, 
    EliminarGarantiasContables
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    GarantiasContablesRoutingModule
  ]
})
export class GarantiasContablesModule { }
