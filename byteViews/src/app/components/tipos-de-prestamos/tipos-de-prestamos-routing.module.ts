import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiposDePrestamosComponent } from './tipos-de-prestamos.component';

const routes: Routes = [
  {
    path : '',
    component : TiposDePrestamosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposDePrestamosRoutingModule { }
