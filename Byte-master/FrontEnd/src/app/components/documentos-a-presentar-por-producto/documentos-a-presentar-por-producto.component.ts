import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-documentos-a-presentar-por-producto',
  templateUrl: './documentos-a-presentar-por-producto.component.html',
  styleUrls: ['./documentos-a-presentar-por-producto.component.scss']
})
export class DocumentosAPresentarPorProductoComponent implements OnInit {

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
