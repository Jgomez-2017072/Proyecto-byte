import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MotivoCambioEjecutivo } from '../models/motivo-cambio-ejecutivo.model';

@Injectable({
  providedIn: 'root'
})
export class MotivoCambioEjecutivoService {

  public url : String;

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url
   }

   getMotivoCambioEjecutivo(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'motivoCambioEjecutivo/list?empresa=1', {headers: headers})
   }

   crearMotivoCambioEjecutivo(motivoCambioEjecutivo: MotivoCambioEjecutivo): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motivoCambioEjecutivo);

    return this._http.post(this.url + '/motivoCambioEjecutivo/create', params, {headers:headers});
   }

   eliminarMotivoCambioEjecutivo(motivoCambioEjecutivo: MotivoCambioEjecutivo): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + `motivoCambioEjecutivo/delete?empresa=${motivoCambioEjecutivo.empresa}&codigo=${motivoCambioEjecutivo.codigo}`, {headers : headers})

   }

   editarMotivoCambioEjecutivo(motivoCambioEjecutivo: MotivoCambioEjecutivo){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motivoCambioEjecutivo);
    return this._http.put(this.url + `motivoCambioEjecutivo/update?empresa=${motivoCambioEjecutivo.empresa}&codigo=${motivoCambioEjecutivo.codigo}`, params, {headers : headers})

   }
}
