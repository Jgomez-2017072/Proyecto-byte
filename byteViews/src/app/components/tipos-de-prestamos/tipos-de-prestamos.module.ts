import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposDePrestamosRoutingModule } from './tipos-de-prestamos-routing.module';
import { TiposDePrestamosComponent,AgregarTipoDePrestamos,EditarTipoDePrestamos,EliminarTipoDePrestamos, VerTipoPrestamo} from './tipos-de-prestamos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TiposDePrestamosComponent,
    AgregarTipoDePrestamos,
    EditarTipoDePrestamos,
    EliminarTipoDePrestamos,
    VerTipoPrestamo
  ],
  entryComponents : [
    AgregarTipoDePrestamos,
    EditarTipoDePrestamos,
    EliminarTipoDePrestamos,
    VerTipoPrestamo
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    TiposDePrestamosRoutingModule
  ]
})
export class TiposDePrestamosModule { }
