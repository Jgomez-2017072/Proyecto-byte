import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-parametrizacion-de-numero-de-prestamos',
  templateUrl: './parametrizacion-de-numero-de-prestamos.component.html',
  styleUrls: ['./parametrizacion-de-numero-de-prestamos.component.scss']
})
export class ParametrizacionDeNumeroDePrestamosComponent implements OnInit {

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
