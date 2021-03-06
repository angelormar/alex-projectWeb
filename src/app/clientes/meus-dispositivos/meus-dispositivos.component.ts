import { TiposService } from './../../shared/service/tipos.service';
import { Tipo } from './../../shared/model/Tipo';
import { Component, OnInit } from '@angular/core';
import { DispositivosService } from 'src/app/shared/service/dispositivos.service';
import { Dispositivo } from 'src/app/shared/model/Dispositivo';
import { Cliente } from 'src/app/shared/model/Cliente';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-meus-dispositivos',
  templateUrl: './meus-dispositivos.component.html',
  styleUrls: ['./meus-dispositivos.component.css']
})
export class MeusDispositivosComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private tipoService: TiposService, private dispositivosService: DispositivosService, private app : AppComponent) {
    this.app.changeLoadState(true);
    this.getTipos();
    this.getDispositivos();
  }

  public dispositivos: Dispositivo[] = [];
  public tiposLista: Tipo[] = [];
  userLogged: any = JSON.parse(sessionStorage.getItem('usuario-logado') as string);
  deleteState: any = {};
  nameReceived: any = '';
  criandoDispositivo: boolean = false;
  objDispositivo: Dispositivo = new Dispositivo();
  redAlert: boolean = false;

  getDispositivos() {
    console.log(this.userLogged.id);
    this.dispositivosService.getDispositivosCliente(new Cliente(this.userLogged.id, '', '', '', '', '')).subscribe(d => {
      console.log(d)
      this.dispositivos = d;
      this.app.changeLoadState(false);
      this.deleteState.state = false;
    });
  }

  getTipos() {
    this.tipoService.getTipos().subscribe(t => {
      console.log(t);
      this.tiposLista = t;
    });
  }

  newDispositivo(dispositivo: Dispositivo) {
    this.dispositivosService.newDispositivo(dispositivo).subscribe(d => {
      this.getDispositivos();
    });
  }

  deleteDispositivo(dispositivo: Number) {
    this.deleteState.state = true;
    this.deleteState.id = dispositivo;
    this.dispositivosService.deleteDispositivo(dispositivo).subscribe(d => {
      this.getDispositivos();
    });
  }

  mudaEstadoDispositivo(dispositivo: any) {
    dispositivo.ligado = dispositivo.ligado === 'S' ? 'N' : 'S';
    this.dispositivosService.mudaEstadoDispositivo(dispositivo).subscribe(d => {
      this.getDispositivos();
    });
  }

  onCreationProcessStarted() {
    this.criandoDispositivo = true;
    this.objDispositivo.nome = this.nameReceived;
  }
  
  onCreating() {
    this.app.changeLoadState(true);
    console.log(this.objDispositivo);
    if (this.objDispositivo.nome === '' || this.objDispositivo.idtipo == 0) {
      this.redAlert = true;
      return;
    }
    this.redAlert = false;
    console.log('debug')
    this.objDispositivo.tipo = this.tiposLista.filter(t => t.id == this.objDispositivo.idtipo)[0];
    this.objDispositivo.usuario = new Cliente(this.userLogged.id, '', '', '', '', '');
    console.log(this.objDispositivo);
    //this.dispositivos.push(this.objDispositivo);
    this.newDispositivo(this.objDispositivo);
    this.onCreationFinished()
  }

  onCreationFinished() {
    this.objDispositivo = new Dispositivo();
    this.criandoDispositivo = false;
  }

  onDeletion(dispositivo: any) {
    this.app.changeLoadState(true);
    this.deleteDispositivo(dispositivo.id);
  }

  obterDispositivos() {
    return this.dispositivos.filter(dispositivo => {
      return dispositivo.nome.toLowerCase().includes(this.nameReceived.toLowerCase()) ||
        dispositivo.tipo.nome.toLowerCase().includes(this.nameReceived.toLowerCase());
    });
  }
}
