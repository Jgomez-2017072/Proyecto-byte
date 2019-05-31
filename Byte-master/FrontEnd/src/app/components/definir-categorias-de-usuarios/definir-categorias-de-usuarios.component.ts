import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-definir-categorias-de-usuarios',
  templateUrl: './definir-categorias-de-usuarios.component.html',
  styleUrls: ['./definir-categorias-de-usuarios.component.scss']
})
export class DefinirCategoriasDeUsuariosComponent implements OnInit {

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
