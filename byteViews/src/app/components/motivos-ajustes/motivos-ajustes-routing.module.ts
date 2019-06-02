import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotivosAjustesComponent } from './motivos-ajustes.component';

const routes: Routes = [
  {
    path : '',
    component : MotivosAjustesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivosAjustesRoutingModule { }
