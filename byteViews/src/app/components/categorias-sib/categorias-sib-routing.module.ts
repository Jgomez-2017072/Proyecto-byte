import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasSibComponent } from './categorias-sib.component';

const routes: Routes = [
  {
    path : '',
    component : CategoriasSibComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasSibRoutingModule { }
