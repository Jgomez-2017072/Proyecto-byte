import { Component, OnInit } from '@angular/core';
declare var $:any;
import $ from "jquery";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.getElementById('notFound').style.display = 'none';
    $(document).ready(function(){
      $('#buscador').keyup(function(){
         var mantenimientos = $('.mantenimiento');
         var buscando = $(this).val();
         var item='';
         for( var i = 0; i < mantenimientos.length; i++ ){
             item = $(mantenimientos[i]).html().toLowerCase();
              for(var x = 0; x < item.length; x++ ){
                  if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){

                    $(mantenimientos[i]).parents('#item').show(); 
                
                  }else{
                    $(mantenimientos[i]).parents('#item').hide();  
                  }
              }
         }
      });
    });



    $(document).ready(function(){
      resizeDiv();
      });
      
      window.onresize = function(event) {
      resizeDiv();
      }
      
      function resizeDiv() {
      var vph = $(window).height();
      $("#sidebar").css({"height": (vph + 200) + "px"});
      }


  }
}

  


