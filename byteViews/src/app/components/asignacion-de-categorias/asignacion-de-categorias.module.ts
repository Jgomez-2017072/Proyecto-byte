import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignacionDeCategoriasRoutingModule } from './asignacion-de-categorias-routing.module';
import { AsignacionDeCategoriasComponent, AgregarAsignacionDeCategorias, EditarAsignacionDeCategorias, EliminarAsignacionDeCategorias } from './asignacion-de-categorias.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AsignacionDeCategoriasComponent,
    AgregarAsignacionDeCategorias, 
    EditarAsignacionDeCategorias, 
    EliminarAsignacionDeCategorias
  ],
  entryComponents : [
    AgregarAsignacionDeCategorias, 
    EditarAsignacionDeCategorias, 
    EliminarAsignacionDeCategorias
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    AsignacionDeCategoriasRoutingModule
  ]
})
export class AsignacionDeCategoriasModule { }
