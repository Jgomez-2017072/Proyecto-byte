import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstatusAvaluosComponent } from './estatus-avaluos.component';

const routes: Routes = [
  {
    path : '',
    component : EstatusAvaluosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstatusAvaluosRoutingModule { }
