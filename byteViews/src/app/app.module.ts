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
import { EventosSolicitudesComponent, AgregarEvento, EditarEvento, EliminarEvento } from './components/eventos-solicitudes/eventos-solicitudes.component';
import { DocumentosPresentarProductoComponent,AgregarDocumento,EditarDocumento,EliminarDocumento } from './components/documentos-presentar-producto/documentos-presentar-producto.component';
import { MontosPorPlazoComponent, AgregarMonto, EditarMonto, EliminarMonto } from './components/montos-por-plazo/montos-por-plazo.component';
import { PorcentajesDeFinanciamientoComponent, AgregarPorcentaje, EditarPorcentaje, EliminarPorcentaje } from './components/porcentajes-de-financiamiento/porcentajes-de-financiamiento.component';
import { RangoPlazosInteresComponent, AgregarRango, EditarRango, EliminarRango } from './components/rango-plazos-interes/rango-plazos-interes.component';
import { DefinirCategoriasUsuariosComponent, AgregarCategoria, EditarCategoria, EliminarCategoria } from './components/definir-categorias-usuarios/definir-categorias-usuarios.component';
import { AsignarAutorizacionComponent, AgregarAutorizacion, EditarAutorizacion, EliminarAutorizacion } from './components/asignar-autorizacion/asignar-autorizacion.component';
import { SubProductosComponent, AgregarSubProductos, EditarSubProductos, EliminarSubProductos } from './components/sub-productos/sub-productos.component';
import { SubtipoGarantiaComponent, AgregarSubTipoGarantia, EditarSubTipoGarantia, EliminarSubTipoGarantia } from './components/subtipo-garantia/subtipo-garantia.component';
import { SubEstadosComponent, AgregarSubEstados, EditarSubEstados, EliminarSubEstados } from './components/sub-estados/sub-estados.component';
import { TrasladoEstadosPrestamosComponent, AgregarTrasladoEstPrestamo, EditarTrasladoEstPrestamo, EliminarTrasladoEstPrestamo } from './components/traslado-estados-prestamos/traslado-estados-prestamos.component';
import { SearchPipe } from './components/pipes/search.pipe';

@NgModule({
  declarations: [
    SearchPipe,
    AppComponent,
    HomeComponent,
    SidenavComponent,   
    EventosSolicitudesComponent,
    AgregarEvento, EditarEvento, EliminarEvento, DocumentosPresentarProductoComponent,
    AgregarDocumento,EditarDocumento,EliminarDocumento, MontosPorPlazoComponent,
    AgregarMonto, EditarMonto, EliminarMonto, PorcentajesDeFinanciamientoComponent,
    AgregarPorcentaje, EditarPorcentaje, EliminarPorcentaje, RangoPlazosInteresComponent,
    AgregarRango, EditarRango, EliminarRango, DefinirCategoriasUsuariosComponent,
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
    AgregarEvento, EditarEvento, EliminarEvento,
    AgregarDocumento,EditarDocumento,EliminarDocumento,
    AgregarMonto, EditarMonto, EliminarMonto,
    AgregarPorcentaje, EditarPorcentaje, EliminarPorcentaje,
    AgregarRango, EditarRango, EliminarRango,
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
