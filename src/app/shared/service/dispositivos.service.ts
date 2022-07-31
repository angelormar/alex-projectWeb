import { Cliente } from 'src/app/shared/model/Cliente';
import { TiposService } from './tipos.service';
import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  private readonly API_URL = 'http://localhost:8080/';
  
  constructor(private http: HttpClient) { }
  
  getDispositivosCliente(cliente: Cliente): Observable<Dispositivo[]>{
    return this.http.get<Dispositivo[]>(this.API_URL + 'dispositivo/user/' + cliente.id);
  }
  
  getDispositivos(): Observable<Dispositivo[]>{
    return this.http.get<Dispositivo[]>(this.API_URL + 'dispositivo/todos');
  }

  newDispositivo(dispositivo: Dispositivo) : Observable<Dispositivo>{
    return this.http.post<Dispositivo>(this.API_URL + 'dispositivo/cadastrar', dispositivo);
  }

  deleteDispositivo(dispositivo: Number) : Observable<String>{  
    return this.http.delete<String>(this.API_URL + 'dispositivo/deletar' + dispositivo);
  }

  mudaEstadoDispositivo(dispositivo: Dispositivo) {
     return this.http.post<String>(this.API_URL + 'dispositivo/muda-estado' , dispositivo);
  } 
  
}
