import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiasInhabilesRoutingModule } from './dias-inhabiles-routing.module';
import { DiasInhabilesComponent, AgregarDiaInhabil, EditarDiaInhabil, EliminarDiaInhabil, VerDiaInhabil } from './dias-inhabiles.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DiasInhabilesComponent,
    AgregarDiaInhabil, 
    EditarDiaInhabil, 
    EliminarDiaInhabil, 
    VerDiaInhabil
  ],
  entryComponents : [
    AgregarDiaInhabil, 
    EditarDiaInhabil, 
    EliminarDiaInhabil, 
    VerDiaInhabil
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    DiasInhabilesRoutingModule
  ]
})
export class DiasInhabilesModule { }
