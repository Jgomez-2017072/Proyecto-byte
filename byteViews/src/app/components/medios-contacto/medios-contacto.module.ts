import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediosContactoRoutingModule } from './medios-contacto-routing.module';
import { MediosContactoComponent,AgregarMediosContacto,EditarMediosContacto,EliminarMediosContacto} from './medios-contacto.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MediosContactoComponent,
    AgregarMediosContacto,
    EditarMediosContacto,
    EliminarMediosContacto
  ],
  entryComponents : [
    AgregarMediosContacto,
    EditarMediosContacto,
    EliminarMediosContacto
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    MediosContactoRoutingModule
  ]
})
export class MediosContactoModule { }
