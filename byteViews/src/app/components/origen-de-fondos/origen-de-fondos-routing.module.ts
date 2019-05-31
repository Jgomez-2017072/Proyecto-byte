import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrigenDeFondosComponent } from './origen-de-fondos.component';

const routes: Routes = [
  {
    path : '',
    component : OrigenDeFondosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrigenDeFondosRoutingModule { }
