import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerNav = [
    {name: "Almacenadoras", route:"/almacenadoras"},
    {name: "Aseguradoras", route:"/aseguradoras"},
    {name: "Agrupación de créditos", route:"/agrupacion-de-creditos"},
    {name: "Lugares de inversión", route:"/lugares-de-inversion"},
    {name: "Ubicación de garantía", route:"/ubicacion-de-la-garantia"},
    {name: "Origen de los fondos", route:"/origen-de-los-fondos"},
    {name: "Formas de pago", route:"/formas-de-pago"},
    {name: "Destinos", route:"/destinos"},
    {name: "Categorías SIB", route:"/categorias-sib"},
    {name: "Estatus garantías reales", route:"/estatus-garantias-reales"},
    {name: "Estatus de avalúos", route:"/estatus-avaluos"},
    {name: "Ingenieros valuadores", route:"/ingenieros-valuadores"},
    {name: "Notarios", route:"/notarios"},
    {name: "Motivos de ajustes", route:"/motivos-ajustes"},
    {name: "Días inhábiles", route:"/dias-inhabiles"},
    {name: "Asesores de Prestamo", route:"/asesores-de-prestamos"},
    {name: "Cobros adicionales", route:""},
    {name: "Instituciones cobros adicionales", route:""},
    {name: "Motivos de reversa", route:""},
    {name: "Formas de desembolso", route:""},
    {name: "Motivos de referencias clientes", route:""},
    {name: "Relación transacciones depósitos", route:""},
    {name: "Medios de contacto", route:""},
    {name: "Canales de venta", route:""},
    {name: "Tipos de canales de distribución", route:""},
    {name: "Acercamientos", route:""},
    {name: "Asesores de préstamo", route:""},
    {name: "Bancos", route:""},
    {name: "Tipos de deducciones", route:""},
    {name: "Tipos de prestamos", route:""},
    {name: "Datos generales (Registro y Control)", route:""},
    {name: "Garantias contables", route:""},
    {name: "Tipos y subtipos de garantías reales", route:""},
    {name: "Frecuencias de amortización", route:""},
    {name: "Estados de préstamos", route:""},
    {name: "Parametrización de número de préstamos", route:""},
    {name: "Pasos del cierre", route:""},
    {name: "Archivos de limpieza", route:""},
    {name: "Limpieza de archivos", route:""},
    {name: "Productos", route:""},
    {name: "Consultas", route:""},
    {name: "Clasificación", route:""},
    {name: "Parámetros adicionales por producto", route:""},
    {name: "Eventos de solicitudes", route:""},
    {name: "Documentos a presentar por producto", route:""},
    {name: "Montos por plazo", route:""},
    {name: "Porcentajes de financiamiento", route:""},
    {name: "Rango de plazos por interés", route:""},
    {name: "Definir categorías de usuarios", route:""},
    {name: "Asignación de categorías", route:""},
    {name: "Copiar parámetros de productos", route:""},
    {name: "Estatus legales", route:""},
    {name: "Recargos Adicionales", route:"/recargos-adicionales"},
    {name: "Instituciones", route:"/instituciones"},
    {name: "Formas de desembolso", route:"/formas-de-desembolso"},
    {name: "Motivos de referencias clientes", route:"/motivos-de-referencias-clientes"},
    {name: "Motivos de reversa", route:"/motivos-de-reversa"}
  ]


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun =true;

  ngOnInit() {
  }

}
