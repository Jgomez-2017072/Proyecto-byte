import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecutivoCuentaRoutingModule } from './ejecutivo-cuenta-routing.module';
import { EjecutivoCuentaComponent, AgregarEjecutivoCuenta, EditarEjecutivoCuenta, EliminarEjecutivoCuenta, VerEjecutivoCuenta } from './ejecutivo-cuenta.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EjecutivoCuentaComponent,
    AgregarEjecutivoCuenta,
    EditarEjecutivoCuenta,
    EliminarEjecutivoCuenta,
    VerEjecutivoCuenta
  ],
  entryComponents: [
    AgregarEjecutivoCuenta,
    EditarEjecutivoCuenta,
    EliminarEjecutivoCuenta,
    VerEjecutivoCuenta
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    EjecutivoCuentaRoutingModule
  ]
})
export class EjecutivoCuentaModule { }
