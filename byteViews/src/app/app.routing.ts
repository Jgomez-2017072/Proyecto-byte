import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from '@angular/core';

//Components
import { HomeComponent } from './components/home/home.component';
import { DefinirCategoriasUsuariosComponent } from './components/definir-categorias-usuarios/definir-categorias-usuarios.component';
import { SubProductosComponent } from './components/sub-productos/sub-productos.component';
import { SubtipoGarantiaComponent } from './components/subtipo-garantia/subtipo-garantia.component';
import { SubEstadosComponent } from './components/sub-estados/sub-estados.component';
import { TrasladoEstadosPrestamosComponent } from './components/traslado-estados-prestamos/traslado-estados-prestamos.component';
import { MotivoCambioEjecutivoComponent } from './components/motivo-cambio-ejecutivo/motivo-cambio-ejecutivo.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'almacenadoras',
        loadChildren: './components/almacenadoras/almacenadoras.module#AlmacenadorasModule'
    },
    {
        path: 'aseguradoras',
        loadChildren: './components/aseguradoras/aseguradoras.module#AseguradorasModule'
    },
    {
        path: 'agrupacion-de-creditos',
        loadChildren: './components/agrupacion-de-creditos/agrupacion-de-creditos.module#AgrupacionDeCreditosModule'
    },
    {
        path: 'lugares-de-inversion',
        loadChildren: './components/lugares-de-inversion/lugares-de-inversion.module#LugaresDeInversionModule'
    },
    {
        path: 'ubicacion-de-la-garantia',
        loadChildren: './components/ubicacion-de-la-garantia/ubicacion-de-la-garantia.module#UbicacionDeLaGarantiaModule'
    },
    {
        path: 'origen-de-los-fondos',
        loadChildren: './components/origen-de-fondos/origen-de-fondos.module#OrigenDeFondosModule'
    },
    {
        path: 'formas-de-pago',
        loadChildren: './components/formas-de-pago/formas-de-pago.module#FormasDePagoModule'
    },
    {
        path: 'destinos',
        loadChildren: './components/destinos/destinos.module#DestinosModule'
    },
    {
        path: 'categorias-sib',
        loadChildren: './components/categorias-sib/categorias-sib.module#CategoriasSibModule'
    },
    {
        path: 'estatus-garantias-reales',
        loadChildren: './components/estatus-garantias-reales/estatus-garantias-reales.module#EstatusGarantiasRealesModule'
    },
    {
        path: 'estatus-avaluos',
        loadChildren: './components/estatus-avaluos/estatus-avaluos.module#EstatusAvaluosModule'
    },
    {
        path: 'ingenieros-valuadores',
        loadChildren: './components/ingenieros-valuadores/ingenieros-valuadores.module#IngenierosValuadoresModule'
    },
    {
        path: 'notarios',
        loadChildren: './components/notarios/notarios.module#NotariosModule'
    },
    {
        path: 'motivos-ajustes',
        loadChildren: './components/motivos-ajustes/motivos-ajustes.module#MotivosAjustesModule'
    },
    {
        path: 'dias-inhabiles',
        loadChildren: './components/dias-inhabiles/dias-inhabiles.module#DiasInhabilesModule'
    },
    {
        path: 'recargos-adicionales',
        loadChildren: './components/recargos-adicionales/recargos-adicionales.module#RecargosAdicionalesModule'
    },
    {
        path: 'instituciones',
        loadChildren: './components/instituciones/instituciones.module#InstitucionesModule'
    },
    {
        path: 'motivos-de-reversa',
        loadChildren: './components/motivos-de-reversa/motivos-de-reversa.module#MotivosDeReversaModule'
    },
    {
        path: 'formas-de-desembolso',
        loadChildren: './components/formas-de-desembolso/formas-de-desembolso.module#FormasDeDesembolsoModule'
    },
    {
        path: 'motivos-de-referencias-clientes',
        loadChildren: './components/motivos-de-referencias-clientes/motivos-de-referencias-clientes.module#MotivosDeReferenciasClientesModule'
    },
    {
        path: 'parametros-transaccion',
        loadChildren: './components/parametros-transaccion/parametros-transaccion.module#ParametrosTransaccionModule'
    },
    {
        path: 'medios-contacto',
        loadChildren: './components/medios-contacto/medios-contacto.module#MediosContactoModule'
    },
    {
        path: 'canales-venta',
        loadChildren: './components/canales-venta/canales-venta.module#CanalesVentaModule'
    },
    {
        path: 'canales-distribucion',
        loadChildren: './components/canal-distribucion/canal-distribucion.module#CanalDistribucionModule'
    },
    {
        path: 'acercamientos',
        loadChildren: './components/acercamiento/acercamiento.module#AcercamientoModule'
    },
    {
        path: 'asesores-de-prestamos',
        loadChildren: './components/asesores-de-prestamo/asesores-de-prestamo.module#AsesoresDePrestamoModule'
    },
    {
        path: 'bancos',
        loadChildren: './components/bancos/bancos.module#BancosModule'
    },
    {
        path: 'tipos-de-deducciones',
        loadChildren: './components/tipos-de-deducciones/tipos-de-deducciones.module#TiposDeDeduccionesModule'
    },
    {
        path: 'tipos-de-prestamos',
        loadChildren: './components/tipos-de-prestamos/tipos-de-prestamos.module#TiposDePrestamosModule'
    },
    {
        path: 'datos-generales',
        loadChildren: './components/datos-generales/datos-generales.module#DatosGeneralesModule'
    },
    {
        path: 'tipos-transaccion',
        loadChildren: './components/tipos-de-transaccion/tipos-de-transaccion.module#TiposDeTransaccionModule'
    },
    {
        path: 'garantias-contables',
        loadChildren: './components/garantias-contables/garantias-contables.module#GarantiasContablesModule'
    },
    {
        path: 'tipos-garantias',
        loadChildren: './components/tipos-subtipos-garantias-reales/tipos-subtipos-garantias-reales.module#TiposSubtiposGarantiasRealesModule'
    },
    {
        path: 'frecuencia-amortizacion',
        loadChildren: './components/frecuencia-amortizacion/frecuencia-amortizacion.module#FrecuenciaAmortizacionModule'
    },
    {
        path: 'estados-prestamos',
        loadChildren: './components/estados-prestamos/estados-prestamos.module#EstadosPrestamosModule'
    },
    {
        path: 'parametrizacion-de-numero-de-prestamos',
        loadChildren: './components/parametrizacion-de-numero-de-prestamos/parametrizacion-de-numero-de-prestamos.module#ParametrizacionDeNumeroDePrestamosModule'
    },
    {
        path: 'mantenimiento-apasos-del-cierre',
        loadChildren: './components/mantenimiento-apasos-del-cierre/mantenimiento-apasos-del-cierre.module#MantenimientoApasosDelCierreModule'
    },
    {
        path: 'archivos-de-limpieza',
        loadChildren: './components/archivos-de-limpieza/archivos-de-limpieza.module#ArchivosDeLimpiezaModule'
    },
    {
        path: 'limpia-archivos',
        loadChildren: './components/limpia-archivos/limpia-archivos.module#LimpiaArchivosModule'
    },
    {
        path: 'productos',
        loadChildren: './components/productos/productos.module#ProductosModule'
    },
    {
        path: 'consultas',
        loadChildren: './components/consultas/consultas.module#ConsultasModule'
    },
    {
        path: 'clasificacion',
        loadChildren: './components/clasificacion/clasificacion.module#ClasificacionModule'
    },
    {
        path: 'parametros-adicionales',
        loadChildren: './components/parametros-adicionales-producto/parametros-adicionales-producto.module#ParametrosAdicionalesProductoModule'
    },

    { path: 'definir-categorias-usuarios', component: DefinirCategoriasUsuariosComponent },

    {
        path: 'asignacion-de-categorias',
        loadChildren: './components/asignacion-de-categorias/asignacion-de-categorias.module#AsignacionDeCategoriasModule'
    },
    {
        path: 'parametros-de-productos',
        loadChildren: './components/parametros-de-productos/parametros-de-productos.module#ParametrosDeProductosModule'
    },
    {
        path: 'status-legales',
        loadChildren: './components/status-legales/status-legales.module#StatusLegalesModule'
    },



    {
        path: 'enlace-contabilidad',
        loadChildren: './components/enlace-contabilidad/enlace-contabilidad.module#EnlaceContabilidadModule'
    },
    {
        path: 'niveles-contabilizacion',
        loadChildren: './components/niveles-contabilizacion/niveles-contabilizacion.module#NivelesContabilizacionModule'
    },
    {
        path: 'contenido-contable',
        loadChildren: './components/contenidos-contables/contenidos-contables.module#ContenidosContablesModule'
    },



    { path: 'sub-productos', component: SubProductosComponent },
    { path: 'subtipos-garantias', component: SubtipoGarantiaComponent },
    { path: 'sub-estados', component: SubEstadosComponent },
    { path: 'traslado-estados-prest', component: TrasladoEstadosPrestamosComponent },

    //Rutas Raul
    {
        path: 'motivo-cambio-ejecutivo',
        loadChildren: './components/motivo-cambio-ejecutivo/motivo-cambio-ejecutivo.module#MotivoCambioEjecutivoModule'
    },
    {
        path: 'poder',
        loadChildren: './components/poder/poder.module#PoderModule'
    },
    {
        path: 'estado-resolucion',
        loadChildren: './components/estado-resolucion/estado-resolucion.module#EstadoResolucionModule'
    },
    {
        path: 'tipo-ajuste',
        loadChildren: './components/tipo-ajuste/tipo-ajuste.module#TipoAjusteModule'
    }
];

/*@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
      }
    )],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }*/


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)