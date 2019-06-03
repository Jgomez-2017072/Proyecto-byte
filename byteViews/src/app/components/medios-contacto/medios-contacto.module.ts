import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediosContactoRoutingModule } from './medios-contacto-routing.module';
import { MediosContactoComponent,AgregarMediosContacto,EditarMediosContacto,EliminarMediosContacto, VerMedio} from './medios-contacto.component';
import { MaterialModule } from 'src/app/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MediosContactoComponent,
    AgregarMediosContacto,
    EditarMediosContacto,
    EliminarMediosContacto,
    VerMedio
  ],
  entryComponents : [
    AgregarMediosContacto,
    EditarMediosContacto,
    EliminarMediosContacto,
    VerMedio
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    MediosContactoRoutingModule
  ]
})
export class MediosContactoModule { }
