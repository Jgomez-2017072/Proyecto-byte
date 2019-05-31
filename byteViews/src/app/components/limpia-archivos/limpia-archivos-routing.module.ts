import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimpiaArchivosComponent } from './limpia-archivos.component';

const routes: Routes = [
  {
    path : '',
    component : LimpiaArchivosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LimpiaArchivosRoutingModule { }
