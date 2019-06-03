import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecargosAdicionalesRoutingModule } from './recargos-adicionales-routing.module';
import { RecargosAdicionalesComponent, AgregarRecargos, EditarRecargos, EliminarRecargos, VerRecargoAdicional } from './recargos-adicionales.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ //componente y modals
    RecargosAdicionalesComponent,
    AgregarRecargos,
    EditarRecargos,
    EliminarRecargos,
    VerRecargoAdicional
  ],
  entryComponents:[ //modals
    AgregarRecargos,
    EditarRecargos,
    EliminarRecargos,
    VerRecargoAdicional
  ],
  imports: [
    CommonModule,
    RecargosAdicionalesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class RecargosAdicionalesModule { }
