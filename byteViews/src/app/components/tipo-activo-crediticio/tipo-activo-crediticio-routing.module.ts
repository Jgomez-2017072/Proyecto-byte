import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoActivoCrediticioComponent } from './tipo-activo-crediticio.component';

const routes: Routes = [
  {
    path : '',
    component : TipoActivoCrediticioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoActivoCrediticioRoutingModule { }
