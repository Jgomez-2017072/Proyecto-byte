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
import { RecargosAdicionalesComponent } from './components/recargos-adicionales/recargos-adicionales.component';
import { InstitucionesComponent } from './components/instituciones/instituciones.component';
import { FormasDeDesembolsoComponent } from './components/formas-de-desembolso/formas-de-desembolso.component';
import { MotivosDeReferenciasClientesComponent } from './components/motivos-de-referencias-clientes/motivos-de-referencias-clientes.component';
import { MotivosDeReversaComponent } from './components/motivos-de-reversa/motivos-de-reversa.component';
import { ParametrizacionDeNumeroDePrestamosComponent } from './components/parametrizacion-de-numero-de-prestamos/parametrizacion-de-numero-de-prestamos.component';
import { MantenimientoAPasosDelCierreComponent } from './components/mantenimiento-apasos-del-cierre/mantenimiento-apasos-del-cierre.component';
import { ArchivosDeLimpiezaComponent } from './components/archivos-de-limpieza/archivos-de-limpieza.component';
import { LimpiaArchivosComponent } from './components/limpia-archivos/limpia-archivos.component';


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
    {path : 'recargos-adicionales', component : RecargosAdicionalesComponent},
    {path : 'instituciones', component : InstitucionesComponent},
    {path : 'formas-de-desembolso', component : FormasDeDesembolsoComponent},
    {path : 'motivos-de-referencias-clientes', component : MotivosDeReferenciasClientesComponent},
    {path : 'motivos-de-reversa', component : MotivosDeReversaComponent},
    {path : 'parametrizacion-de-numero-de-prestamos', component : ParametrizacionDeNumeroDePrestamosComponent},
    {path : 'mantenimiento-apasos-del-cierre', component : MantenimientoAPasosDelCierreComponent},
    {path : 'archivos-de-limpieza', component : ArchivosDeLimpiezaComponent},
    {path : 'limpia-archivos', component : LimpiaArchivosComponent}
    
]

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes)