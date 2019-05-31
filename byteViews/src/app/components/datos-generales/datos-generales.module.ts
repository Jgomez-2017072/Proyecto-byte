import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosGeneralesRoutingModule } from './datos-generales-routing.module';
import { DatosGeneralesComponent,FechaValor,FechasDelSistema,Provision,GenerarNumeroAutomatico } from './datos-generales.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

@NgModule({
  declarations: [
    DatosGeneralesComponent,
    FechaValor,
    FechasDelSistema,
    Provision,
    GenerarNumeroAutomatico
  ],
  entryComponents : [
    FechaValor,
    FechasDelSistema,
    Provision,
    GenerarNumeroAutomatico
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    DatosGeneralesRoutingModule
  ]
})
export class DatosGeneralesModule { }
