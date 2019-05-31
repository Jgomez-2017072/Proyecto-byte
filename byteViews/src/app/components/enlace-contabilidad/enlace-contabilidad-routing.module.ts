import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnlaceContabilidadComponent } from './enlace-contabilidad.component';

const routes: Routes = [
  {
    path : '',
    component : EnlaceContabilidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnlaceContabilidadRoutingModule { }
