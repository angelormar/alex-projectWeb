import { Component, OnInit } from '@angular/core';
import{ FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  users = [
    { name: 'admin', password: 'admin' },
    { name: 'user', password: '1234' },
  ];
  user = {
    name: '',
    password: ''
  };

  onSubmit(form : any) {
    //essa função vai validar o login e a senha do usuário
    //e retornar true ou false
    const user = this.users.find(u => u.name === form.value.name);
    if (!user) {
      alert('Usuário não encontrado');
      return false;
    }
    if (user.password !== form.value.pass) {
      alert('Senha incorreta');
      return false;
    }
    alert('Login efetuado com sucesso');
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
