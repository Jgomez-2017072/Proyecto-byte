import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadosPrestamosComponent } from './estados-prestamos.component';

const routes: Routes = [
  {
    path : '',
    component : EstadosPrestamosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadosPrestamosRoutingModule { }
