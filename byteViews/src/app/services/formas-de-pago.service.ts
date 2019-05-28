import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormasDePago } from '../models/formasDePago.model';

@Injectable({
  providedIn: 'root'
})
export class FormasDePagoService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getFormasDePago() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'formaDePago/list?empresa=1', {headers : headers});
  }

  crearFormaDePago(formaDePago : FormasDePago) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formaDePago);

    return this._http.post(this.url + '/formaDePago/create', params,{headers : headers} );
  }

  buscarFormaDePago(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `formaDePago/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarFormaDePago(formaDePago : FormasDePago): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formaDePago);
    console.log(params)
    return this._http.put(this.url + 'formaDePago/update', params,{headers : headers} );
  }

  eliminarFormaDePago(formaDePago : FormasDePago): Observable<any>{   
    let params = JSON.stringify(formaDePago);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `formaDePago/delete?empresa=${formaDePago.empresa}&codigo=${formaDePago.codigo}`, {headers : headers})
  }
}
