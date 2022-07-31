import { AppComponent } from './../../app.component';
import { Cliente } from 'src/app/shared/model/Cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://localhost:8080/';
  private readonly USUARIO_LOGADO = 'usuario-logado';

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API_URL + 'login', usuario);
  }

  logout() {
    sessionStorage.removeItem(this.USUARIO_LOGADO);
    // redirect to login path
    this.router.navigate(['/login']);    
  }

  setarUsuarioLogado(usuario: Cliente): void {
    sessionStorage.setItem(this.USUARIO_LOGADO, JSON.stringify(usuario));
  }

  getUsuarioLogado(): Cliente {
    return JSON.parse(sessionStorage.getItem(this.USUARIO_LOGADO) as string);
  }
}
