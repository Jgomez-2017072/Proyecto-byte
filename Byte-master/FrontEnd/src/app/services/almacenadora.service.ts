import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Almacenadora } from '../models/almacenadora.model';

import { GLOBAL } from './global.service';

@Injectable()
export class AlmacenadorasService {
  public url: string;
  public identity;
  public token;


  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getAlmacenadoras(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'almacenadoras/list?empresa=1', {headers:headers});
  }

  addAlmacenadora(almacenadora: Almacenadora): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(almacenadora);

    return this._http.post(this.url + 'almacenadoras/create', params, {headers:headers});
  }

  updateAlmacenadora(almacenadora: Almacenadora): Observable<any>{
    let params = JSON.stringify(almacenadora);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.patch(this.url + 'almacenadoras/update/', params, {headers: headers})

  }

  deleteAlmacenadora(codigo):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `almacenadoras/delete/?empresa=1&codigo=${codigo}`,{headers: headers})

  }


  getIdentity(){
    var identity2 = JSON.parse(sessionStorage.getItem('identity'))
    if(identity2 != 'undefined'){
      this.identity = identity2;
    }else{
      this.identity = null;
    }

    return this.identity;
  }

  getToken(){
    var token2 = sessionStorage.getItem('token')
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }

    return this.token;
  }


}
