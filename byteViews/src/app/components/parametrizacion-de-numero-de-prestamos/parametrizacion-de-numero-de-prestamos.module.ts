import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrizacionDeNumeroDePrestamosRoutingModule } from './parametrizacion-de-numero-de-prestamos-routing.module';
import { ParametrizacionDeNumeroDePrestamosComponent, AgregarParametrizacionDeNumeroDePrestamos, EditarParametrizacionDeNumeroDePrestamos,EliminarParametrizacionDeNumeroDePrestamos} from './parametrizacion-de-numero-de-prestamos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParametrizacionDeNumeroDePrestamosComponent,
    AgregarParametrizacionDeNumeroDePrestamos, 
    EditarParametrizacionDeNumeroDePrestamos,
    EliminarParametrizacionDeNumeroDePrestamos
  ],
  entryComponents : [
    AgregarParametrizacionDeNumeroDePrestamos, 
    EditarParametrizacionDeNumeroDePrestamos,
    EliminarParametrizacionDeNumeroDePrestamos
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ParametrizacionDeNumeroDePrestamosRoutingModule
  ]
})
export class ParametrizacionDeNumeroDePrestamosModule { }
