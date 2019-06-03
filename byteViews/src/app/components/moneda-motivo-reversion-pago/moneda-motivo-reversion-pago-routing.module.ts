import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonedaMotivoReversionPagoComponent } from './moneda-motivo-reversion-pago.component';

const routes: Routes = [
  {
    path : '',
    component : MonedaMotivoReversionPagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonedaMotivoReversionPagoRoutingModule { }
