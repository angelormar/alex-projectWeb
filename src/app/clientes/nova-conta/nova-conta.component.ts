import { Cliente } from './../../shared/model/Cliente';
import { Component, OnInit } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { ClientesService } from 'src/app/shared/service/clientes.service';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html', 
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent implements OnInit {

  user: Cliente = new Cliente();

  onSubmit(form : any) {
    try{
      ClientesService.addCliente(form.value);
      alert('Usuário cadastrado com sucesso');
    }catch(e){
      alert('Erro ao cadastrar usuário'); 
    }

  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
