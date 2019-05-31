import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UbicacionDeLaGarantiaComponent } from './ubicacion-de-la-garantia.component';

const routes: Routes = [
  {
    path : '',
    component : UbicacionDeLaGarantiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbicacionDeLaGarantiaRoutingModule { }
