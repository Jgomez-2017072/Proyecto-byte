import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing,/* AppRoutingModule */} from './app.routing';
import { AppComponent } from './app.component';

//Animations
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
//Material
import { MaterialModule } from './material';

import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DefinirCategoriasUsuariosComponent, AgregarCategoria, EditarCategoria, EliminarCategoria } from './components/definir-categorias-usuarios/definir-categorias-usuarios.component';
import { AsignarAutorizacionComponent, AgregarAutorizacion, EditarAutorizacion, EliminarAutorizacion } from './components/asignar-autorizacion/asignar-autorizacion.component';
import { SubProductosComponent, AgregarSubProductos, EditarSubProductos, EliminarSubProductos } from './components/sub-productos/sub-productos.component';
import { SubtipoGarantiaComponent, AgregarSubTipoGarantia, EditarSubTipoGarantia, EliminarSubTipoGarantia } from './components/subtipo-garantia/subtipo-garantia.component';
import { SubEstadosComponent, AgregarSubEstados, EditarSubEstados, EliminarSubEstados } from './components/sub-estados/sub-estados.component';
import { TrasladoEstadosPrestamosComponent, AgregarTrasladoEstPrestamo, EditarTrasladoEstPrestamo, EliminarTrasladoEstPrestamo } from './components/traslado-estados-prestamos/traslado-estados-prestamos.component';
import { SearchPipe } from './components/pipes/search.pipe';
import { TipoActivoCrediticioComponent } from './components/tipo-activo-crediticio/tipo-activo-crediticio.component';

@NgModule({
  declarations: [
    SearchPipe,
    AppComponent,
    HomeComponent,
    SidenavComponent, DefinirCategoriasUsuariosComponent,
    AgregarCategoria, EditarCategoria, EliminarCategoria, AsignarAutorizacionComponent,
    AgregarAutorizacion, EditarAutorizacion, EliminarAutorizacion,    
    SubProductosComponent,
    AgregarSubProductos,
    EditarSubProductos,
    EliminarSubProductos,
    SubtipoGarantiaComponent,
    AgregarSubTipoGarantia,
    EditarSubTipoGarantia,
    EliminarSubTipoGarantia,
    SubEstadosComponent, 
    AgregarSubEstados,
    EditarSubEstados,
    EliminarSubEstados,
    TrasladoEstadosPrestamosComponent,
    AgregarTrasladoEstPrestamo,
    EditarTrasladoEstPrestamo,
    EliminarTrasladoEstPrestamo,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    FormsModule,
    HttpClientModule,
    //AppRoutingModule
  ],
  entryComponents: [  
    AgregarCategoria, EditarCategoria, EliminarCategoria,
    AgregarAutorizacion, EditarAutorizacion, EliminarAutorizacion,
    AgregarSubProductos, EditarSubProductos, EliminarSubProductos,
    AgregarSubTipoGarantia,
    EditarSubTipoGarantia,
    EliminarSubTipoGarantia,
    AgregarSubEstados,
    EditarSubEstados,
    EliminarSubEstados,
    AgregarTrasladoEstPrestamo,
    EditarTrasladoEstPrestamo,
    EliminarTrasladoEstPrestamo,
  ]
  ,
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
