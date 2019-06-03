import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecargoAdicional } from '../models/recargoAdicional.model';

@Injectable({
  providedIn: 'root'
})
export class RecargosAdicionalesService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }
  
  getRecargosAdicionales() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'cobroAdicional/list?empresa=1', {headers : headers});
  }

  crearRecargoAdicional(recargoAdicional : RecargoAdicional) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(recargoAdicional);
    console.log(params)
    return this._http.post(this.url + 'cobroAdicional/create', params,{headers : headers} );
  }

  buscarRecargoAdicional(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `cobroAdicional/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarRecargoAdicional(recargoAdicional : RecargoAdicional): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(recargoAdicional);
    console.log(params)
    return this._http.put(this.url + 'cobroAdicional/update', params,{headers : headers} );
  }

  eliminarRecargoAdicional(recargoAdicional : RecargoAdicional): Observable<any>{   
    let params = JSON.stringify(recargoAdicional);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + 
      `cobroAdicional/delete?empresa=${recargoAdicional.empresa}&codigo=${recargoAdicional.codigo}`, 
      {headers : headers})
  }
}

