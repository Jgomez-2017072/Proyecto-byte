import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercamientoRoutingModule } from './acercamiento-routing.module';
import { AcercamientoComponent,AgregarAcercamiento,EditarAcercamiento,EliminarAcercamiento } from './acercamiento.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AcercamientoComponent,
    AgregarAcercamiento,
    EditarAcercamiento,
    EliminarAcercamiento
  ],
  entryComponents : [
    AgregarAcercamiento,
    EditarAcercamiento,
    EliminarAcercamiento
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    AcercamientoRoutingModule
  ]
})
export class AcercamientoModule { }
