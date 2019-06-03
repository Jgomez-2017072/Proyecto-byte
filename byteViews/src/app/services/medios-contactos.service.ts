import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medios } from '../models/medios.model'; 
@Injectable({
  providedIn: 'root'
})
export class MediosContactosService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  
  getMedios() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'medio/list?empresa=1', {headers : headers});
  }

  crearMedios(Medios : Medios) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(Medios);

    return this._http.post(this.url + '/medio/create', params,{headers : headers} );
  }

  buscarMedio(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `almacenadoras/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarMedios(Medios : Medios): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(Medios);
    console.log(params)
    return this._http.put(this.url + 'medio/update', params,{headers : headers} );
  }

  eliminarMedios(Medios : Medios): Observable<any>{   
    let params = JSON.stringify(Medios);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `medio/delete?empresa=${Medios.empresa}&codigo=${Medios.codigo}`, {headers : headers})
  }

}
