import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercamientoComponent } from './acercamiento.component';

const routes: Routes = [
  {
    path : '',
    component : AcercamientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcercamientoRoutingModule { }
