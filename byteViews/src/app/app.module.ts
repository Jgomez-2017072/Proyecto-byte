import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing } from './app.routing';
import { AppComponent } from './app.component';

//Animations
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';

import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AlmacenadorasComponent,EditarAlmacenadora, EliminarAlmacenadora, AgregarAlmacenadora } from './components/almacenadoras/almacenadoras.component';
import { AseguradorasComponent,EditarAseguradora, EliminarAseguradora, AgregarAseguradora } from './components/aseguradoras/aseguradoras.component';
import { AgrupacionDeCreditosComponent,EditarCredito, EliminarCredito,AgregarCredito } from './components/agrupacion-de-creditos/agrupacion-de-creditos.component';
import { LugaresDeInversionComponent, EditarLugar, EliminarLugar, AgregarLugar } from './components/lugares-de-inversion/lugares-de-inversion.component';
import { UbicacionDeLaGarantiaComponent, EditarUbicacion, EliminarUbicacion, AgregarUbicacion } from './components/ubicacion-de-la-garantia/ubicacion-de-la-garantia.component';
import { OrigenDeFondosComponent, EditarOrigenDeFondos, EliminarOrigenDeFondos, AgregarOrigenDeFondos} from './components/origen-de-fondos/origen-de-fondos.component';
import { FormasDePagoComponent, EditarFormasDePago, EliminarFormasDePago, AgregarFormasDePago} from './components/formas-de-pago/formas-de-pago.component';
import { DestinosComponent, EditarDestino, EliminarDestino, AgregarDestino} from './components/destinos/destinos.component';
import { CategoriasSibComponent, EditarCategoriasSib, EliminarCategoriasSib, AgregarCategoriasSib} from './components/categorias-sib/categorias-sib.component';
import { EstatusGarantiasRealesComponent, EditarEstatusGarantiasReales, EliminarEstatusGarantiasReales, AgregarEstatusGarantiasReales} from './components/estatus-garantias-reales/estatus-garantias-reales.component';
import { EstatusAvaluosComponent, AgregarEstatusAvaluos, EditarEstatusAvaluos, EliminarEstatusAvaluos } from './components/estatus-avaluos/estatus-avaluos.component';
import { IngenierosValuadoresComponent, AgregarIngenieroValuador, EditarIngenieroValuador, EliminarIngenieroValuador } from './components/ingenieros-valuadores/ingenieros-valuadores.component';
import { NotariosComponent, AgregarNotarios, EditarNotarios, EliminarNotarios } from './components/notarios/notarios.component';
import { MotivosAjustesComponent, AgregarMotivoAjuste, EditarMotivoAjuste, EliminarMotivoAjuste } from './components/motivos-ajustes/motivos-ajustes.component';
import { DiasInhabilesComponent, AgregarDiaInhabil, EditarDiaInhabil, EliminarDiaInhabil } from './components/dias-inhabiles/dias-inhabiles.component';
import { AsesoresDePrestamoComponent, AgregarAsesoresDePrestamo, EditarAsesoresDePrestamo, EliminarAsesoresDePrestamo} from './components/asesores-de-prestamo/asesores-de-prestamo.component';
import { TiposDeTransaccionComponent, AgregarTiposTransacciones, EditarTiposTransacciones, EliminarTiposTransacciones } from './components/tipos-de-transaccion/tipos-de-transaccion.component';
import { GarantiasContablesComponent, AgregarGarantiasContables, EditarGarantiasContables, EliminarGarantiasContables } from './components/garantias-contables/garantias-contables.component';
import { TiposSubtiposGarantiasRealesComponent, AgregarTiposSubtiposGR, EditarTiposSubtiposGR, EliminarTiposSubtiposGR } from './components/tipos-subtipos-garantias-reales/tipos-subtipos-garantias-reales.component';
import { SubtipoGarantiaComponent, AgregarSubTipoGarantia, EditarSubTipoGarantia, EliminarSubTipoGarantia } from './components/subtipo-garantia/subtipo-garantia.component';

