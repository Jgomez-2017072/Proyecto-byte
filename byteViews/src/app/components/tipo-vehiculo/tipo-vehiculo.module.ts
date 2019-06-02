import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;

import { TipoVehiculoRoutingModule } from './tipo-vehiculo-routing.module';
import { TipoVehiculoComponent, AgregarTipoVehiculo, EditarTipoVehiculo, EliminarTipoVehiculo, VerTipoVehiculo } from './tipo-vehiculo.component';

import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   TipoVehiculoComponent,
   AgregarTipoVehiculo,
   EditarTipoVehiculo,
   EliminarTipoVehiculo,
   VerTipoVehiculo
  ],
  entryComponents : [
    AgregarTipoVehiculo,
    EditarTipoVehiculo,
    EliminarTipoVehiculo,
    VerTipoVehiculo
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
   TipoVehiculoRoutingModule
  ]
})



export class TipoVehiculoModule { }