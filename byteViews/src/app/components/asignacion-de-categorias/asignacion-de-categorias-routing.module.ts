import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionDeCategoriasComponent } from './asignacion-de-categorias.component';

const routes: Routes = [
  {
    path : '',
    component : AsignacionDeCategoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacionDeCategoriasRoutingModule { }
