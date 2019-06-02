import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrosTransaccionComponent } from './parametros-transaccion.component';

const routes: Routes = [
  {
    path : '',
    component : ParametrosTransaccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosTransaccionRoutingModule { }
