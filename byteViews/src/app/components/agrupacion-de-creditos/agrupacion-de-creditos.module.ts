import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgrupacionDeCreditosRoutingModule } from './agrupacion-de-creditos-routing.module';
import { AgrupacionDeCreditosComponent, AgregarCredito, EditarCredito, EliminarCredito } from './agrupacion-de-creditos.component';
import { MaterialModule } from 'src/app/material';

@NgModule({
  declarations: [
    AgrupacionDeCreditosComponent,
    AgregarCredito, 
    EditarCredito, 
    EliminarCredito
  ],
  entryComponents  : [
    AgregarCredito, 
    EditarCredito, 
    EliminarCredito
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    AgrupacionDeCreditosRoutingModule
  ]
})
export class AgrupacionDeCreditosModule { }
