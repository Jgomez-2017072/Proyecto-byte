import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivosAjustesRoutingModule } from './motivos-ajustes-routing.module';
import { MotivosAjustesComponent, AgregarMotivoAjuste, EditarMotivoAjuste, EliminarMotivoAjuste, VerMotivoAjuste } from './motivos-ajustes.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MotivosAjustesComponent,
    AgregarMotivoAjuste, 
    EditarMotivoAjuste, 
    EliminarMotivoAjuste, 
    VerMotivoAjuste
  ],
  entryComponents : [
    AgregarMotivoAjuste, 
    EditarMotivoAjuste, 
    EliminarMotivoAjuste, 
    VerMotivoAjuste
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    MotivosAjustesRoutingModule
  ]
})
export class MotivosAjustesModule { }
