import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivoCambioEjecutivoRoutingModule } from './motivo-cambio-ejecutivo-routing.module';
import { MotivoCambioEjecutivoComponent, AgregarMotivoCambioEjecutivo, EliminarMotivoCambioEjecutivo, EditarMotivoCambioEjecutivo, VerMotivoCambioEjecutivo } from './motivo-cambio-ejecutivo.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

@NgModule({
  declarations: [
    MotivoCambioEjecutivoComponent,
    AgregarMotivoCambioEjecutivo,
    EliminarMotivoCambioEjecutivo,
    EditarMotivoCambioEjecutivo,
    VerMotivoCambioEjecutivo
  ],
  entryComponents: [
    AgregarMotivoCambioEjecutivo,
    EliminarMotivoCambioEjecutivo,
    EditarMotivoCambioEjecutivo,
    VerMotivoCambioEjecutivo
  ],
  imports: [
    CommonModule,
    MotivoCambioEjecutivoRoutingModule,
    FormsModule,
    CommonModule,
    MaterialModule
  ]
})
export class MotivoCambioEjecutivoModule { }