import { EstadosPrestamosComponent, AgregarEstadosPrestamos, EditarEstadosPrestamos, EliminarEstadosPrestamos } from './components/estados-prestamos/estados-prestamos.component';
import { SubEstadosComponent, AgregarSubEstados, EditarSubEstados, EliminarSubEstados } from './components/sub-estados/sub-estados.component';
import { TrasladoEstadosPrestamosComponent, AgregarTrasladoEstPrestamo, EditarTrasladoEstPrestamo, EliminarTrasladoEstPrestamo } from './components/traslado-estados-prestamos/traslado-estados-prestamos.component';
import { AgregarFrecuenciaAmortizacion, EditarFrecuenciaAmortizacion, EliminarFrecuenciaAmortizacion, FrecuenciasAmortizacionComponent } from './components/frecuencia-amortizacion/frecuencias-amortizacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    AlmacenadorasComponent,
    EditarAlmacenadora,
    EliminarAlmacenadora,
    AgregarAlmacenadora,
    AseguradorasComponent,
    EditarAseguradora,
    EliminarAseguradora,
    AgregarAseguradora,
    AgrupacionDeCreditosComponent,
    EditarCredito, 
    EliminarCredito,
    AgregarCredito,
    LugaresDeInversionComponent, 
    EditarLugar, 
    EliminarLugar, 
    AgregarLugar, 
    UbicacionDeLaGarantiaComponent ,
    EditarUbicacion, 
    EliminarUbicacion, 
    AgregarUbicacion,
    OrigenDeFondosComponent, 
    EditarOrigenDeFondos, 
    EliminarOrigenDeFondos, 
    AgregarOrigenDeFondos,
    FormasDePagoComponent, 
    EditarFormasDePago, 
    EliminarFormasDePago, 
    AgregarFormasDePago,
    DestinosComponent, 
    EditarDestino, 
    EliminarDestino, 
    AgregarDestino,
    CategoriasSibComponent, 
    EditarCategoriasSib, 
    EliminarCategoriasSib, 
    AgregarCategoriasSib,
    EstatusGarantiasRealesComponent, 
    EditarEstatusGarantiasReales, 
    EliminarEstatusGarantiasReales, 
    AgregarEstatusGarantiasReales,
    EstatusAvaluosComponent,
    AgregarEstatusAvaluos, 
    EditarEstatusAvaluos, 
    EliminarEstatusAvaluos,
    IngenierosValuadoresComponent,
    NotariosComponent,
    MotivosAjustesComponent,
    DiasInhabilesComponent,
    EditarEstatusAvaluos,
    AgregarEstatusAvaluos,
    EliminarEstatusAvaluos,
    AgregarIngenieroValuador,
    EditarIngenieroValuador,
    EliminarIngenieroValuador,
    AgregarNotarios,
    EditarNotarios,
    EliminarNotarios,
    AgregarMotivoAjuste,
    EditarMotivoAjuste,
    EliminarMotivoAjuste,
    AgregarDiaInhabil,
    EditarDiaInhabil,
    EliminarDiaInhabil,
    AsesoresDePrestamoComponent, 
    AgregarAsesoresDePrestamo, 
    EditarAsesoresDePrestamo, 
    EliminarAsesoresDePrestamo, 
    TiposDeTransaccionComponent, 
    AgregarTiposTransacciones,
    EditarTiposTransacciones,
    EliminarTiposTransacciones,
    GarantiasContablesComponent, 
    AgregarGarantiasContables,
    EditarGarantiasContables,
    EliminarGarantiasContables,
    TiposSubtiposGarantiasRealesComponent, 
    AgregarTiposSubtiposGR,
    EditarTiposSubtiposGR,
    EliminarTiposSubtiposGR,
    SubtipoGarantiaComponent,
    AgregarSubTipoGarantia,
    EditarSubTipoGarantia,
    EliminarSubTipoGarantia,
    FrecuenciasAmortizacionComponent, 
    AgregarFrecuenciaAmortizacion,
    EditarFrecuenciaAmortizacion,
    EliminarFrecuenciaAmortizacion,
    EstadosPrestamosComponent, 
    AgregarEstadosPrestamos,
    EditarEstadosPrestamos,
    EliminarEstadosPrestamos,
    SubEstadosComponent, 
    AgregarSubEstados,
    EditarSubEstados,
    EliminarSubEstados,
    TrasladoEstadosPrestamosComponent,
    AgregarTrasladoEstPrestamo,
    EditarTrasladoEstPrestamo,
    EliminarTrasladoEstPrestamo
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    FormsModule, //preguntar
    HttpClientModule, //preguntar
  ],
  entryComponents: [ 
    EditarAlmacenadora,
    EliminarAlmacenadora,
    AgregarAlmacenadora,
    EditarAseguradora,
    EliminarAseguradora,
    AgregarAseguradora,
    EditarCredito, 
    EliminarCredito,
    AgregarCredito,
    EditarLugar, 
    EliminarLugar, 
    AgregarLugar,
    EditarUbicacion, 
    EliminarUbicacion, 
    AgregarUbicacion,
    EditarOrigenDeFondos, 
    EliminarOrigenDeFondos, 
    AgregarOrigenDeFondos,
    EditarFormasDePago, 
    EliminarFormasDePago, 
    AgregarFormasDePago,
    EditarDestino, 
    EliminarDestino, 
    AgregarDestino,
    EditarCategoriasSib, 
    EliminarCategoriasSib, 
    AgregarCategoriasSib,
    EditarEstatusGarantiasReales, 
    EliminarEstatusGarantiasReales, 
    AgregarEstatusGarantiasReales,
    EditarEstatusAvaluos, EliminarEstatusAvaluos, AgregarEstatusAvaluos, 
    AgregarIngenieroValuador, EditarIngenieroValuador, EliminarIngenieroValuador,
    AgregarNotarios, EditarNotarios, EliminarNotarios,
    AgregarMotivoAjuste, EditarMotivoAjuste, EliminarMotivoAjuste,
    AgregarDiaInhabil, EditarDiaInhabil, EliminarDiaInhabil,
    AgregarAsesoresDePrestamo, 
    EditarAsesoresDePrestamo, 
    EliminarAsesoresDePrestamo,
    AgregarTiposTransacciones,
    EditarTiposTransacciones,
    EliminarTiposTransacciones,
    AgregarGarantiasContables,
    EditarGarantiasContables,
    EliminarGarantiasContables,
    AgregarTiposSubtiposGR,
    EditarTiposSubtiposGR,
    EliminarTiposSubtiposGR,
    AgregarSubTipoGarantia,
    EditarSubTipoGarantia,
    EliminarSubTipoGarantia,
    AgregarFrecuenciaAmortizacion,
    EditarFrecuenciaAmortizacion,
    EliminarFrecuenciaAmortizacion,
    AgregarEstadosPrestamos,
    EditarEstadosPrestamos,
    EliminarEstadosPrestamos,
    AgregarSubEstados,
    EditarSubEstados,
    EliminarSubEstados,
    AgregarTrasladoEstPrestamo,
    EditarTrasladoEstPrestamo,
    EliminarTrasladoEstPrestamo
  ]
  ,
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
