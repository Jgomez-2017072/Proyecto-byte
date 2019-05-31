import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotivosDeReferenciasClientesComponent } from './motivos-de-referencias-clientes.component';

const routes: Routes = [
  {
    path : '',
    component : MotivosDeReferenciasClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivosDeReferenciasClientesRoutingModule { }
