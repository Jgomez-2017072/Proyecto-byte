import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstatusAvaluos } from '../models/estatus-avaluos.model';

@Injectable({
  providedIn: 'root'
})
export class EstatusAvaluosService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getEstatusAvaluos() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'estatusAvaluo/list?empresa=1', {headers : headers});
  }

  crearEstatusAvaluo(estatusAvaluo : EstatusAvaluos) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(estatusAvaluo);

    return this._http.post(this.url + 'estatusAvaluo/create', params,{headers : headers} );
  }

  buscarEstatusAvaluos(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `estatusAvaluo/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarEstatusAvaluos(estatusAvaluo : EstatusAvaluos): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(estatusAvaluo);
    console.log(params)
    return this._http.put(this.url + 'estatusAvaluo/update', params,{headers : headers} );
  }

  eliminarEstatusAvaluos(estatusAvaluo : EstatusAvaluos): Observable<any>{   
    let params = JSON.stringify(estatusAvaluo);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `estatusAvaluo/delete?empresa=${estatusAvaluo.empresa}&codigo=${estatusAvaluo.codigo}`, {headers : headers})
  }
}