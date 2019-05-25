import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public url : String;

  constructor(public _http : HttpClient) { 
    this.url = GLOBAL.url;
  }

  getCategorias() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'categoria/list?empresa=1', {headers : headers});
  }

  crearCategoria(categoria : Categoria) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(categoria);

    return this._http.post(this.url + '/categoria/create', params,{headers : headers} );
  }

  buscarCategoria(codigo) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `categoria/read?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  editarCategoria(categoria : Categoria): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(categoria);
    console.log(params)
    return this._http.put(this.url + 'categoria/update', params,{headers : headers} );
  }

  eliminarCategoria(categoria : Categoria): Observable<any>{   
    let params = JSON.stringify(categoria);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.delete(this.url + `categoria/delete?empresa=${categoria.empresa}&codigo=${categoria.codigo}`, {headers : headers})
  }
}
