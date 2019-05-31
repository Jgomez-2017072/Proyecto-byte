import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasSibRoutingModule } from './categorias-sib-routing.module';
import { CategoriasSibComponent, AgregarCategoriasSib, EditarCategoriasSib, EliminarCategoriasSib, VerCategoria } from './categorias-sib.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoriasSibComponent,
    AgregarCategoriasSib, 
    EditarCategoriasSib, 
    EliminarCategoriasSib, 
    VerCategoria
  ],
  entryComponents : [
    AgregarCategoriasSib, 
    EditarCategoriasSib, 
    EliminarCategoriasSib, 
    VerCategoria
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    CategoriasSibRoutingModule
  ]
})
export class CategoriasSibModule { }
