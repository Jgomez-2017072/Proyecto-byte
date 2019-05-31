import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormasDePagoComponent } from './formas-de-pago.component';

const routes: Routes = [
  {
    path : '',
    component : FormasDePagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormasDePagoRoutingModule { }
