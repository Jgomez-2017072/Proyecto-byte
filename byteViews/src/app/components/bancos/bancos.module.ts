import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancosRoutingModule } from './bancos-routing.module';
import { BancosComponent, AgregarBancos,EditarBancos,EliminarBancos,CuentasBancos} from './bancos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BancosComponent,
    AgregarBancos,
    EditarBancos,
    EliminarBancos,
    CuentasBancos
  ],
  entryComponents : [
    AgregarBancos,
    EditarBancos,
    EliminarBancos,
    CuentasBancos
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    BancosRoutingModule
  ]
})
export class BancosModule { }
