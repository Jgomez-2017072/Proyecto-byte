import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EjecutivoCuenta } from '../models/ejecutivoCuenta.model';

@Injectable({
  providedIn: 'root'
})
export class EjecutivoCuentaService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getEjecutivosCuentas() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'ejecutivoCuenta/list?empresa=1', {headers : headers});
  }

  crearEjecutivoCuenta(ejecutivoCuenta : EjecutivoCuenta) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(ejecutivoCuenta);

    return this._http.post(this.url + '/ejecutivoCuenta/create', params,{headers : headers} );
  }

  buscarEjecutivoCuenta(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `ejecutivoCuenta/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarEjecutivoCuenta(ejecutivoCuenta : EjecutivoCuenta): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(ejecutivoCuenta);
    console.log(params)
    return this._http.patch(this.url + 'ejecutivoCuenta/update', params,{headers : headers} );
  }

  eliminarEjecutivoCuenta(ejecutivoCuenta : EjecutivoCuenta): Observable<any>{   
    let params = JSON.stringify(ejecutivoCuenta);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `ejecutivoCuenta/delete?codigo=${ejecutivoCuenta.codigo}`, {headers : headers})
  }

}