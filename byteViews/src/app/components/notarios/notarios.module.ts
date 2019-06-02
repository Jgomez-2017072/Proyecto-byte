import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotariosRoutingModule } from './notarios-routing.module';
import { NotariosComponent, AgregarNotarios, EditarNotarios, EliminarNotarios, VerNotario } from './notarios.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotariosComponent,
    AgregarNotarios, 
    EditarNotarios, 
    EliminarNotarios, 
    VerNotario
  ],
  entryComponents : [
    AgregarNotarios, 
    EditarNotarios, 
    EliminarNotarios, 
    VerNotario
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    NotariosRoutingModule
  ]
})
export class NotariosModule { }
