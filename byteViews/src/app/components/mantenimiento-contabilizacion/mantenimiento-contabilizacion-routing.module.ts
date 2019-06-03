import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MantenimientoContabilizacionComponent } from './mantenimiento-contabilizacion.component';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoContabilizacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoContabilizacionRoutingModule { }
