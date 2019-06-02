import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsesoresDePrestamoComponent } from './asesores-de-prestamo.component';

const routes: Routes = [
  {
    path : '',
    component : AsesoresDePrestamoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesoresDePrestamoRoutingModule { }
