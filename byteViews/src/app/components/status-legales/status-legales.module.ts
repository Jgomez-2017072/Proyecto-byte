import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusLegalesRoutingModule } from './status-legales-routing.module';
import { StatusLegalesComponent, AgregarStatusLegales, EliminarStatusLegales, EditarStatusLegales } from './status-legales.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StatusLegalesComponent,
    AgregarStatusLegales, 
    EliminarStatusLegales, 
    EditarStatusLegales
  ],
  entryComponents : [
    AgregarStatusLegales, 
    EliminarStatusLegales, 
    EditarStatusLegales
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    StatusLegalesRoutingModule
  ]
})
export class StatusLegalesModule { }
