import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalDistribucionRoutingModule } from './canal-distribucion-routing.module';
import { CanalDistribucionComponent,AgregarCanalDistribucion,EditarCanalDistribucion,EliminarCanalDistribucion } from './canal-distribucion.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CanalDistribucionComponent,
    AgregarCanalDistribucion,
    EditarCanalDistribucion,
    EliminarCanalDistribucion
  ],
  entryComponents : [
    AgregarCanalDistribucion,
    EditarCanalDistribucion,
    EliminarCanalDistribucion
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    CanalDistribucionRoutingModule
  ]
})
export class CanalDistribucionModule { }
