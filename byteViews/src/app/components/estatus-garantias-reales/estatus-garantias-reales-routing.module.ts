import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstatusGarantiasRealesComponent } from './estatus-garantias-reales.component';

const routes: Routes = [
  {
    path : '',
    component : EstatusGarantiasRealesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstatusGarantiasRealesRoutingModule { }
