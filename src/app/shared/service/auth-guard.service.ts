import { LoginService } from 'src/app/shared/service/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginservice: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    const usuarioLogado = this.loginservice.getUsuarioLogado();
    console.log('AuthGuard');
    console.log(usuarioLogado);

    if (!usuarioLogado) {
      return state.url.endsWith('login') ? true : false;
    }else{
      if(state.url.endsWith('login') ){
       if (usuarioLogado.permissao === 'ADMIN') this.router.navigate(['/todos-dispositivos']) 
       if (usuarioLogado.permissao === 'USER') this.router.navigate(['/meusDispositivos']);  
        return false;
      }else if (state.url.endsWith('meusDispositivos') && usuarioLogado.permissao === 'ADMIN'){
        this.router.navigate(['/todos-dispositivos']) 
        return false;
      }
      else{
        return true;
      }
    }
  }
}
