import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasificacionRoutingModule } from './clasificacion-routing.module';
import { ClasificacionComponent, AgregarClasificacion, EditarClasificacion,EliminarClasificacion } from './clasificacion.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

@NgModule({
  declarations: [
    ClasificacionComponent,
    AgregarClasificacion, 
    EditarClasificacion,
    EliminarClasificacion
  ],
  entryComponents : [
    AgregarClasificacion, 
    EditarClasificacion,
    EliminarClasificacion
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ClasificacionRoutingModule
  ]
})
export class ClasificacionModule { }
