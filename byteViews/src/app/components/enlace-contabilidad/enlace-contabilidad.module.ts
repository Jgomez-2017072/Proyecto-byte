import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnlaceContabilidadRoutingModule } from './enlace-contabilidad-routing.module';
import { EnlaceContabilidadComponent, AgregarEnlaceContabilidad, EditarEnlaceContabilidad, EliminarEnlaceContabilidad } from './enlace-contabilidad.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EnlaceContabilidadComponent,
    AgregarEnlaceContabilidad,
    EditarEnlaceContabilidad,
    EliminarEnlaceContabilidad
  ],
  entryComponents : [
    AgregarEnlaceContabilidad,
    EditarEnlaceContabilidad,
    EliminarEnlaceContabilidad
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    EnlaceContabilidadRoutingModule
  ]
})
export class EnlaceContabilidadModule { }
