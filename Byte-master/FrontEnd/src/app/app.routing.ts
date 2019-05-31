import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"

//COMPONENTS
import { HomeComponent } from "./components/home/home.component";
import { AlmacenadorasComponent } from "./components/almacenadoras/almacenadoras.component";
import { AseguradorasComponent } from "./components/aseguradoras/aseguradoras.component";
import { AgrupacionDeCreditosComponent } from "./components/agrupacion-de-creditos/agrupacion-de-creditos.component";
import { LugaresDeInversionComponent} from "./components/lugares-de-inversion/lugares-de-inversion.component";
import { UbicacionDeLaGarantiaComponent } from "./components/ubicacion-de-la-garantia/ubicacion-de-la-garantia.component";
import { OrigenDeLosFondosComponent } from "./components/origen-de-los-fondos/origen-de-los-fondos.component";
import { FormasDePagoComponent } from "./components/formas-de-pago/formas-de-pago.component";
import { DestinosComponent } from "./components/destinos/destinos.component";
import { CategoriasSIBComponent } from "./components/categorias-sib/categorias-sib.component";
import { EstatusGarantiasRealesComponent } from "./components/estatus-garantias-reales/estatus-garantias-reales.component";
import { EstatusDeAvaluosComponent } from "./components/estatus-de-avaluos/estatus-de-avaluos.component";
import { IngenierosValuadoresComponent } from "./components/ingenieros-valuadores/ingenieros-valuadores.component";
import { NotariosComponent } from "./components/notarios/notarios.component";
import { MotivosDeAjustesComponent } from "./components/motivos-de-ajustes/motivos-de-ajustes.component";
import { DiasInhabilesComponent } from "./components/dias-inhabiles/dias-inhabiles.component";
import { CobrosAdicionalesComponent } from "./components/cobros-adicionales/cobros-adicionales.component";
import { InstitucionesCobrosAdicionalesComponent } from "./components/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component";
import { FormasDeDesembolsoComponent } from "./components/formas-de-desembolso/formas-de-desembolso.component";
import { MotivosDeReferenciasClientesComponent } from "./components/motivos-de-referencias-clientes/motivos-de-referencias-clientes.component";
import { RelacionTransaccionesDepositosComponent } from "./components/relacion-transacciones-depositos/relacion-transacciones-depositos.component";
import { MediosDeContactoComponent } from "./components/medios-de-contacto/medios-de-contacto.component";
import { CanalesDeVentaComponent } from "./components/canales-de-venta/canales-de-venta.component";
import { TiposDeCanalesDeDistribucionComponent } from "./components/tipos-de-canales-de-distribucion/tipos-de-canales-de-distribucion.component";
import { AcercamientosComponent } from "./components/acercamientos/acercamientos.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MotivosDeReversaComponent } from './components/motivos-de-reversa/motivos-de-reversa.component';
import { AsesoresDePrestamoComponent } from './components/asesores-de-prestamo/asesores-de-prestamo.component'
import { BancosComponent } from './components/bancos/bancos.component';
import { TiposDeDeduccionesComponent } from './components/tipos-de-deducciones/tipos-de-deducciones.component';
import { TiposDePrestamosComponent } from './components/tipos-de-prestamos/tipos-de-prestamos.component';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { TiposDeTransaccionComponent } from './components/tipos-de-transaccion/tipos-de-transaccion.component';
import { GarantiasContablesComponent } from './components/garantias-contables/garantias-contables.component';
import { TiposYSubtiposDeGarantiasRealesComponent } from './components/tipos-y-subtipos-de-garantias-reales/tipos-y-subtipos-de-garantias-reales.component'; 
import { FrecuenciasDeAmortizacionComponent } from './components/frecuencias-de-amortizacion/frecuencias-de-amortizacion.component';
import { EstadosDePrestamosComponent } from './components/estados-de-prestamos/estados-de-prestamos.component';
import { ParametrizacionDeNumeroDePrestamosComponent } from './components/parametrizacion-de-numero-de-prestamos/parametrizacion-de-numero-de-prestamos.component';
import { PasosDelCierreComponent } from './components/pasos-del-cierre/pasos-del-cierre.component';
import { ArchivosDeLimpiezaComponent } from './components/archivos-de-limpieza/archivos-de-limpieza.component';
import { LimpiezaDeArchivosComponent } from './components/limpieza-de-archivos/limpieza-de-archivos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { ParametrosAdicionalesPorProductoComponent } from './components/parametros-adicionales-por-producto/parametros-adicionales-por-producto.component';
import { EventosDeSolicitudesComponent } from './components/eventos-de-solicitudes/eventos-de-solicitudes.component';
import { DocumentosAPresentarPorProductoComponent } from './components/documentos-a-presentar-por-producto/documentos-a-presentar-por-producto.component';
import { MontosPorPlazoComponent } from './components/montos-por-plazo/montos-por-plazo.component';
import { PorcentajesDeFinanciamientoComponent } from './components/porcentajes-de-financiamiento/porcentajes-de-financiamiento.component';
import { RangoDePlazasPorInteresComponent } from './components/rango-de-plazas-por-interes/rango-de-plazas-por-interes.component';
import { DefinirCategoriasDeUsuariosComponent } from './components/definir-categorias-de-usuarios/definir-categorias-de-usuarios.component';
import { AsignacionDeCategoriasComponent } from './components/asignacion-de-categorias/asignacion-de-categorias.component';
import { CopiarParametrosDeProductosComponent } from './components/copiar-parametros-de-productos/copiar-parametros-de-productos.component';
import { EstatusLegalesComponent } from './components/estatus-legales/estatus-legales.component';
import { EnlaceContabilidadComponent } from './components/enlace-contabilidad/enlace-contabilidad.component';
import { NivelesDeContabilizacionComponent } from './components/niveles-de-contabilizacion/niveles-de-contabilizacion.component';
import { ContenidosContablesComponent } from './components/contenidos-contables/contenidos-contables.component';
import { MantenimientoAContabilizacionComponent } from './components/mantenimiento-a-contabilizacion/mantenimiento-a-contabilizacion.component';

