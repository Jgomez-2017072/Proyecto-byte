import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { EstadoResolucionComponent, AgregarEstadoResolucion, EliminarEstadoResolucion, EditarEstadoResolucion, VerEstadoResolucion } from './estado-resolucion.component';
import { EstadoResolucionRoutingModule } from './estado-resolucion-routing.module';

@NgModule({
  declarations: [
    EstadoResolucionComponent,
    AgregarEstadoResolucion,
    EliminarEstadoResolucion,
    EditarEstadoResolucion,
    VerEstadoResolucion
  ],
  entryComponents: [
    AgregarEstadoResolucion,
    EliminarEstadoResolucion,
    EditarEstadoResolucion,
    VerEstadoResolucion
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    EstadoResolucionRoutingModule

  ]
})
export class EstadoResolucionModule { }
