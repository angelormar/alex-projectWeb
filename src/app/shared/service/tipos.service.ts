import { Cliente } from 'src/app/shared/model/Cliente';
import { Tipo } from './../model/Tipo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  
  private readonly API_URL = 'http://localhost:8080/';
  
  getTipos(): Observable<Tipo[]>{
    //return a post request
    return this.http.get<Tipo[]>(this.API_URL + 'tipos');
  }
  
  getTipoById(idtipo : number): Observable<Tipo>{
    //return a get request to the server with the idtipo
    return this.http.get<Tipo>(this.API_URL + 'tipo/' + idtipo);
  }
  
  newTipo(tipo: Tipo): Observable<Tipo> {
    return this.http.post<Tipo>(this.API_URL + 'tipo/cadastrar', tipo);
  }

  deleteTipo(tipo: Number): Observable<Number> {
        return this.http.post<Number>(this.API_URL + 'tipo/deletar' , tipo);
  }

  constructor(private http: HttpClient) { }
}
