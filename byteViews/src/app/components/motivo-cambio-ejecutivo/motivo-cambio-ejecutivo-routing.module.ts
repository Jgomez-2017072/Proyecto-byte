import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotivoCambioEjecutivoComponent } from './motivo-cambio-ejecutivo.component';

const routes: Routes = [
  {
    path: '',
    component: MotivoCambioEjecutivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivoCambioEjecutivoRoutingModule { }
