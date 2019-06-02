import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrecuenciasAmortizacionComponent } from './frecuencias-amortizacion.component';

const routes: Routes = [
  {
    path : '',
    component : FrecuenciasAmortizacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrecuenciaAmortizacionRoutingModule { }
