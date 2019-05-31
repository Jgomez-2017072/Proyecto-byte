import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormasDeDesembolsoComponent } from './formas-de-desembolso.component';

const routes: Routes = [
  {
    path : '',
    component : FormasDeDesembolsoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormasDeDesembolsoRoutingModule { }
