import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonedaMotivoRerversionPago } from '../models/moneda-motivo-reversion-pago.model';

@Injectable({
  providedIn: 'root'
})
export class MonedaMotivoReversionPagoService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  
  getMonedasMotivosRerversionPagos() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'monedaMotivoReversionPago/list?empresa=1', {headers : headers});
  }

  crearMonedaMotivoRerversionPago(monedaMotivoReversionPago : MonedaMotivoRerversionPago) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(monedaMotivoReversionPago);

    return this._http.post(this.url + '/monedaMotivoReversionPago/create', params,{headers : headers} );
  }

  buscarMonedaMotivoRerversionPago(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `monedaMotivoReversionPago/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarMonedaMotivoRerversionPago(monedaMotivoReversionPago : MonedaMotivoRerversionPago): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(monedaMotivoReversionPago);
    console.log(params)
    return this._http.patch(this.url + 'monedaMotivoReversionPago/update', params,{headers : headers} );
  }

  eliminarMonedaMotivoRerversionPago(monedaMotivoReversionPago : MonedaMotivoRerversionPago): Observable<any>{   
    let params = JSON.stringify(monedaMotivoReversionPago);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `monedaMotivoReversionPago/delete?empresa=${monedaMotivoReversionPago.empresa}&codigoMotivo=${monedaMotivoReversionPago.codigoMotivo}&codigoMoneda=${monedaMotivoReversionPago.codigoMoneda}`, {headers : headers})
  }
}