import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-notarios',
  templateUrl: './notarios.component.html',
  styleUrls: ['./notarios.component.scss']
})
export class NotariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    

    $("#barraBusqueda").keyup(function(){
       var _this = this;
      $.each($(".js-table tbody tr"), function() {
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
    $(function(){
        $('table tr:eq(0)').prepend('<th>ID</th>')
        var id = 0;
        $('table tr:gt(0)').each(function(){
            id++
            $(this).prepend('<td>'+id+'</td>')
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

}
