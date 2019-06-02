import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidosContablesComponent } from './contenidos-contables.component';

const routes: Routes = [
  {
    path : '',
    component : ContenidosContablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidosContablesRoutingModule { }
