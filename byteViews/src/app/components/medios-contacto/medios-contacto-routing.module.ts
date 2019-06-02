import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediosContactoComponent } from './medios-contacto.component';

const routes: Routes = [
  {
    path : '',
    component : MediosContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediosContactoRoutingModule { }
