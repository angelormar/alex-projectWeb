import { LoginService } from 'src/app/shared/service/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService implements ErrorHandler {

  constructor(private loginService : LoginService) { }
  handleError(error: HttpErrorResponse | any): void {
    
    if(error instanceof HttpErrorResponse){

      switch (error.status) {
        case 400:
          alert(error.error);
          break;
        case 0:
          alert('Não foi possível conectar com o servidor');
          break;
        case 401:
          alert('Token expirado');
          this.loginService.logout();
          break;
        case 403:
          alert('Acesso negado');
          break;
        case 404:
          alert('Não encontrado');
          break;
        case 500:
          alert('Erro interno do servidor');
          break;
      }
    }
  }
}
