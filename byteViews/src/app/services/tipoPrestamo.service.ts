import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoPrestamo } from '../models/tipoPrestamo.model';

@Injectable({
  providedIn: 'root'
})
export class TipoPrestamoService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  
  getTipoPrestamo() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'tipoPrestamo/list', {headers : headers});
  }

  crearTipoPrestamo(tipoPrestamo : TipoPrestamo) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoPrestamo);

    return this._http.post(this.url + '/tipoPrestamo/create', params,{headers : headers} );
  }

  buscarTipoPrestamo(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `tipoPrestamo/read?codigo=${codigo}`, {headers : headers});
  }

  editarTipoPrestamo(tipoPrestamo : TipoPrestamo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoPrestamo);
    console.log(params)
    return this._http.patch(this.url + 'tipoPrestamo/update', params,{headers : headers} );
  }

  eliminarTipoPrestamo(tipoPrestamo : TipoPrestamo): Observable<any>{   
    let params = JSON.stringify(tipoPrestamo);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `tipoPrestamo/delete?codigo=${tipoPrestamo.codigo}`, {headers : headers})
  }

}
