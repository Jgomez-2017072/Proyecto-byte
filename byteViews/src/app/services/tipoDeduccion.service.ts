import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDeduccion } from '../models/tipoDeduccion.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDeduccionService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  
  getTipoDeduccion() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'tipoDeduccion/list?empresa=1', {headers : headers});
  }

  crearTipoDeduccion(tipoDeduccion : TipoDeduccion) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoDeduccion);

    return this._http.post(this.url + '/tipoDeduccion/create', params,{headers : headers} );
  }

  buscarTipoDeduccion(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `tipoDeduccion/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarTipoDeduccion(tipoDeduccion : TipoDeduccion): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoDeduccion);
    console.log(params)
    return this._http.patch(this.url + 'tipoDeduccion/update', params,{headers : headers} );
  }

  eliminarTipoDeduccion(tipoDeduccion : TipoDeduccion): Observable<any>{   
    let params = JSON.stringify(tipoDeduccion);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `tipoDeduccion/delete?empresa=${tipoDeduccion.empresa}&codigo=${tipoDeduccion.codigo}`, {headers : headers})
  }

}
