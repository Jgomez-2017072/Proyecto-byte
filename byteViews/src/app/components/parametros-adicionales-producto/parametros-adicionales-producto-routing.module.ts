import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrosAdicionalesProductoComponent } from './parametros-adicionales-producto.component';

const routes: Routes = [
  {
    path : '',
    component : ParametrosAdicionalesProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosAdicionalesProductoRoutingModule { }
