import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { EstadoResolucion } from '../models/estado-resolucion.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoResolucionService {

  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
   }

   getEstadoResolucion(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'statusResolucion/list?empresa=1', {headers : headers});
   }

   crearEstadoResolucion( estadoResolucion: EstadoResolucion): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(estadoResolucion);
    return this._http.post(this.url + '/statusResolucion/create', params,{headers : headers} );
   }

   eliminarEstadoResolucion(estadoResolucion:EstadoResolucion): Observable<any> {
    let params = JSON.stringify(estadoResolucion);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + `statusResolucion/delete?empresa=${estadoResolucion.empresa}&codigo=${estadoResolucion.codigo}`, {headers : headers})
   }

   editarEstadoResolucion(estadoResolucion: EstadoResolucion): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(estadoResolucion);
    return this._http.put(this.url + 'statusResolucion/update', params,{headers : headers} );

   }


}
