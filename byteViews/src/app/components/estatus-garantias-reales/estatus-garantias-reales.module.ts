import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstatusGarantiasRealesRoutingModule } from './estatus-garantias-reales-routing.module';
import { EstatusGarantiasRealesComponent, AgregarEstatusGarantiasReales, EditarEstatusGarantiasReales ,EliminarEstatusGarantiasReales, VerStatusGarantiaReal } from './estatus-garantias-reales.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EstatusGarantiasRealesComponent,
    AgregarEstatusGarantiasReales, 
    EditarEstatusGarantiasReales,
    EliminarEstatusGarantiasReales, 
    VerStatusGarantiaReal
  ],
  entryComponents : [
    AgregarEstatusGarantiasReales, 
    EditarEstatusGarantiasReales,
    EliminarEstatusGarantiasReales, 
    VerStatusGarantiaReal
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    EstatusGarantiasRealesRoutingModule
  ]
})
export class EstatusGarantiasRealesModule { }
