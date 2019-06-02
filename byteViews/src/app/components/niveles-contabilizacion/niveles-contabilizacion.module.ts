import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelesContabilizacionRoutingModule } from './niveles-contabilizacion-routing.module';
import { NivelesContabilizacionComponent, AgregarNivelesContabilizacion, EditarNivelesContabilizacion, EliminarNivelesContabilizacion } from './niveles-contabilizacion.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NivelesContabilizacionComponent,
    AgregarNivelesContabilizacion,
    EditarNivelesContabilizacion,
    EliminarNivelesContabilizacion
  ],
  entryComponents : [
    AgregarNivelesContabilizacion,
    EditarNivelesContabilizacion,
    EliminarNivelesContabilizacion
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    NivelesContabilizacionRoutingModule
  ]
})
export class NivelesContabilizacionModule { }
