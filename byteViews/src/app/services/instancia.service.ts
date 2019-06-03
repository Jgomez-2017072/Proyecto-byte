import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instancia } from '../models/instancia.model';

@Injectable({
  providedIn: 'root'
})
export class InstanciaService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  
  getInstancias() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'instancias/list?empresa=1', {headers : headers});
  }

  crearInstancia(instancia : Instancia) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(instancia);

    return this._http.post(this.url + 'instancias/create', params,{headers : headers} );
  }

  buscarInstancia(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `instancias/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarInstancia(instancia : Instancia): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(instancia);
    console.log(params)
    return this._http.patch(this.url + 'instancias/update', params,{headers : headers} );
  }

  eliminarInstancia(instancia : Instancia): Observable<any>{   
    let params = JSON.stringify(instancia);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `instancias/delete?empresa=${instancia.empresa}&codigo=${instancia.codigoInstancia}`, {headers : headers})
  }

}