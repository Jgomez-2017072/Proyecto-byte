import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Almacenadora } from '../models/almacenadora.model'; 

@Injectable({
  providedIn: 'root'
})
export class AlmacenadorasService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  
  getAlmacenadoras() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'almacenadoras/list?empresa=1', {headers : headers});
  }

  crearAlmacenadora(almacenadora : Almacenadora) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(almacenadora);

    return this._http.post(this.url + '/almacenadoras/create', params,{headers : headers} );
  }

  buscarAlmacenadora(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `almacenadoras/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarAlmacenadora(almacenadora : Almacenadora): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(almacenadora);
    console.log(params)
    return this._http.patch(this.url + 'almacenadoras/update', params,{headers : headers} );
  }

  eliminarAlmacenadora(almacenadora : Almacenadora): Observable<any>{   
    let params = JSON.stringify(almacenadora);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `almacenadoras/delete?empresa=${almacenadora.empresa}&codigo=${almacenadora.codigo}`, {headers : headers})
  }

}