const appRoutes: Routes = [
    {path: '', component: AlmacenadorasComponent},
    {path: '', redirectTo: 'almacenadoras', pathMatch: 'full'},
    {path: 'almacenadoras', component: AlmacenadorasComponent},
    {path: 'aseguradoras', component: AseguradorasComponent},
    {path: 'agrupacion-de-creditos', component: AgrupacionDeCreditosComponent},
    {path: 'lugares-de-inversion', component: LugaresDeInversionComponent},
    {path: 'ubicacion-de-la-garantia', component: UbicacionDeLaGarantiaComponent},
    {path: 'origen-de-los-fondos', component: OrigenDeLosFondosComponent},
    {path: 'formas-de-pago', component: FormasDePagoComponent},
    {path: 'destinos', component: DestinosComponent},
    {path: 'categorias-sib', component: CategoriasSIBComponent},
    {path: 'estatus-garantias-reales', component: EstatusGarantiasRealesComponent},
    {path: 'estatus-de-avaluos', component: EstatusDeAvaluosComponent},
    {path: 'ingenieros-valuadores', component: IngenierosValuadoresComponent},
    {path: 'notarios', component: NotariosComponent},
    {path: 'motivos-de-ajustes', component: MotivosDeAjustesComponent},
    {path: 'dias-inhabiles', component: DiasInhabilesComponent},
    {path: 'cobros-adicionales', component: CobrosAdicionalesComponent},
    {path: 'instituciones-cobros-adicionales', component: InstitucionesCobrosAdicionalesComponent},
    {path: 'motivos-de-reversa', component: MotivosDeReversaComponent},
    {path: 'formas-de-desembolso', component: FormasDeDesembolsoComponent},
    {path: 'motivos-de-referencias-clientes', component: MotivosDeReferenciasClientesComponent},
    {path: 'relacion-transacciones-depositos', component: RelacionTransaccionesDepositosComponent},
    {path: 'medios-de-contacto', component: MediosDeContactoComponent},
    {path: 'canales-de-venta', component: CanalesDeVentaComponent},
    {path: 'tipos-de-canales-de-distribucion', component: TiposDeCanalesDeDistribucionComponent},
    {path: 'acercamientos', component: AcercamientosComponent},
    {path: 'sidebar', component: SidebarComponent},
    {path: 'asesores-de-prestamo', component: AsesoresDePrestamoComponent},
    {path: 'bancos', component: BancosComponent},
    {path: 'tipos-de-deducciones', component: TiposDeDeduccionesComponent},
    {path: 'tipos-de-prestamos', component: TiposDePrestamosComponent},
    {path: 'datos-generales', component: DatosGeneralesComponent},
    {path: 'tipos-de-transaccion', component: TiposDeTransaccionComponent},
    {path: 'garantias-contables', component: GarantiasContablesComponent},
    {path: 'tipos-y-subtipos-de-garantias-reales', component: TiposYSubtiposDeGarantiasRealesComponent},
    {path: 'frecuencias-de-amortizacion',component: FrecuenciasDeAmortizacionComponent},
    {path: 'estados-de-prestamos', component: EstadosDePrestamosComponent},
    {path: 'parametrizacion-de-numero-de-prestamos', component: ParametrizacionDeNumeroDePrestamosComponent},
    {path: 'pasos-del-cierre',component: PasosDelCierreComponent},
    {path: 'archivos-de-limpieza', component: ArchivosDeLimpiezaComponent},
    {path: 'limpieza-de-archivos', component: LimpiezaDeArchivosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'consultas', component: ConsultasComponent},
    {path: 'clasificacion', component: ClasificacionComponent},
    {path: 'parametros-adicionales-por-producto', component: ParametrosAdicionalesPorProductoComponent},
    {path: 'eventos-de-solicitudes',component: EventosDeSolicitudesComponent},
    {path: 'documentos-a-presentar-por-producto', component: DocumentosAPresentarPorProductoComponent},
    {path: 'montos-por-plazo', component: MontosPorPlazoComponent},
    {path: 'porcentajes-de-financiamiento',component: PorcentajesDeFinanciamientoComponent},
    {path: 'rango-de-plazas-por-interes', component: RangoDePlazasPorInteresComponent},
    {path: 'definir-categorias-de-usuarios', component: DefinirCategoriasDeUsuariosComponent},
    {path: 'asignacion-de-categorias', component: AsignacionDeCategoriasComponent},
    {path: 'copiar-parametros-de-productos', component: CopiarParametrosDeProductosComponent},
    {path: 'estatus-legales', component: EstatusLegalesComponent},
    {path: 'enlace-contabilidad', component: EnlaceContabilidadComponent},
    {path: 'niveles-de-contabilizacion', component: NivelesDeContabilizacionComponent},
    {path: 'contenidos-contables', component: ContenidosContablesComponent},
    {path: 'mantenimiento-a-contabilizacion', component: MantenimientoAContabilizacionComponent},
    {path: '**', component: AlmacenadorasComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes)