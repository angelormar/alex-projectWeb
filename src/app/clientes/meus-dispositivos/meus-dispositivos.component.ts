import { Tipo } from './../../shared/model/Tipo';
import { Component, OnInit } from '@angular/core';
import { DispositivosService } from 'src/app/shared/service/dispositivos.service';
import { TiposService } from 'src/app/shared/service/tipos.service';
import { ClientesService } from 'src/app/shared/service/clientes.service';
import { Dispositivo } from 'src/app/shared/model/Dispositivo';
import { Cliente } from 'src/app/shared/model/Cliente';

@Component({
  selector: 'app-meus-dispositivos',
  templateUrl: './meus-dispositivos.component.html',
  styleUrls: ['./meus-dispositivos.component.css']
})
export class MeusDispositivosComponent implements OnInit {

  //pega todos os dispositivos e coloca num array 
   
  dispositivos: Dispositivo[] = DispositivosService.getDispositivos(); 
  tiposLista : Tipo[] = TiposService.getTipos();

  idIncrement: number = 6;

  nameReceived: any = '';
  criandoDispositivo: boolean = false;

  objDispositivo: any = {};
  redAlert : boolean = false;

  onCreationProcessStarted() {
    this.criandoDispositivo = true;
    this.objDispositivo.nome = this.nameReceived;
  }
  onCreating() {
    
    console.log(this.objDispositivo)
    if (this.objDispositivo.nome === '' || (this.objDispositivo.tipo ?? '') === '') {
      this.redAlert = true;
      return;
    }
    this.redAlert = false;
    this.objDispositivo.tipo = TiposService.getTipoById(Number(this.objDispositivo.tipo));
    this.objDispositivo.id = this.idIncrement++;


    this.dispositivos.push(this.objDispositivo);
    console.log(this.dispositivos);
    this.onCreationFinished()
  }

  onCreationFinished() {
    this.objDispositivo = {}
    this.criandoDispositivo = false;
  }

  mudaEstadoDispositivo(dispositivo: any) {
    dispositivo.ligado = !dispositivo.ligado;
  }

  onDeletion(dispositivo : any) {
    this.dispositivos = this.dispositivos.filter(d => d.id !== dispositivo.id);
  }

  obterDispositivos() {
    return this.dispositivos.filter(dispositivo => {
      return dispositivo.nome.toLowerCase().includes(this.nameReceived.toLowerCase()) ||
        dispositivo.tipo.nome.toLowerCase().includes(this.nameReceived.toLowerCase());
    });
    return this.dispositivos;
  }


  constructor() { }

  ngOnInit(): void {
  }
}
