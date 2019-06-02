import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aseguradora } from '../models/aseguradora.model';

@Injectable({
  providedIn: 'root'
})
export class AseguradorasService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getAseguradoras() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'aseguradora/list?empresa=1', {headers : headers});
  }

  crearAseguradora(aseguradora : Aseguradora) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(aseguradora);

    return this._http.post(this.url + '/aseguradora/create', params,{headers : headers} );
  }

  buscarAseguradora(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `aseguradora/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarAseguradora(aseguradora : Aseguradora): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(aseguradora);
    console.log(params)
    return this._http.patch(this.url + 'aseguradora/update', params,{headers : headers} );
  }

  eliminarAseguradora(aseguradora : Aseguradora): Observable<any>{   
    let params = JSON.stringify(aseguradora);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `aseguradora/delete?empresa=${aseguradora.empresa}&codigo=${aseguradora.codigo}`, {headers : headers})
  }
}
