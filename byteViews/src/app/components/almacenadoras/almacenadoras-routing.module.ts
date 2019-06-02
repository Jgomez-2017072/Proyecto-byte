import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlmacenadorasComponent } from './almacenadoras.component';

const routes: Routes = [
  {
    path : '',
    component : AlmacenadorasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenadorasRoutingModule { }
