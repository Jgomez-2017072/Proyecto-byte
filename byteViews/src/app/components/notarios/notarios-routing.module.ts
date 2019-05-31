import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotariosComponent } from './notarios.component';

const routes: Routes = [
  {
    path : '',
    component : NotariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotariosRoutingModule { }
