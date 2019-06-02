import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GarantiasContablesComponent } from './garantias-contables.component';

const routes: Routes = [
  {
    path : '',
    component : GarantiasContablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarantiasContablesRoutingModule { }
