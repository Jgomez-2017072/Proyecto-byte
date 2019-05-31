import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-parametros-adicionales-por-producto',
  templateUrl: './parametros-adicionales-por-producto.component.html',
  styleUrls: ['./parametros-adicionales-por-producto.component.scss']
})
export class ParametrosAdicionalesPorProductoComponent implements OnInit {

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
