import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MantenimientoAPasosDelCierreComponent } from './mantenimiento-apasos-del-cierre.component';

const routes: Routes = [
  {
    path : '',
    component : MantenimientoAPasosDelCierreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoApasosDelCierreRoutingModule { }
