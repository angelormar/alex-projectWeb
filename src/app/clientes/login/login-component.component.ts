import { Cliente } from './../../shared/model/Cliente';
import { Component, OnInit } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { ClientesService } from 'src/app/shared/service/clientes.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  users: Cliente[] = ClientesService.getClientes();
  user: Cliente = new Cliente();

  onSubmit(form : any) {
    //essa função vai validar o login e a senha do usuário
    //e retornar true ou false
    const user = this.users.find(u => u.user === form.value.name);
    if (!user) {
      alert('Usuário não encontrado');
      return false;
    }
    if (user.senha !== form.value.pass) {
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
