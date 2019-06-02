import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { DestinosComponent, AgregarDestino, EditarDestino, EliminarDestino, VerDestino } from './destinos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DestinosComponent,
    AgregarDestino, 
    EditarDestino, 
    EliminarDestino, 
    VerDestino
  ],
  entryComponents : [
    AgregarDestino, 
    EditarDestino, 
    EliminarDestino, 
    VerDestino
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    DestinosRoutingModule
  ]
})
export class DestinosModule { }
