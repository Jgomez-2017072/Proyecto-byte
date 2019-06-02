import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecargosAdicionalesRoutingModule } from './recargos-adicionales-routing.module';
import { RecargosAdicionalesComponent, AgregarRecargos, EditarRecargos, EliminarRecargos} from './recargos-adicionales.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecargosAdicionalesComponent,
    AgregarRecargos, 
    EditarRecargos, 
    EliminarRecargos
  ],
  entryComponents : [
    AgregarRecargos, 
    EditarRecargos, 
    EliminarRecargos
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    RecargosAdicionalesRoutingModule
  ]
})
export class RecargosAdicionalesModule { }
