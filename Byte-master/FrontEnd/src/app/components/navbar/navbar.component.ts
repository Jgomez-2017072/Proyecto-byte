import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
