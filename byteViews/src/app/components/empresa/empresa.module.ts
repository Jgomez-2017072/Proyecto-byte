import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent, VerEmpresa } from './empresa.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmpresaComponent,
    VerEmpresa
  ],
  entryComponents: [
    VerEmpresa
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
