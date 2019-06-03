import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionesRoutingModule } from './instituciones-routing.module';
import { InstitucionesComponent, AgregarInstituciones,  EditarInstituciones, EliminarInstitucion, VerInstituciones  } from './instituciones.component';
import { EliminarIngenieroValuador } from '../ingenieros-valuadores/ingenieros-valuadores.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

@NgModule({
  declarations: [
    InstitucionesComponent,
    AgregarInstituciones,
    EditarInstituciones,
    EliminarInstitucion,
    VerInstituciones
  ], 
  entryComponents: [
    AgregarInstituciones, 
    EditarInstituciones,
    EliminarInstitucion,
    VerInstituciones
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    InstitucionesRoutingModule
  ]
})
export class InstitucionesModule { }
