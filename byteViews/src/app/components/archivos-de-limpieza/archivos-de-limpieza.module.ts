import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivosDeLimpiezaRoutingModule } from './archivos-de-limpieza-routing.module';
import { ArchivosDeLimpiezaComponent, AgregarArchivosDeLimpieza,EliminarArchivosDeLimpieza,EditarArchivosDeLimpieza } from './archivos-de-limpieza.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArchivosDeLimpiezaComponent,
    AgregarArchivosDeLimpieza,
    EliminarArchivosDeLimpieza,
    EditarArchivosDeLimpieza
  ],
  entryComponents :[
    AgregarArchivosDeLimpieza,
    EliminarArchivosDeLimpieza,
    EditarArchivosDeLimpieza
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ArchivosDeLimpiezaRoutingModule
  ]
})
export class ArchivosDeLimpiezaModule { }
