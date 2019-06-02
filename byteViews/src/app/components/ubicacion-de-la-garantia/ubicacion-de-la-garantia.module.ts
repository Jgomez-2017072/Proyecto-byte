import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbicacionDeLaGarantiaRoutingModule } from './ubicacion-de-la-garantia-routing.module';
import { UbicacionDeLaGarantiaComponent, AgregarUbicacion, EditarUbicacion ,EliminarUbicacion } from './ubicacion-de-la-garantia.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UbicacionDeLaGarantiaComponent,
    AgregarUbicacion, 
    EditarUbicacion,
    EliminarUbicacion
  ],
  entryComponents : [
    AgregarUbicacion, 
    EditarUbicacion,
    EliminarUbicacion
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    UbicacionDeLaGarantiaRoutingModule
  ]
})
export class UbicacionDeLaGarantiaModule { }
