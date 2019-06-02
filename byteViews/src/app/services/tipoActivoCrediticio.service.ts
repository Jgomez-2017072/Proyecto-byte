import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoActivoCrediticio } from '../models/tipoActivoCrediticio.model';

@Injectable({
  providedIn: 'root'
})
export class TipoActivoCrediticioService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  
  getTipoActivoCrediticio() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'tipoActivoCrediticio/list?empresa=1', {headers : headers});
  }

  crearTipoActivoCrediticio(tipoActivoCrediticio : TipoActivoCrediticio) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoActivoCrediticio);

    return this._http.post(this.url + '/tipoActivoCrediticio/create', params,{headers : headers} );
  }

  buscarTipoActivoCrediticio(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `tipoActivoCrediticio/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarTipoActivoCrediticio(tipoActivoCrediticio : TipoActivoCrediticio): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoActivoCrediticio);
    console.log(params)
    return this._http.patch(this.url + 'tipoActivoCrediticio/update', params,{headers : headers} );
  }

  eliminarTipoActivoCrediticio(tipoActivoCrediticio : TipoActivoCrediticio): Observable<any>{   
    let params = JSON.stringify(tipoActivoCrediticio);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `tipoActivoCrediticio/delete?empresa=${tipoActivoCrediticio.empresa}&codigo=${tipoActivoCrediticio.codigo}`, {headers : headers})
  }

}