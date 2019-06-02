import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrigenDeFondosRoutingModule } from './origen-de-fondos-routing.module';
import { OrigenDeFondosComponent, AgregarOrigenDeFondos, EditarOrigenDeFondos, EliminarOrigenDeFondos, VerOrigenDeFondos} from './origen-de-fondos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrigenDeFondosComponent,
    AgregarOrigenDeFondos, 
    EditarOrigenDeFondos, 
    EliminarOrigenDeFondos,
    VerOrigenDeFondos,
  ],
  entryComponents : [
    AgregarOrigenDeFondos, 
    EditarOrigenDeFondos, 
    EliminarOrigenDeFondos,
    VerOrigenDeFondos
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    OrigenDeFondosRoutingModule
  ]
})
export class OrigenDeFondosModule { }
