import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institucion } from '../models/institucion.model';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesService {

  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getInstituciones(): Observable<any> { //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'institucionCobroAdicional/list?empresa=1', { headers: headers });
  }

  crearInstitucion(institucion: Institucion): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(institucion);

    //EN CASO DE ERROR ==> /institucionCobroAdicional
    console.log(params)
    return this._http.post(this.url + '/institucionCobroAdicional/create', params, { headers: headers });
  }

  buscarInstitucion(codigo): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `institucionCobroAdicional/read?empresa=1&codigo=${codigo}`, { headers: headers });
  }

  editarInstitucion(institucion: Institucion): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(institucion);
    console.log(params)
    return this._http.put(this.url + 'institucionCobroAdicional/update', params, { headers: headers });
  }

  eliminarInstitucion(institucion: Institucion): Observable<any> {
    let params = JSON.stringify(institucion);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(institucion.empresa)
    console.log(institucion.codigo)
    return this._http.delete(this.url +
      `institucionCobroAdicional/delete?empresa=${institucion.empresa}&codigo=${institucion.codigo}`,
      { headers: headers })
    //return this._http.delete(this.url + `institucionCobroAdicional/delete?empresa=${institucion.empresa}&codigo=${institucion.codigo}`, {headers : headers})
  }

}
