import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusGarantiaReal } from '../models/statusGarantiaReal.model';

@Injectable({
  providedIn: 'root'
})
export class StatusGarantiaRealService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getStatusGarantiaReal() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'statusGarantiaReal/list', {headers : headers});
  }

  crearStatusGarantiaReal(statusGarantiaReal : StatusGarantiaReal) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(statusGarantiaReal);

    return this._http.post(this.url + '/statusGarantiaReal/create', params,{headers : headers} );
  }

  buscarStatusGarantiaReal(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `statusGarantiaReal/read?codigo=1`, {headers : headers});
  }

  editarStatusGarantiaReal(statusGarantiaReal : StatusGarantiaReal): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(statusGarantiaReal);
    console.log(params)
    return this._http.put(this.url + 'statusGarantiaReal/update', params,{headers : headers} );
  }

  eliminarStatusGarantiaReal(statusGarantiaReal : StatusGarantiaReal): Observable<any>{   
    let params = JSON.stringify(statusGarantiaReal);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `statusGarantiaReal/delete?codigo=${statusGarantiaReal.codigo}`, {headers : headers})
  }
}
