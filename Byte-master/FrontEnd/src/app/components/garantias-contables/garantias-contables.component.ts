import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-garantias-contables',
  templateUrl: './garantias-contables.component.html',
  styleUrls: ['./garantias-contables.component.scss']
})
export class GarantiasContablesComponent implements OnInit {

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
