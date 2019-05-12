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
import { RecargosAdicionalesComponent, EliminarRecargos, EditarRecargos, AgregarRecargos  } from './components/recargos-adicionales/recargos-adicionales.component';
import { InstitucionesComponent, EliminarInstituciones, EditarInstituciones, AgregarInstituciones, AgregarMaestros } from './components/instituciones/instituciones.component';
import { FormasDeDesembolsoComponent, EliminarFormasDeDesembolso, EditarFormasDeDesembolso, AgregarFormasDeDesembolso  } from "./components/formas-de-desembolso/formas-de-desembolso.component";
import { MotivosDeReferenciasClientesComponent, EliminarMotivosDeReferenciasClientes, EditarMotivosDeReferenciasClientes, AgregarMotivosDeReferenciasClientes } from './components/motivos-de-referencias-clientes/motivos-de-referencias-clientes.component';
import { MotivosDeReversaComponent, EliminarMotivosDeReversa, EditarMotivosDeReversa, AgregarMotivosDeReversa } from './components/motivos-de-reversa/motivos-de-reversa.component';
import { MatSelect, MatSelectModule } from '@angular/material';
import { ParametrizacionDeNumeroDePrestamosComponent, EliminarParametrizacionDeNumeroDePrestamos, EditarParametrizacionDeNumeroDePrestamos, AgregarParametrizacionDeNumeroDePrestamos } from './components/parametrizacion-de-numero-de-prestamos/parametrizacion-de-numero-de-prestamos.component';
import { MantenimientoAPasosDelCierreComponent, EliminarMantenimientoAPasosDelCierre, EditarMantenimientoAPasosDelCierre, AgregarMantenimientoAPasosDelCierre } from './components/mantenimiento-apasos-del-cierre/mantenimiento-apasos-del-cierre.component';
import { ArchivosDeLimpiezaComponent, EliminarArchivosDeLimpieza, EditarArchivosDeLimpieza, AgregarArchivosDeLimpieza } from './components/archivos-de-limpieza/archivos-de-limpieza.component';
import { LimpiaArchivosComponent, Opciones , LimpiezaSeleccionada } from "./components/limpia-archivos/limpia-archivos.component";
import { ContenidosContablesComponent, EliminarContenidosContables, EditarContenidosContables, AgregarContenidosContables } from './components/contenidos-contables/contenidos-contables.component';


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
    RecargosAdicionalesComponent, AgregarRecargos, EliminarRecargos, EditarRecargos, 
    InstitucionesComponent, EliminarInstituciones, EditarInstituciones, AgregarInstituciones, AgregarMaestros,
    FormasDeDesembolsoComponent, EliminarFormasDeDesembolso, EditarFormasDeDesembolso, AgregarFormasDeDesembolso, MotivosDeReferenciasClientesComponent,
    MotivosDeReferenciasClientesComponent, EliminarMotivosDeReferenciasClientes, EditarMotivosDeReferenciasClientes, AgregarMotivosDeReferenciasClientes, MotivosDeReversaComponent,
    MotivosDeReversaComponent, EliminarMotivosDeReversa, EditarMotivosDeReversa, AgregarMotivosDeReversa, ParametrizacionDeNumeroDePrestamosComponent,
    ParametrizacionDeNumeroDePrestamosComponent, EliminarParametrizacionDeNumeroDePrestamos, EditarParametrizacionDeNumeroDePrestamos, AgregarParametrizacionDeNumeroDePrestamos, MantenimientoAPasosDelCierreComponent,
    MantenimientoAPasosDelCierreComponent, EliminarMantenimientoAPasosDelCierre, EditarMantenimientoAPasosDelCierre, AgregarMantenimientoAPasosDelCierre, ArchivosDeLimpiezaComponent,
    ArchivosDeLimpiezaComponent, EliminarArchivosDeLimpieza, EditarArchivosDeLimpieza, AgregarArchivosDeLimpieza, 
    LimpiaArchivosComponent, Opciones, LimpiezaSeleccionada, 
    ContenidosContablesComponent, EliminarContenidosContables, EditarContenidosContables, AgregarContenidosContables

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSelectModule,
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
    AgregarRecargos, EliminarRecargos, EditarRecargos,
    EliminarInstituciones, EditarInstituciones, AgregarInstituciones, AgregarMaestros,
    EliminarFormasDeDesembolso, EditarFormasDeDesembolso, AgregarFormasDeDesembolso,
    EliminarMotivosDeReferenciasClientes, EditarMotivosDeReferenciasClientes, AgregarMotivosDeReferenciasClientes,
    EliminarMotivosDeReversa, EditarMotivosDeReversa, AgregarMotivosDeReversa,
    EliminarParametrizacionDeNumeroDePrestamos, EditarParametrizacionDeNumeroDePrestamos, AgregarParametrizacionDeNumeroDePrestamos,
    EliminarMantenimientoAPasosDelCierre, EditarMantenimientoAPasosDelCierre, AgregarMantenimientoAPasosDelCierre,
    EliminarArchivosDeLimpieza, EditarArchivosDeLimpieza, AgregarArchivosDeLimpieza, 
    LimpiaArchivosComponent, Opciones, LimpiezaSeleccionada,
    EliminarContenidosContables, EditarContenidosContables, AgregarContenidosContables

  ]
  ,
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
