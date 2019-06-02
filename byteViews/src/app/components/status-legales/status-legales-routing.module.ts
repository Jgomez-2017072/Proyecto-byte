import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusLegalesComponent } from './status-legales.component';

const routes: Routes = [
  {
    path : '',
    component : StatusLegalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusLegalesRoutingModule { }
