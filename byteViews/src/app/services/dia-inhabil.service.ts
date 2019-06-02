import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaInhabil } from '../models/dia-inhabil.model';

@Injectable({
  providedIn: 'root'
})
export class DiaInhabilService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getDiasInhabiles() : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'diasNoHabilesNoCobroMora/list?empresa=1', {headers : headers});
  }

  crearDiaInhabil(aseguradora : DiaInhabil) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(aseguradora);

    return this._http.post(this.url + 'diasNoHabilesNoCobroMora/create', params,{headers : headers} );
  }

  buscarDiaInhabil(fechaFeriado2, tipoFeriado2) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `diasNoHabilesNoCobroMora/read?empresa=1&fechaFeriado=${fechaFeriado2}&tipoFeriado=${tipoFeriado2}`, {headers : headers});
  }

  editarDiaInhabil(aseguradora : DiaInhabil): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(aseguradora);
    console.log(params)
    return this._http.put(this.url + 'diasNoHabilesNoCobroMora/update', params,{headers : headers} );
  }

  eliminarDiaInhabil(diaInhabil : DiaInhabil): Observable<any>{   
    let params = JSON.stringify(diaInhabil);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `diasNoHabilesNoCobroMora/delete?empresa=${diaInhabil.empresa}&fechaFeriado=${diaInhabil.fechaFeriado}&tipoFeriado=${diaInhabil.tipoFeriado}`, {headers : headers})
  }
}