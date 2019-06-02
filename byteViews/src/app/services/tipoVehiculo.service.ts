import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoVehiculo } from '../models/tipoVehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  
  getTipoVehiculo() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'tipoVehiculo/list?empresa=1', {headers : headers});
  }

  crearTipoVehiculo(tipoVehiculo : TipoVehiculo) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoVehiculo);

    return this._http.post(this.url + '/tipoVehiculo/create', params,{headers : headers} );
  }

  buscarTipoVehiculo(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `tipoVehiculo/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarTipoVehiculo(tipoVehiculo : TipoVehiculo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoVehiculo);
    console.log(params)
    return this._http.patch(this.url + 'tipoVehiculo/update', params,{headers : headers} );
  }

  eliminarTipoVehiculo(tipoVehiculo : TipoVehiculo): Observable<any>{   
    let params = JSON.stringify(tipoVehiculo);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `tipoVehiculo/delete?empresa=${tipoVehiculo.empresa}&codigo=${tipoVehiculo.codigo}`, {headers : headers})
  }

}
