import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgrupacionDeCreditosComponent } from './agrupacion-de-creditos.component';

const routes: Routes = [
  {
    path : '',
    component : AgrupacionDeCreditosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgrupacionDeCreditosRoutingModule { }
