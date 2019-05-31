import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { Aseguradora } from '../models/aseguradora.model';

@Injectable()
export class AseguradoraService {
  public url: string;
  public identity;
  public token;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }


  getAseguradoras(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'aseguradora/list?empresa=1', {headers:headers});
  }

  addAseguradora(aseguradora: Aseguradora): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(aseguradora);

    return this._http.post(this.url + 'aseguradora/create', params, {headers:headers});
  }






}
