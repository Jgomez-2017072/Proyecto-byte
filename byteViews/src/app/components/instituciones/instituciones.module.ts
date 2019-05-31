import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionesRoutingModule } from './instituciones-routing.module';
import { InstitucionesComponent, AgregarInstituciones, EditarInstituciones, EliminarInstituciones,AgregarMaestros } from './instituciones.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InstitucionesComponent,
    AgregarInstituciones, 
    EditarInstituciones, 
    EliminarInstituciones,
    AgregarMaestros
  ],
  entryComponents : [
    AgregarInstituciones, 
    EditarInstituciones, 
    EliminarInstituciones,
    AgregarMaestros
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    InstitucionesRoutingModule
  ]
})
export class InstitucionesModule { }
