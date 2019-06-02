import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoAjusteComponent } from './tipo-ajuste.component';

const routes: Routes = [
  {path: '', component: TipoAjusteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoAjusteRoutingModule { }
