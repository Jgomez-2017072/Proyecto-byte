import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiasInhabilesComponent } from './dias-inhabiles.component';

const routes: Routes = [
  {
    path : '',
    component : DiasInhabilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiasInhabilesRoutingModule { }
