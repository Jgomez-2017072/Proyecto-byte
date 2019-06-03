import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoAjusteRoutingModule } from './tipo-ajuste-routing.module';
import { TipoAjusteComponent, AgregarTipoAjuste, EliminarTipoAjuste, EditarTipoAjuste, VerTipoAjuste } from './tipo-ajuste.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { EliminarAcercamiento } from '../acercamiento/acercamiento.component';

@NgModule({
  declarations: [
    TipoAjusteComponent,
    AgregarTipoAjuste,
    EliminarTipoAjuste,
    EditarTipoAjuste,
    VerTipoAjuste
  ],
  entryComponents: [
    AgregarTipoAjuste,
    EliminarTipoAjuste,
    EditarTipoAjuste,
    VerTipoAjuste
  ],
  imports: [
    CommonModule,
    TipoAjusteRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class TipoAjusteModule { }
