import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecargoAdicional } from '../models/recargoAdicional.model';
import { Institucion } from "../models/institucion.model";
import { MotivoDeReversa } from "../models/motivoDeReversa.model";

@Injectable({
  providedIn: 'root'
})
export class MotivosDeReversaService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getMotivosDeReversa() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'motivoReversionPago/list?empresa=1', {headers : headers});
  }

  getRecargosAdicionales() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'cobroAdicional/list?empresa=1', {headers : headers});
  }

  getInstituciones(): Observable<any> { //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'institucionCobroAdicional/list?empresa=1', { headers: headers });
  }

  crearMotivoDeReversa(motivoDeReversa : MotivoDeReversa) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motivoDeReversa);

    return this._http.post(this.url + '/motivoReversionPago/create', params,{headers : headers} );
  }

  buscarMotivoDeReversa(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `motivoReversionPago/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarMotivoDeReversa(motivoDeReversa : MotivoDeReversa): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motivoDeReversa);
    console.log(params)
    return this._http.patch(this.url + 'motivoReversionPago/update', params,{headers : headers} );
  }

  eliminarMotivoDeReversa(motivoDeReversa : MotivoDeReversa): Observable<any>{   
    let params = JSON.stringify(motivoDeReversa);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `motivoReversionPago/delete?empresa=${motivoDeReversa.empresa}&codigo=${motivoDeReversa.codigo}`, {headers : headers})
  }
}
