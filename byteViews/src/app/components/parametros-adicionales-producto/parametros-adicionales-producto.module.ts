import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosAdicionalesProductoRoutingModule } from './parametros-adicionales-producto-routing.module';
import { ParametrosAdicionalesProductoComponent } from './parametros-adicionales-producto.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParametrosAdicionalesProductoComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ParametrosAdicionalesProductoRoutingModule
  ]
})
export class ParametrosAdicionalesProductoModule { }
