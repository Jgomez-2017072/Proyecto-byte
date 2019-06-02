import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosAdicionalesProductoRoutingModule } from './parametros-adicionales-producto-routing.module';
import {  ParametrosAdicionalesProductoComponent, 
          AgregarEvento, EditarEvento, EliminarEvento, 
          AgregarDocumento, EditarDocumento, EliminarDocumento, 
          AgregarMonto, EditarMonto, EliminarMonto, 
          AgregarPorcentaje, EditarPorcentaje, EliminarPorcentaje, AgregarRango, EditarRango, EliminarRango 
       } from './parametros-adicionales-producto.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';
import { SearchPipe2 } from '../pipes/search.pipe2';

@NgModule({
  declarations: [
    ParametrosAdicionalesProductoComponent,
    SearchPipe2,
    AgregarEvento,
    EditarEvento,
    EliminarEvento,
    AgregarDocumento,
    EditarDocumento,
    EliminarDocumento,
    AgregarMonto,
    EditarMonto,
    EliminarMonto,
    AgregarPorcentaje,
    EditarPorcentaje,
    EliminarPorcentaje,
    AgregarRango,
    EditarRango,
    EliminarRango
  ],
  entryComponents : [
    AgregarEvento,
    EditarEvento,
    EliminarEvento,
    AgregarDocumento,
    EditarDocumento,
    EliminarDocumento,
    AgregarMonto,
    EditarMonto,
    EliminarMonto,
    AgregarPorcentaje,
    EditarPorcentaje,
    EliminarPorcentaje,
    AgregarRango,
    EditarRango,
    EliminarRango
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ParametrosAdicionalesProductoRoutingModule
  ]
})
export class ParametrosAdicionalesProductoModule { }
