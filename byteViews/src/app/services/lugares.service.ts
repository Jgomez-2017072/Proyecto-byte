import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';
import { Lugares } from '../models/lugares.model';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  
  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getLugares() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'lugar/list?empresa=1', {headers : headers});
  }

  crearLugar(lugares : Lugares) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(lugares);

    return this._http.post(this.url + 'lugar/create', params,{headers : headers} );
  }

  buscarLugar(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `lugar/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarLugar(lugares : Lugares): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(lugares);
    console.log(params)
    return this._http.patch(this.url + 'lugar/update', params,{headers : headers} );
  }

  eliminarLugar(lugares : Lugares): Observable<any>{   
    let params = JSON.stringify(lugares);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `lugar/delete?empresa=${lugares.empresa}&codigo=${lugares.codigo}`, {headers : headers})
  }
}
