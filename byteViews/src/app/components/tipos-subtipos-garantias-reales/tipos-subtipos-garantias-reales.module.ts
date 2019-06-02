import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposSubtiposGarantiasRealesRoutingModule } from './tipos-subtipos-garantias-reales-routing.module';
import { TiposSubtiposGarantiasRealesComponent, AgregarTiposSubtiposGR,EditarTiposSubtiposGR,EliminarTiposSubtiposGR} from './tipos-subtipos-garantias-reales.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TiposSubtiposGarantiasRealesComponent,
    AgregarTiposSubtiposGR,
    EditarTiposSubtiposGR,
    EliminarTiposSubtiposGR
  ],
  entryComponents : [
    AgregarTiposSubtiposGR,
    EditarTiposSubtiposGR,
    EliminarTiposSubtiposGR
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    TiposSubtiposGarantiasRealesRoutingModule
  ]
})
export class TiposSubtiposGarantiasRealesModule { }
