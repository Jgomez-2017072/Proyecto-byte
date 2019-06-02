import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivosDeReversaRoutingModule } from './motivos-de-reversa-routing.module';
import { MotivosDeReversaComponent,AgregarMotivosDeReversa,EditarMotivosDeReversa,EliminarMotivosDeReversa } from './motivos-de-reversa.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MotivosDeReversaComponent,
    AgregarMotivosDeReversa,
    EditarMotivosDeReversa,
    EliminarMotivosDeReversa
  ],
  entryComponents : [
    AgregarMotivosDeReversa,
    EditarMotivosDeReversa,
    EliminarMotivosDeReversa
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    MotivosDeReversaRoutingModule
  ]
})
export class MotivosDeReversaModule { }
