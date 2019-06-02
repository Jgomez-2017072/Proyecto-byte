import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposDePrestamosRoutingModule } from './tipos-de-prestamos-routing.module';
import { TiposDePrestamosComponent,AgregarTipoDePrestamos,EditarTipoDePrestamos,EliminarTipoDePrestamos} from './tipos-de-prestamos.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TiposDePrestamosComponent,
    AgregarTipoDePrestamos,
    EditarTipoDePrestamos,
    EliminarTipoDePrestamos
  ],
  entryComponents : [
    AgregarTipoDePrestamos,
    EditarTipoDePrestamos,
    EliminarTipoDePrestamos
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    TiposDePrestamosRoutingModule
  ]
})
export class TiposDePrestamosModule { }
