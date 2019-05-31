import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { AseguradoraService } from 'src/app/services/aseguradora.service';
import { Aseguradora } from 'src/app/models/aseguradora.model';
import { GLOBAL } from 'src/app/services/global.service';

@Component({
  selector: 'app-aseguradoras',
  templateUrl: './aseguradoras.component.html',
  styleUrls: ['./aseguradoras.component.scss'],
  providers: [AseguradoraService]
})
export class AseguradorasComponent implements OnInit {

  @ViewChild('nuevaAseguradora') formValuesNuevaAseguradora;

  public url;
  public identity;
  public token;
  public status: string;

  public aseguradoras: Aseguradora;
  public aseguradorasModel: Aseguradora;

  constructor(
    private _aseguradoraService: AseguradoraService
  ) {
    this.url = GLOBAL.url;
    this.aseguradorasModel = new Aseguradora(
      0,
      0,
      "",
      "",
      "",
      true
    );
  }

  ngOnInit() {

    this.listarAseguradoras();
    this.limpiarForm();


    
    $("#barraBusqueda").keyup(function(){
      var _this = this;
     $.each($("#tabla tbody tr"), function() {
         if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
             $(this).hide();
         else
             $(this).show();
     });
 });


 
 var table = '#tabla'
 $('#maxRows').on('change', function(){
     $('.pagination').html('')
     var trnum = 0
     var maxRows = parseInt($(this).val())
     var totalRows = $(table+' tbody tr').length
     $(table+' tr:gt(0)').each(function(){
         trnum++
         if(trnum > maxRows){
             $(this).hide()
         }
         if(trnum <= maxRows){
             $(this).show()
         }
     })
     if(totalRows > maxRows){
         var pagenum = Math.ceil(totalRows/maxRows)
         $('.pagination').append('<li data-page="'+i+'">\<span><button class="btn btn-info">&laquo;</button><span class="sr-only">(current)</span></span>\</li>').show()
         for(var i=1;i<=pagenum;){
             $('.pagination').append('<li data-page="'+i+'">\<span><button class="btn btn-info">'+ i++ +'</button><span class="sr-only">(current)</span></span>\</li>').show()
         }
         $('.pagination').append('<li data-page="'+i+'">\<span><button class="btn btn-info">&raquo;</button><span class="sr-only">(current)</span></span>\</li>').show()
     }
     $('.pagination li:first-child').addClass('active')
     $('.pagination li').on('click',function(){
         var pageNum = $(this).attr('data-page')
         var trIndex = 0;
         $('.pagination li').removeClass('active')
         $(this).addClass('active')
         $(table+' tr:gt(0)').each(function(){
             trIndex++
             if(trIndex > (maxRows*pageNum) || trIndex <= ((maxRows*pageNum)-maxRows)){
                 $(this).hide()
             } else{
                 $(this).show()
             }
         })
     })
 })



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



listarAseguradoras(){
  this.aseguradorasModel.empresa = "1";
  this._aseguradoraService.getAseguradoras().subscribe(
    response=>{
      console.log(response);
      if(response){
        this.aseguradoras = response;
        this.status = 'ok';
      }else{
        this.status = 'error';
      }
    },
    error=>{
      var errorMessage = <any>error;
      console.log(errorMessage);
      if(errorMessage != null){
        this.status = 'error';
      }
    }
  )
}

agregarAseguradora(){
  this.aseguradorasModel.empresa = "1";
  this._aseguradoraService.addAseguradora(this.aseguradorasModel).subscribe(
    response=>{
      console.log(response);
      console.log(this.aseguradorasModel);
      if(response){
        console.log(response);
        this.formValuesNuevaAseguradora.resetForm();
        this.listarAseguradoras();
        this.status = 'ok';
      }
    },
    error=>{
      var errorMessage = <any>error;
      console.log(errorMessage);
      if(errorMessage != null){
        this.status = 'error';
      }
    }
  )
}




limpiarForm(){
  this.formValuesNuevaAseguradora.resetForm();
}




}
