import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent, AgregarProducto, EditarProducto, EliminarProducto } from './productos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductosComponent,
    AgregarProducto, 
    EditarProducto, 
    EliminarProducto
  ],
  entryComponents : [
    AgregarProducto, 
    EditarProducto, 
    EliminarProducto
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
