import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstanciaComponent } from './instancia.component';

const routes: Routes = [
  {
    path : '',
    component : InstanciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstanciaRoutingModule { }
