import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstanciaRoutingModule } from './instancia-routing.module';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';
import { InstanciaComponent,AgregarInstancia,EditarInstancia,EliminarInstancia,VerInstancia } from './instancia.component';

@NgModule({
  declarations: [
    InstanciaComponent,
    AgregarInstancia,
    EditarInstancia,
    EliminarInstancia,
    VerInstancia],
  entryComponents: [ 
    AgregarInstancia,
    EditarInstancia,
    EliminarInstancia,
    VerInstancia
  ],
  imports: [ 
    MaterialModule,
    FormsModule,
    CommonModule,
    InstanciaRoutingModule
  ]
})
export class InstanciaModule { }
