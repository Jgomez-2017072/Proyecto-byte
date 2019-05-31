import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanalesVentaComponent } from './canales-venta.component';

const routes: Routes = [
  {
    path : '',
    component : CanalesVentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanalesVentaRoutingModule { }
