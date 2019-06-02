import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoderRoutingModule } from './poder-routing.module';
import { PoderComponent, AgregarPoder, EliminarPoder, EditarPoder, VerPoder } from './poder.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

@NgModule({
  declarations: [
    PoderComponent,
    AgregarPoder,
    EliminarPoder,
    EditarPoder,
    VerPoder
  ],
  entryComponents: [
    AgregarPoder,
    EliminarPoder,
    EditarPoder,
    VerPoder
  ],
  imports: [
    CommonModule,
    PoderRoutingModule,
    FormsModule,
    MaterialModule,

  ]
})
export class PoderModule { }
