import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngenierosValuadoresRoutingModule } from './ingenieros-valuadores-routing.module';
import { IngenierosValuadoresComponent, AgregarIngenieroValuador, EditarIngenieroValuador, EliminarIngenieroValuador, VerIngenieroValuador } from './ingenieros-valuadores.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IngenierosValuadoresComponent,
    AgregarIngenieroValuador, 
    EditarIngenieroValuador, 
    EliminarIngenieroValuador, 
    VerIngenieroValuador
  ],
  entryComponents : [
    AgregarIngenieroValuador, 
    EditarIngenieroValuador, 
    EliminarIngenieroValuador, 
    VerIngenieroValuador
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    IngenierosValuadoresRoutingModule
  ]
})
export class IngenierosValuadoresModule { }
