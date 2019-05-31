import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesoresDePrestamoRoutingModule } from './asesores-de-prestamo-routing.module';
import { AsesoresDePrestamoComponent,AgregarAsesoresDePrestamo,EditarAsesoresDePrestamo,EliminarAsesoresDePrestamo } from './asesores-de-prestamo.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AsesoresDePrestamoComponent,
    AgregarAsesoresDePrestamo,
    EditarAsesoresDePrestamo,
    EliminarAsesoresDePrestamo
  ],
  entryComponents : [
    AgregarAsesoresDePrestamo,
    EditarAsesoresDePrestamo,
    EliminarAsesoresDePrestamo
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    AsesoresDePrestamoRoutingModule
  ]
})
export class AsesoresDePrestamoModule { }
