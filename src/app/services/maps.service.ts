import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { Departamento, DepartamentoResponse } from '../interfaces/departamento.interface';
import { Observable } from 'rxjs';
import { Centros, CentrosRes } from '../interfaces/centros.interface';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private _urlBase = environment.url_base;

  /*RUTAS API*/
  private departamentosUrl = 'api/departamentos'; 
  private centrosVacunacionUrl = 'api/hospitales';


  constructor( private http: HttpClient ) { }


  getDepartamentos(): Observable<Departamento[]> {
    const url = `${this._urlBase}/${this.departamentosUrl}`;

    return this.http.get<DepartamentoResponse>( url )
      .pipe( 
        map( (departamentosRes:DepartamentoResponse) => {
        return departamentosRes.departamento;
        })
      )
  }

  getCentrosXDepartamentos(id: string): Observable<Centros[]>{
    const url = `${this._urlBase}/${this.centrosVacunacionUrl}/${id}`;

    return this.http.get<CentrosRes>( url )
      .pipe( map( (centros:CentrosRes) => {
        return centros.hospitales;
      }))
  }

}
