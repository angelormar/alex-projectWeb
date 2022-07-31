import { LoginService } from 'src/app/shared/service/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alex-projectWeb';
  logState : boolean = false;
  admState : boolean = false;
  loadState : boolean = false;
  
  constructor(private loginService: LoginService) {
    this.changeAppState()
  }
  
  logout() {
    if (this.logState) {
      this.loginService.logout();
      this.changeAppState();
    }
  }

  changeAppState() {
    this.logState = this.loginService.getUsuarioLogado() ? true : false; 
    this.admState = this.loginService.getUsuarioLogado()?.permissao === 'ADMIN' ? true : false;  
  }

  changeLoadState(state : boolean) {
    this.loadState = state;
  }
}
