import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivosDeReferenciasClientesRoutingModule } from './motivos-de-referencias-clientes-routing.module';
import { MotivosDeReferenciasClientesComponent, AgregarMotivosDeReferenciasClientes, EditarMotivosDeReferenciasClientes,EliminarMotivosDeReferenciasClientes } from './motivos-de-referencias-clientes.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MotivosDeReferenciasClientesComponent,
    AgregarMotivosDeReferenciasClientes, 
    EditarMotivosDeReferenciasClientes,
    EliminarMotivosDeReferenciasClientes
  ],
  entryComponents : [
    AgregarMotivosDeReferenciasClientes, 
    EditarMotivosDeReferenciasClientes,
    EliminarMotivosDeReferenciasClientes
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    MotivosDeReferenciasClientesRoutingModule
  ]
})
export class MotivosDeReferenciasClientesModule { }
