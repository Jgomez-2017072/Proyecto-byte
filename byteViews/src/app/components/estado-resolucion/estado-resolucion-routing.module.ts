import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoResolucionComponent } from './estado-resolucion.component';

const routes: Routes = [
  {
    path: '',
    component: EstadoResolucionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoResolucionRoutingModule { }
