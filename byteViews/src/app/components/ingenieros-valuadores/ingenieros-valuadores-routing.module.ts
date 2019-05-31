import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngenierosValuadoresComponent } from './ingenieros-valuadores.component';

const routes: Routes = [
  {
    path : '',
    component : IngenierosValuadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngenierosValuadoresRoutingModule { }
