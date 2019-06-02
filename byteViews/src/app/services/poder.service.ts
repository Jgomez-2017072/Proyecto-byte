import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { Poder } from '../models/poder.model';

@Injectable({
  providedIn: 'root'
})
export class PoderService {

  public url: String;

  constructor( public _http: HttpClient) {
    this.url = GLOBAL.url
   }

   getPoder(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'poder/list?empresa=1', {headers : headers});
   }

   crearPoder(poder: Poder): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(poder);
    return this._http.post(this.url + '/poder/create', params,{headers : headers} );
   }

   eliminarPoder(poder:Poder):Observable<any>{
    let params = JSON.stringify(poder);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + `poder/delete?empresa=${poder.empresa}&codigo=${poder.codigo}`, {headers : headers})
   }

   editarPoder(poder:Poder): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(poder);
    return this._http.put(this.url + 'poder/update', params,{headers : headers} );

   }
}
