import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LimpiaArchivosRoutingModule } from './limpia-archivos-routing.module';
import { LimpiaArchivosComponent, LimpiezaSeleccionada, Opciones } from './limpia-archivos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LimpiaArchivosComponent,
    LimpiezaSeleccionada, 
    Opciones
  ],
  entryComponents : [
    LimpiezaSeleccionada, 
    Opciones
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    LimpiaArchivosRoutingModule
  ]
})
export class LimpiaArchivosModule { }
