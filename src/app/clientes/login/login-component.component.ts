import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import{ FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/model/Cliente';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  formLogin = this.formBuilder.group(
    {
      login: this.formBuilder.control('',[Validators.required, Validators.minLength(3)]),
      senha: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
    });

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService, private app : AppComponent) { }


  ngOnInit(): void {  }
  
  logar() {
    if(this.formLogin.valid){

      let login = this.formLogin.value.login;
      let senha = this.formLogin.value.senha;

      this.loginService.login(new Cliente(0, '', login, senha, '','')).subscribe( u=> {
        this.loginService.setarUsuarioLogado(u);
        this.app.changeAppState();
        this.router.navigate(['/meusDispositivos']);
      });
      }else{
        alert('Login ou senha inválidos');
      }
    }

}
