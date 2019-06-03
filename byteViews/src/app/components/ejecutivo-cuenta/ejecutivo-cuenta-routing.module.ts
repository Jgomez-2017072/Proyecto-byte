import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjecutivoCuentaComponent } from './ejecutivo-cuenta.component';

const routes: Routes = [
  {
    path: '',
    component: EjecutivoCuentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjecutivoCuentaRoutingModule { }
