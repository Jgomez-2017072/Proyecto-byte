import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    
  }


  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

    mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav2 = [
    {name: 'Enlace Contabilidad', route: '/enlace-contabilidad'},
    {name: 'Niveles de contabilizacion', route: '/niveles-contabilizacion'},
    {name: 'Contenidos Contables', route: '/contenido-contable'}    
  ]

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
    {name: "Recargos Adicionales", route:"/recargos-adicionales"},
    {name: "Instituciones", route:"/instituciones"},
    {name: "Motivos de reversa", route:"/motivos-de-reversa"},    
    {name: "Formas de desembolso", route:"/formas-de-desembolso"},
    {name: "Motivos de referencias clientes", route:"/motivos-de-referencias-clientes"},
    {name: 'Parametros de Transaccion', route:"/parametros-transaccion"},
    {name: "Medios de contacto", route:"/medios-contacto"},
    {name: "Canales de venta", route:"/canales-venta"},
    {name: "Tipos de canales de distribución", route:"/canales-distribucion"},
    {name: "Acercamientos", route:"/acercamientos"},
    {name: "Asesores de Prestamo", route:"/asesores-de-prestamos"},
    {name: "Bancos", route:"/bancos"},
    {name: "Tipos de deducciones", route:"/tipos-de-deducciones"},
    {name: "Tipos de prestamos", route:"/tipos-de-prestamos"},
    {name: "Datos generales (Registro y Control)", route:"/datos-generales"},    
    {name: "Tipos de transacción", route:"/tipos-transaccion"},
    {name: "Garantías Contables", route:"/garantias-contables"},
    {name: "Tipos de garantias reales", route:"/tipos-garantias"},
    {name: "Frecuencia de amortización", route:"/frecuencia-amortizacion"},
    {name: "Estados Préstamos", route:"/estados-prestamos"},
    {name: "Parametrización de número de préstamos", route:"/parametrizacion-de-numero-de-prestamos"},
    {name: "Mantenimiento a pasos del cierre", route:"/mantenimiento-apasos-del-cierre"},
    {name: "Archivos de Limpieza", route:"/archivos-de-limpieza"},
    {name: "Limpieza de archivos", route:"/limpia-archivos"},
    {name: "Productos", route:"/productos"},
    {name: "Consultas", route:"/consultas"},
    {name: "Clasificación", route:"/clasificacion"},
    {name: "Parámetros adicionales por producto", route:"/parametros-adicionales"},
    {name: "Eventos de solicitudes", route:"/evento-solicitudes"},
    {name: "Documentos a presentar por producto", route:"/documento-presentar-producto"},
    {name: "Montos por plazo", route:"/montos-por-plazo"},
    {name: "Porcentajes de financiamiento", route:"/porcentajes-de-financiamiento"},
    {name: "Rango de plazos por interés", route:"/rango-plazo-interes"},
    {name: "Definir categorías de usuarios", route:"/definir-categorias-usuarios"},
    {name: "Asignación de categorías", route:"/asignacion-de-categorias"},
    {name: "Parametro de Productos", route:"/parametros-de-productos"},
    {name: "Estatus legales", route:"/status-legales"},    
    {name: 'SubProductos', route: '/sub-productos'},
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

}
