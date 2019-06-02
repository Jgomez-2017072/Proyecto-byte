import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadosPrestamosRoutingModule } from './estados-prestamos-routing.module';
import { EstadosPrestamosComponent,AgregarEstadosPrestamos,EditarEstadosPrestamos,EliminarEstadosPrestamos } from './estados-prestamos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EstadosPrestamosComponent,
    AgregarEstadosPrestamos,
    EditarEstadosPrestamos,
    EliminarEstadosPrestamos
  ],
  entryComponents: [
    AgregarEstadosPrestamos,
    EditarEstadosPrestamos,
    EliminarEstadosPrestamos
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    EstadosPrestamosRoutingModule
  ]
})
export class EstadosPrestamosModule { }
