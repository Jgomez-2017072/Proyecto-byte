import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivosDeLimpiezaComponent } from './archivos-de-limpieza.component';

const routes: Routes = [
  {
    path : '',
    component : ArchivosDeLimpiezaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchivosDeLimpiezaRoutingModule { }
