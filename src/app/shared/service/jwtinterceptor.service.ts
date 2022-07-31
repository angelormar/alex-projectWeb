import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService implements HttpInterceptor{

  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const usuario_logado = this.loginService.getUsuarioLogado();

      if(usuario_logado){
        console.log(usuario_logado.token);
        const authRequest = req.clone(
          {setHeaders:{'Authorization':'Bearer '+usuario_logado.token}}
        );
        return next.handle(authRequest);
      }else {
        return next.handle(req);
      }

  }
}
