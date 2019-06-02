import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresDeInversionRoutingModule } from './lugares-de-inversion-routing.module';
import { LugaresDeInversionComponent, AgregarLugar, EditarLugar, EliminarLugar, VerLugar } from './lugares-de-inversion.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LugaresDeInversionComponent,
    AgregarLugar, 
    EditarLugar, 
    EliminarLugar, 
    VerLugar
  ],
  entryComponents : [
    AgregarLugar, 
    EditarLugar, 
    EliminarLugar, 
    VerLugar
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    LugaresDeInversionRoutingModule
  ]
})
export class LugaresDeInversionModule { }
