import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destino } from '../models/destino.model';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getDestinos() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'destino/list?empresa=1', {headers : headers});
  }

  crearDestino(destino : Destino) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(destino);

    return this._http.post(this.url + '/destino/create', params,{headers : headers} );
  }

  buscarDestino(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `destino/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarDestino(destino : Destino): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(destino);
    console.log(params)
    return this._http.put(this.url + 'destino/update', params,{headers : headers} );
  }

  eliminarDestino(destino : Destino): Observable<any>{   
    let params = JSON.stringify(destino);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `destino/delete?empresa=${destino.empresa}&codigo=${destino.codigo}`, {headers : headers})
  }
}
