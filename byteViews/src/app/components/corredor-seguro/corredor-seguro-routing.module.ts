import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorredorSeguroComponent } from './corredor-seguro.component';

const routes: Routes = [
  {
    path: '',
    component: CorredorSeguroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorredorSeguroRoutingModule { }
