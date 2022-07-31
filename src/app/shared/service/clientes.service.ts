import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  

  public static getClientes() {
    let clientes: Cliente[] = [];
    return clientes;
  }

  public static getClientesByUser(user: string) {
    let clientes: Cliente[] = [];
    clientes = this.getClientes();
    return clientes.find(cliente => cliente.login == user);
  }

  public static addCliente(value: Cliente) {
    let clientes: Cliente[] = [];
    clientes = this.getClientes();
    clientes.push(value);
    
    return clientes;
  }
  constructor() { }
}
