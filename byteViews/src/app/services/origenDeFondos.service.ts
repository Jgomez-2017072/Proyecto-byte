import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrigenDeFondos } from '../models/origenDeFondos.model';

@Injectable({
    providedIn: 'root'
})
export class OrigenDeFondosService {
    public url : String;

    constructor(public _http : HttpClient){
        this.url = GLOBAL.url;
    }

    getOrigenDeFondos() : Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url + 'origenDeFondosService/list?empresa=1', {headers : headers});
    }

    crearOrigenDeFondos(origenDeFondos : OrigenDeFondos) : Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let params = JSON.stringify(origenDeFondos);

        return this._http.post(this.url + '/origenDeFondosService/create', params, {headers : headers});
    }

    buscarOrigenDeFondos(codigo) : Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + `origenDeFondosService/list?empresa=1&codigo=${codigo}`, {headers : headers});
    }

    editarOrigenDeFondos(origenDeFondos : OrigenDeFondos) : Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let params = JSON.stringify(origenDeFondos);
        console.log(params)
        return this._http.put(this.url + 'origenDeFondosService/update', params,{headers : headers});
    }

    eliminarOrigenDeFondos(origenDeFondos : OrigenDeFondos) : Observable<any>{
        let params = JSON.stringify(origenDeFondos);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + `origenDeFondosService/delete?empresa=${origenDeFondos.empresa}&codigo=${origenDeFondos.codigo}`, {headers : headers})
    }

}