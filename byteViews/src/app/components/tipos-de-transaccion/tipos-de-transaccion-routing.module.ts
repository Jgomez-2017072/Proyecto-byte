import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiposDeTransaccionComponent } from './tipos-de-transaccion.component';

const routes: Routes = [
  {
    path : '',
    component : TiposDeTransaccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposDeTransaccionRoutingModule { }
