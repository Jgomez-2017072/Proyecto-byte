import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { HomeComponent } from './components/home/home.component';
import { AlmacenadorasComponent } from './components/almacenadoras/almacenadoras.component';
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { AgrupacionDeCreditosComponent } from './components/agrupacion-de-creditos/agrupacion-de-creditos.component';
import { LugaresDeInversionComponent } from './components/lugares-de-inversion/lugares-de-inversion.component';
import { UbicacionDeLaGarantiaComponent } from './components/ubicacion-de-la-garantia/ubicacion-de-la-garantia.component';
import { OrigenDeFondosComponent } from './components/origen-de-fondos/origen-de-fondos.component';
import { FormasDePagoComponent } from './components/formas-de-pago/formas-de-pago.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { CategoriasSibComponent } from './components/categorias-sib/categorias-sib.component';
import { EstatusGarantiasRealesComponent } from './components/estatus-garantias-reales/estatus-garantias-reales.component';
import { EstatusAvaluosComponent } from './components/estatus-avaluos/estatus-avaluos.component';
import { IngenierosValuadoresComponent } from './components/ingenieros-valuadores/ingenieros-valuadores.component';
import { NotariosComponent } from './components/notarios/notarios.component';
import { DiasInhabilesComponent } from './components/dias-inhabiles/dias-inhabiles.component';
import { MotivosAjustesComponent } from './components/motivos-ajustes/motivos-ajustes.component';
import { AsesoresDePrestamoComponent } from './components/asesores-de-prestamo/asesores-de-prestamo.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { ParametrosAdicionalesProductoComponent } from './components/parametros-adicionales-producto/parametros-adicionales-producto.component';
import { EventosSolicitudesComponent } from './components/eventos-solicitudes/eventos-solicitudes.component';
import { DocumentosPresentarProductoComponent } from './components/documentos-presentar-producto/documentos-presentar-producto.component';
import { MontosPorPlazoComponent } from './components/montos-por-plazo/montos-por-plazo.component';
import { PorcentajesDeFinanciamientoComponent } from './components/porcentajes-de-financiamiento/porcentajes-de-financiamiento.component';
import { RangoPlazosInteresComponent } from './components/rango-plazos-interes/rango-plazos-interes.component';
import { DefinirCategoriasUsuariosComponent } from './components/definir-categorias-usuarios/definir-categorias-usuarios.component';
import {ParametrosTransaccionComponent} from './components/parametros-transaccion/parametros-transaccion.component'
import { MediosContactoComponent } from './components/medios-contacto/medios-contacto.component'
import { CanalesVentaComponent } from './components/canales-venta/canales-venta.component';
import { CanalDistribucionComponent } from './components/canal-distribucion/canal-distribucion.component';
import { AcercamientoComponent } from './components/acercamiento/acercamiento.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SubProductosComponent } from './components/sub-productos/sub-productos.component';
import { TiposDeTransaccionComponent } from './components/tipos-de-transaccion/tipos-de-transaccion.component';
import { GarantiasContablesComponent } from './components/garantias-contables/garantias-contables.component';
import { TiposSubtiposGarantiasRealesComponent } from './components/tipos-subtipos-garantias-reales/tipos-subtipos-garantias-reales.component';
import { SubtipoGarantiaComponent } from './components/subtipo-garantia/subtipo-garantia.component';
import { FrecuenciasAmortizacionComponent } from './components/frecuencia-amortizacion/frecuencias-amortizacion.component';
import { EstadosPrestamosComponent } from './components/estados-prestamos/estados-prestamos.component';
import { SubEstadosComponent } from './components/sub-estados/sub-estados.component';
import { TrasladoEstadosPrestamosComponent } from './components/traslado-estados-prestamos/traslado-estados-prestamos.component';
import { NivelesContabilizacionComponent } from './components/niveles-contabilizacion/niveles-contabilizacion.component';

const appRoutes : Routes = [
    {path : '', component : HomeComponent},
    {path : '', redirectTo: 'home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'almacenadoras', component : AlmacenadorasComponent},
    {path : 'aseguradoras', component : AseguradorasComponent},
    {path : 'agrupacion-de-creditos', component : AgrupacionDeCreditosComponent},
    {path : 'lugares-de-inversion', component : LugaresDeInversionComponent},
    {path : 'ubicacion-de-la-garantia', component : UbicacionDeLaGarantiaComponent},
    {path : 'origen-de-los-fondos', component : OrigenDeFondosComponent},
    {path : 'formas-de-pago', component : FormasDePagoComponent},
    {path : 'destinos', component : DestinosComponent},
    {path : 'categorias-sib', component : CategoriasSibComponent},
    {path : 'estatus-garantias-reales', component : EstatusGarantiasRealesComponent},
    {path : 'estatus-avaluos', component : EstatusAvaluosComponent},
    {path : 'ingenieros-valuadores', component : IngenierosValuadoresComponent},
    {path : 'notarios', component : NotariosComponent},
    {path : 'motivos-ajustes', component : MotivosAjustesComponent},
    {path : 'dias-inhabiles', component : DiasInhabilesComponent},
    {path : 'asesores-de-prestamos', component : AsesoresDePrestamoComponent},
    {path : 'consultas', component : ConsultasComponent},
    {path : 'clasificacion', component : ClasificacionComponent},
    {path : 'parametros-adicionales', component : ParametrosAdicionalesProductoComponent},
    {path : 'evento-solicitudes', component : EventosSolicitudesComponent},
    {path : 'documento-presentar-producto', component : DocumentosPresentarProductoComponent},
    {path : 'montos-por-plazo', component : MontosPorPlazoComponent},
    {path : 'porcentajes-de-financiamiento', component : PorcentajesDeFinanciamientoComponent},
    {path : 'rango-plazo-interes', component : RangoPlazosInteresComponent},
    {path : 'definir-categorias-usuarios', component : DefinirCategoriasUsuariosComponent},
    {path: 'parametros-transaccion', component: ParametrosTransaccionComponent},
    {path: 'medios-contacto', component: MediosContactoComponent},
    {path: 'canales-venta', component: CanalesVentaComponent},
    {path: 'canales-distribucion', component: CanalDistribucionComponent},
    {path: 'acercamientos', component: AcercamientoComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'sub-productos', component: SubProductosComponent},
    {path : 'tipos-transaccion', component : TiposDeTransaccionComponent},
    {path : 'garantias-contables', component : GarantiasContablesComponent},
    {path : 'tipos-garantias', component : TiposSubtiposGarantiasRealesComponent},
    {path : 'subtipos-garantias', component : SubtipoGarantiaComponent},
    {path : 'frecuencia-amortizacion', component : FrecuenciasAmortizacionComponent},    
    {path : 'estados-prestamos', component : EstadosPrestamosComponent},
    {path : 'sub-estados', component : SubEstadosComponent},
    {path : 'traslado-estados-prest', component : TrasladoEstadosPrestamosComponent},
    {path : 'niveles-contabilizacion', component : NivelesContabilizacionComponent}
    
]

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes)