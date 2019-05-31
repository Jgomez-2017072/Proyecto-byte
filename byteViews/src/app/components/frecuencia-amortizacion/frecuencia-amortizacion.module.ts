import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrecuenciaAmortizacionRoutingModule } from './frecuencia-amortizacion-routing.module';
import { FrecuenciasAmortizacionComponent,AgregarFrecuenciaAmortizacion,EditarFrecuenciaAmortizacion,EliminarFrecuenciaAmortizacion } from './frecuencias-amortizacion.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FrecuenciasAmortizacionComponent,
    AgregarFrecuenciaAmortizacion,
    EditarFrecuenciaAmortizacion,
    EliminarFrecuenciaAmortizacion
  ],
  entryComponents : [
    AgregarFrecuenciaAmortizacion,
    EditarFrecuenciaAmortizacion,
    EliminarFrecuenciaAmortizacion
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    FrecuenciaAmortizacionRoutingModule
  ]
})
export class FrecuenciaAmortizacionModule { }
