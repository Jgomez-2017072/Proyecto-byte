import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormasDeDesembolso } from '../models/formasDeDesembolso.model';

@Injectable({
  providedIn: 'root'
})
export class FormasDeDesembolsoService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getFormasDeDesembolsos() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'formaDesembolso/list?empresa=1', {headers : headers});
  }

  crearFormaDeDesembolso(formasDeDesembolso : FormasDeDesembolso) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formasDeDesembolso);

    return this._http.post(this.url + '/formaDesembolso/create', params,{headers : headers} );
  }

  buscarFormasDeDesembolso(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `formaDesembolso/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarFormaDeDesembolso(formasDeDesembolso : FormasDeDesembolso): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formasDeDesembolso);
    console.log(params)
    return this._http.patch(this.url + 'formaDesembolso/update', params,{headers : headers} );
  }

  eliminarFormaDeDesembolso(formasDeDesembolso : FormasDeDesembolso): Observable<any>{   
    let params = JSON.stringify(formasDeDesembolso);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `formaDesembolso/delete?empresa=${formasDeDesembolso.empresa}&codigo=${formasDeDesembolso.codigo}`, {headers : headers})
  }
}
