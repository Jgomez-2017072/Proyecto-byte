import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoAjuste } from '../models/tipo-ajuste.model';

@Injectable({
  providedIn: 'root'
})
export class TipoAjusteService {

  public url: String;

  constructor( public _http: HttpClient) {
    this.url = GLOBAL.url
   }

   getTipoAjustes(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'tipoAjuste/list', {headers : headers});
   }

   crearTipoAjuste(tipoAjuste: TipoAjuste): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoAjuste);
    return this._http.post(this.url + '/tipoAjuste/create', params,{headers : headers} );
   }

   eliminarTipoAjuste(tipoAjuste: TipoAjuste): Observable<any>{
    let params = JSON.stringify(tipoAjuste);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + `tipoAjuste/delete?codigo=${tipoAjuste.codigo}`, {headers : headers})
   }

   editarTipoAjuste(tipoAjuste: TipoAjuste):Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(tipoAjuste);
    return this._http.patch(this.url + 'tipoAjuste/update', params,{headers : headers} );

   }
}
