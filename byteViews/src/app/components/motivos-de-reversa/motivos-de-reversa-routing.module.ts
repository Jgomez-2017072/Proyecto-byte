import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotivosDeReversaComponent } from './motivos-de-reversa.component';

const routes: Routes = [
  {
    path : '',
    component : MotivosDeReversaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivosDeReversaRoutingModule { }
