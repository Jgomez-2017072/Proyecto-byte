import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoActivoCrediticioRoutingModule } from './tipo-activo-crediticio-routing.module';
import { TipoActivoCrediticioComponent, AgregarTipoActivoCrediticio ,EditarTipoActivoCrediticio,EliminarTipoActivoCrediticio, VerTipoActivoCrediticio} from './tipo-activo-crediticio.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TipoActivoCrediticioComponent,
    AgregarTipoActivoCrediticio,
    EditarTipoActivoCrediticio,
    EliminarTipoActivoCrediticio,
    VerTipoActivoCrediticio
    
  ],
  entryComponents : [
    AgregarTipoActivoCrediticio,
    EditarTipoActivoCrediticio,
    EliminarTipoActivoCrediticio,
    VerTipoActivoCrediticio
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    TipoActivoCrediticioRoutingModule
  ]
})
export class TipoActivoCrediticioModule { }
