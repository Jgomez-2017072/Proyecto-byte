import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiposSubtiposGarantiasRealesComponent } from './tipos-subtipos-garantias-reales.component';

const routes: Routes = [
  {
    path : '',
    component : TiposSubtiposGarantiasRealesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposSubtiposGarantiasRealesRoutingModule { }
