import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrosDeProductosComponent } from './parametros-de-productos.component';

const routes: Routes = [
  {
    path : '',
    component : ParametrosDeProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosDeProductosRoutingModule { }
