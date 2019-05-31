import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent,AgregarConsultas,EditarConsultas,EliminarConsultas } from './consultas.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConsultasComponent,
    AgregarConsultas,
    EditarConsultas,
    EliminarConsultas
  ],
  entryComponents : [
    AgregarConsultas,
    EditarConsultas,
    EliminarConsultas
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ConsultasRoutingModule
  ]
})
export class ConsultasModule { }
