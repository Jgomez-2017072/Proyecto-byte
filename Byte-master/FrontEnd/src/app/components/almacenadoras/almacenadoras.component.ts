import { Component, OnInit, Input, AfterViewChecked, ViewChild  } from '@angular/core';
import * as $ from 'jquery';
import { AlmacenadorasService } from 'src/app/services/almacenadora.service';
import { Almacenadora } from 'src/app/models/almacenadora.model';
import { GLOBAL } from 'src/app/services/global.service';


@Component({
  selector: 'app-almacenadoras',
  templateUrl: './almacenadoras.component.html',
  styleUrls: ['./almacenadoras.component.scss'],
  providers: [AlmacenadorasService]
})
export class AlmacenadorasComponent implements OnInit {

  @ViewChild('nuevaAlmacenadora') formValuesNuevaAlmacenadora;

  public url;
  public identity;
  public token;
  public status: string;

  public almacenadoras: Almacenadora;
  public almacenadorasModel: Almacenadora;



  constructor(
    private _almacenadoraService: AlmacenadorasService
  ) {
    this.url = GLOBAL.url;
    this.identity = this._almacenadoraService.getIdentity();
    this.token = this._almacenadoraService.getToken();
    this.almacenadorasModel = new Almacenadora(
      0,
      0,
      "",
      "",
      "",
      true
    );
  }

  ngOnInit() {

    this.listarAlmacenadoras();
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


  listarAlmacenadoras(){
    this.almacenadorasModel.empresa = "1";
    this._almacenadoraService.getAlmacenadoras().subscribe(
      response=>{
        console.log(response);
        if(response){
          this.almacenadoras = response;
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


  agregarAlmacenadora(){
    this.almacenadorasModel.empresa = "1";
    this._almacenadoraService.addAlmacenadora(this.almacenadorasModel).subscribe(
      response=>{
        console.log(response);
        console.log(this.almacenadorasModel);
        if(response){
          console.log(response);
          this.formValuesNuevaAlmacenadora.resetForm();
          this.listarAlmacenadoras();
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

  updateAlmacenadora(){
    this._almacenadoraService.updateAlmacenadora(this.almacenadorasModel).subscribe(
      response=>{
        if(response){
          console.log(response);
          this.listarAlmacenadoras();
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

  deleteAlmacenadora(){
    this._almacenadoraService.deleteAlmacenadora(this.almacenadorasModel.codigo).subscribe(
      response=>{
        if(response){
          console.log(response);
          this.listarAlmacenadoras();
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


  setCodigo(codigo: Number){
    this.almacenadorasModel.codigo = codigo;
  }

  setDescripcion(descripcion: String){
    this.almacenadorasModel.descripcion = descripcion;
  }
 
  setEmpresa(empresa: String){
    this.almacenadorasModel.empresa = empresa;
  }






  limpiarForm(){
    this.formValuesNuevaAlmacenadora.resetForm();
  }


}
