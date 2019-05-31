import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-limpieza-de-archivos',
  templateUrl: './limpieza-de-archivos.component.html',
  styleUrls: ['./limpieza-de-archivos.component.scss']
})
export class LimpiezaDeArchivosComponent implements OnInit {

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
