import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NivelesContabilizacionComponent } from './niveles-contabilizacion.component';

const routes: Routes = [
  {
    path : '',
    component : NivelesContabilizacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelesContabilizacionRoutingModule { }
