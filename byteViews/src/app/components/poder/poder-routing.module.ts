import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoderComponent } from './poder.component';

const routes: Routes = [
 { 
   path: '',
  component:  PoderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoderRoutingModule { }
