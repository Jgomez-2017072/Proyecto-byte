import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AseguradorasComponent } from './aseguradoras.component';

const routes: Routes = [
  {
    path : '',
    component : AseguradorasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AseguradorasRoutingModule { }
