import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosGeneralesComponent } from './datos-generales.component';

const routes: Routes = [
  {
    path : '',
    component : DatosGeneralesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosGeneralesRoutingModule { }
