import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AseguradorasRoutingModule } from './aseguradoras-routing.module';
import { AseguradorasComponent, AgregarAseguradora, EditarAseguradora, EliminarAseguradora, VerAseguradora } from './aseguradoras.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AseguradorasComponent,
    AgregarAseguradora,
    EditarAseguradora,
    EliminarAseguradora,
    VerAseguradora
  ],
  entryComponents: [ 
    AgregarAseguradora,
    EditarAseguradora,
    EliminarAseguradora,
    VerAseguradora
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    AseguradorasRoutingModule
  ]
})
export class AseguradorasModule { }
