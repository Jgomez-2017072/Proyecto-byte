import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormasDeDesembolsoRoutingModule } from './formas-de-desembolso-routing.module';
import { FormasDeDesembolsoComponent, AgregarFormasDeDesembolso, EditarFormasDeDesembolso, EliminarFormasDeDesembolso, VerFormasDeDesembolso } from './formas-de-desembolso.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormasDeDesembolsoComponent,
    AgregarFormasDeDesembolso,
    EditarFormasDeDesembolso,
    EliminarFormasDeDesembolso,
    VerFormasDeDesembolso
  ],
  entryComponents: [
    AgregarFormasDeDesembolso,
    EditarFormasDeDesembolso,
    EliminarFormasDeDesembolso,
    VerFormasDeDesembolso
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    FormasDeDesembolsoRoutingModule
  ]
})
export class FormasDeDesembolsoModule { }
