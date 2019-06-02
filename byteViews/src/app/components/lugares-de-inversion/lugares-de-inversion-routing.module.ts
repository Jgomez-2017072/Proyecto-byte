import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LugaresDeInversionComponent } from './lugares-de-inversion.component';

const routes: Routes = [
  {
    path : '',
    component : LugaresDeInversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugaresDeInversionRoutingModule { }
