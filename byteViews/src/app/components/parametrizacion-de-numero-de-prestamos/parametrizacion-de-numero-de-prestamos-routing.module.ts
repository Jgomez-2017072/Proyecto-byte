import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrizacionDeNumeroDePrestamosComponent } from './parametrizacion-de-numero-de-prestamos.component';

const routes: Routes = [
  {
    path : '',
    component : ParametrizacionDeNumeroDePrestamosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionDeNumeroDePrestamosRoutingModule { }
