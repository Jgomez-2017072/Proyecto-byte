import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoApasosDelCierreRoutingModule } from './mantenimiento-apasos-del-cierre-routing.module';
import { MantenimientoAPasosDelCierreComponent,AgregarMantenimientoAPasosDelCierre,EliminarMantenimientoAPasosDelCierre,EditarMantenimientoAPasosDelCierre } from './mantenimiento-apasos-del-cierre.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MantenimientoAPasosDelCierreComponent,
    AgregarMantenimientoAPasosDelCierre,
    EliminarMantenimientoAPasosDelCierre,
    EditarMantenimientoAPasosDelCierre
  ],
  entryComponents : [
    AgregarMantenimientoAPasosDelCierre,
    EliminarMantenimientoAPasosDelCierre,
    EditarMantenimientoAPasosDelCierre
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    MantenimientoApasosDelCierreRoutingModule
  ]
})
export class MantenimientoApasosDelCierreModule { }
