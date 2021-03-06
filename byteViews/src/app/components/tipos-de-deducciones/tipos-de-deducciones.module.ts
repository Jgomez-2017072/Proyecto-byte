import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposDeDeduccionesRoutingModule } from './tipos-de-deducciones-routing.module';
import { TiposDeDeduccionesComponent,AgregarTipoDeDeduccion,EditarTipoDeDeduccion,EliminarTipoDeDeduccion, VerTipoDeDeduccion} from './tipos-de-deducciones.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TiposDeDeduccionesComponent,
    AgregarTipoDeDeduccion,
    EditarTipoDeDeduccion,
    EliminarTipoDeDeduccion,
    VerTipoDeDeduccion
    
  ],
  entryComponents : [
    AgregarTipoDeDeduccion,
    EditarTipoDeDeduccion,
    EliminarTipoDeDeduccion,
    VerTipoDeDeduccion
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    TiposDeDeduccionesRoutingModule
  ]
})
export class TiposDeDeduccionesModule { }
