import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorredorSeguroRoutingModule } from './corredor-seguro-routing.module';
import { CorredorSeguroComponent, AgregarCorredorSeguro, EditarCorredorSeguro, EliminarCorredorSeguro, VerCorredorSeguro } from './corredor-seguro.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CorredorSeguroComponent,
    AgregarCorredorSeguro,
    EditarCorredorSeguro,
    EliminarCorredorSeguro,
    VerCorredorSeguro
  ],
  entryComponents: [
    AgregarCorredorSeguro,
    EditarCorredorSeguro,
    EliminarCorredorSeguro,
    VerCorredorSeguro
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    CorredorSeguroRoutingModule
  ]
})
export class CorredorSeguroModule { }
