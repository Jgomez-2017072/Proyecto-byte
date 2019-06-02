import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngenieroValuador } from '../models/ingeniero-valuador.model';

@Injectable({
  providedIn: 'root'
})
export class IngenieroValuadorService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getIngenirosValuadores() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'supervisor/list?empresa=1', {headers : headers});
  }

  crearIngenieroValuador(ingenieroValuadro : IngenieroValuador) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(ingenieroValuadro);

    return this._http.post(this.url + '/supervisor/create', params,{headers : headers} );
  }

  buscarIngenieroValuador(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `supervisor/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarIngenieroValuador(ingenieroValuadro : IngenieroValuador): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(ingenieroValuadro);
    console.log(params)
    return this._http.put(this.url + 'supervisor/update', params,{headers : headers} );
  }

  eliminarIngenieroValuador(ingenieroValuadro : IngenieroValuador): Observable<any>{   
    let params = JSON.stringify(ingenieroValuadro);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `supervisor/delete?empresa=${ingenieroValuadro.empresa}&codigo=${ingenieroValuadro.codigo}`, {headers : headers})
  }
}