import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenadorasRoutingModule } from './almacenadoras-routing.module';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';
import { AlmacenadorasComponent,AgregarAlmacenadora,EditarAlmacenadora,EliminarAlmacenadora,VerAlmacenadora } from './almacenadoras.component';

@NgModule({
  declarations: [
    AlmacenadorasComponent,
    EditarAlmacenadora,
    EliminarAlmacenadora,
    VerAlmacenadora,
    AgregarAlmacenadora,],
  entryComponents: [ 
    EditarAlmacenadora,
    EliminarAlmacenadora,
    AgregarAlmacenadora,
    VerAlmacenadora
  ],
  imports: [ 
    MaterialModule,
    FormsModule,
    CommonModule,
    AlmacenadorasRoutingModule
  ]
})
export class AlmacenadorasModule { }
