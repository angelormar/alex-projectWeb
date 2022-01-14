import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  public static getClientes() {
    let clientes: Cliente[] = [];

    clientes = [{
      nome: 'Angelo',
      user: 'angelo',
      senha: '123'
    },
    {
      nome: 'João',
      user: 'joao',
      senha: '123'
    },
    {
      nome: 'Maria',
      user: 'maria',
      senha: '123'
    }];

    return clientes;
  }

  public static getClientesByUser(user: string) {
    let clientes: Cliente[] = [];
    clientes = this.getClientes();
    return clientes.find(cliente => cliente.user == user);
  }

  public static addCliente(value: Cliente) {
    let clientes: Cliente[] = [];
    clientes = this.getClientes();
    clientes.push(value);
    
    return clientes;
  }
  constructor() { }
}
