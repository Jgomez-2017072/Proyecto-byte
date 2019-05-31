import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormasDeDesembolsoRoutingModule } from './formas-de-desembolso-routing.module';
import { FormasDeDesembolsoComponent, AgregarFormasDeDesembolso, EditarFormasDeDesembolso, EliminarFormasDeDesembolso} from './formas-de-desembolso.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormasDeDesembolsoComponent,
    AgregarFormasDeDesembolso, 
    EditarFormasDeDesembolso, 
    EliminarFormasDeDesembolso
  ],
  entryComponents : [
    AgregarFormasDeDesembolso, 
    EditarFormasDeDesembolso, 
    EliminarFormasDeDesembolso
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    FormasDeDesembolsoRoutingModule
  ]
})
export class FormasDeDesembolsoModule { }
