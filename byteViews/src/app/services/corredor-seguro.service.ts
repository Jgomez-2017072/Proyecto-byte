import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CorredorSeguro } from '../models/corredorSeguro.model';

@Injectable({
  providedIn: 'root'
})
export class CorredorSeguroService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getCorredoresSeguros() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'corredorSeguro/list?empresa=1', {headers : headers});
  }

  crearCorredorSeguro(corredorSeguro : CorredorSeguro) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(corredorSeguro);

    return this._http.post(this.url + '/corredorSeguro/create', params,{headers : headers} );
  }

  buscarCorredorSeguro(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `corredorSeguro/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarCorredorSeguro(corredorSeguro : CorredorSeguro): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(corredorSeguro);
    console.log(params)
    return this._http.patch(this.url + 'corredorSeguro/update', params,{headers : headers} );
  }

  eliminarCorredorSeguro(corredorSeguro : CorredorSeguro): Observable<any>{   
    let params = JSON.stringify(corredorSeguro);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `corredorSeguro/delete?empresa=${corredorSeguro.empresa}&codigo=${corredorSeguro.codigo}`, {headers : headers})
  }
}