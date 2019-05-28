import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MotivoAjuste } from '../models/motivo-ajuste.model';

@Injectable({
  providedIn: 'root'
})
export class MotivoAjusteService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getMotivosAjustes() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'motivoAjuste/list?empresa=1', {headers : headers});
  }

  crearMotivoAjuste(motivoAjuste : MotivoAjuste) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motivoAjuste);

    return this._http.post(this.url + 'motivoAjuste/create', params,{headers : headers} );
  }

  buscarMotivoAjuste(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `motivoAjuste/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarMotivoAjuste(motivoAjuste : MotivoAjuste): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motivoAjuste);
    console.log(params)
    return this._http.put(this.url + 'motivoAjuste/update', params,{headers : headers} );
  }

  eliminarMotivoAjuste(motivoAjuste : MotivoAjuste): Observable<any>{   
    let params = JSON.stringify(motivoAjuste);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `motivoAjuste/delete?empresa=${motivoAjuste.empresa}&codigo=${motivoAjuste.codigo}`, {headers : headers})
  }
}
