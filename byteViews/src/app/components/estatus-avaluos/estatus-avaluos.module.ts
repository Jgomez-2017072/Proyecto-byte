import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstatusAvaluosRoutingModule } from './estatus-avaluos-routing.module';
import { EstatusAvaluosComponent, AgregarEstatusAvaluos, EditarEstatusAvaluos, EliminarEstatusAvaluos, VerEstatusAvaluos } from './estatus-avaluos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EstatusAvaluosComponent,
    AgregarEstatusAvaluos, 
    EditarEstatusAvaluos, 
    EliminarEstatusAvaluos, 
    VerEstatusAvaluos
  ],
  entryComponents : [
    AgregarEstatusAvaluos, 
    EditarEstatusAvaluos, 
    EliminarEstatusAvaluos, 
    VerEstatusAvaluos
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    EstatusAvaluosRoutingModule
  ]
})
export class EstatusAvaluosModule { }
