import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoContabilizacionRoutingModule } from './mantenimiento-contabilizacion-routing.module';
import { MantenimientoContabilizacionComponent } from './mantenimiento-contabilizacion.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MantenimientoContabilizacionComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    MantenimientoContabilizacionRoutingModule
  ]
})
export class MantenimientoContabilizacionModule { }
