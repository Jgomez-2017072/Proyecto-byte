import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notario } from '../models/notario.model';

@Injectable({
  providedIn: 'root'
})
export class NotarioService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getNotarios() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'abogadosNotarios/list?empresa=1', {headers : headers});
  }

  crearNotario(notario : Notario) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(notario);

    return this._http.post(this.url + 'abogadosNotarios/create', params,{headers : headers} );
  }

  buscarNotario(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `abogadosNotarios/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarNotario(notario : Notario): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(notario);
    console.log(params)
    return this._http.put(this.url + 'abogadosNotarios/update', params,{headers : headers} );
  }

  eliminarNotario(notario : Notario): Observable<any>{   
    let params = JSON.stringify(notario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `abogadosNotarios/delete?empresa=${notario.empresa}&codigo=${notario.codigo}`, {headers : headers})
  }
}
