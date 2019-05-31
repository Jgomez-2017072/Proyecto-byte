import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-mantenimiento-a-contabilizacion',
  templateUrl: './mantenimiento-a-contabilizacion.component.html',
  styleUrls: ['./mantenimiento-a-contabilizacion.component.scss']
})
export class MantenimientoAContabilizacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  moverSidebar(){
    function activarSidebar(){
      if(!($('#sidebar').toggleClass('active'))){
        $('#sidebar').toggleClass('active');
      }else{
        $('#sidebar').toggleClass('');
      }
    }

    $(document).ready(function () {
      $('#sidebarCollapse').one('click', activarSidebar());
    });
  }

}
