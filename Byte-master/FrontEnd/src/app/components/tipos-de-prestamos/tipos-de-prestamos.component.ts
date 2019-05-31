import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tipos-de-prestamos',
  templateUrl: './tipos-de-prestamos.component.html',
  styleUrls: ['./tipos-de-prestamos.component.scss']
})
export class TiposDePrestamosComponent implements OnInit {

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
