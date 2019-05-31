import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tipos-y-subtipos-de-garantias-reales',
  templateUrl: './tipos-y-subtipos-de-garantias-reales.component.html',
  styleUrls: ['./tipos-y-subtipos-de-garantias-reales.component.scss']
})
export class TiposYSubtiposDeGarantiasRealesComponent implements OnInit {

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
