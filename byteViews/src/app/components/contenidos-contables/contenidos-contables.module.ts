import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidosContablesRoutingModule } from './contenidos-contables-routing.module';
import { ContenidosContablesComponent, AgregarContenidosContables, EditarContenidosContables, EliminarContenidosContables } from './contenidos-contables.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContenidosContablesComponent,
    AgregarContenidosContables,
    EditarContenidosContables,
    EliminarContenidosContables
  ],
  entryComponents : [
    AgregarContenidosContables,
    EditarContenidosContables,
    EliminarContenidosContables
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ContenidosContablesRoutingModule
  ]
})
export class ContenidosContablesModule { }
