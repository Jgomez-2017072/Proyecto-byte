import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { TipoDeduccion } from '../models/tipo-deduccion.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDeduccionService {

  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
   }

   getTiposDeduccion() : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'tipoDeduccion/list?empresa=1', {headers : headers});
   }

   crearTipoDeduccion(tipoDeduccion: TipoDeduccion) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoDeduccion);

    return this._http.post(this.url + 'tipoDeduccion/create', params, {headers : headers});
   }

   buscarTipoDeduccion(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `tipoDeduccion/read?empresa=1&codigo=${codigo}`, {headers : headers});
   }

   editarTipoDeduccion(tipoDeduccion : TipoDeduccion): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoDeduccion);

    return this._http.patch(this.url + 'tipoDeduccion/update', params, {headers : headers});
   }

}
