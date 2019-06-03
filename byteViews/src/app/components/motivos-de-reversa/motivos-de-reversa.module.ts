import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivosDeReversaRoutingModule } from './motivos-de-reversa-routing.module';
import { MotivosDeReversaComponent, AgregarMotivoDeReversa, EditarMotivoDeReversa, EliminarMotivosDeReversa, VerMotivoDeReversa } from './motivos-de-reversa.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MotivosDeReversaComponent,
    AgregarMotivoDeReversa,
    EditarMotivoDeReversa,
    EliminarMotivosDeReversa,
    VerMotivoDeReversa 
  ], 
  entryComponents: [
    AgregarMotivoDeReversa,
    EditarMotivoDeReversa,
    EliminarMotivosDeReversa,
    VerMotivoDeReversa
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    MotivosDeReversaRoutingModule
  ]
})
export class MotivosDeReversaModule { }
