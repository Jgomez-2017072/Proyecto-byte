import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanalDistribucionComponent } from './canal-distribucion.component';

const routes: Routes = [
  {
    path : '',
    component : CanalDistribucionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanalDistribucionRoutingModule { }
