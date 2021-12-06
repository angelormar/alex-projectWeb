import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {

  dispositivos: any[] = [
    { id: 1, nome: 'Dispositivo 1', tipo: 'Som', icon: 'speaker_group', ligado: true },
    { id: 2, nome: 'Dispositivo 2', tipo: 'Tomada', icon: 'outlet', ligado: false },
    { id: 3, nome: 'Dispositivo 3', tipo: 'Televisão', icon: 'connected_tv', ligado: true },
    { id: 4, nome: 'Dispositivo 4', tipo: 'Lâmpada', icon: 'tungsten', ligado: true },
    { id: 5, nome: 'Dispositivo 5', tipo: 'Ar Condicionado', icon: 'ac_unit', ligado: true },
  ];

  idIncrement: number = 6;

  nameReceived: any = '';
  criandoDispositivo: boolean = false;

  tiposLista: any[] = [
    'Tomada', 'Televisão', 'Ar Condicionado', 'Dispositivo', 'Lâmpada', 'Outros'
  ];

  objDispositivo: any = {
    nome: '',
    tipo: '',
    icon: '',
    ligado: false
  };
  redAlert : boolean = false;

  onCreationProcessStarted() {
    this.criandoDispositivo = true;
    this.objDispositivo.nome = this.nameReceived;
  }
  onCreating() {
    if (this.objDispositivo.nome === '' || (this.objDispositivo.tipo ?? '') === '') {
      this.redAlert = true;
      return;
    }
    this.redAlert = false;
    this.objDispositivo.icon = this.objDispositivo.tipo === 'Tomada' ? 'outlet' :
      this.objDispositivo.tipo === 'Lâmpada' ? 'tungsten' : this.objDispositivo.tipo === 'Televisão' ?
        'connected_tv' : this.objDispositivo.tipo === 'Ar Condicionado' ?
          'ac_unit' : this.objDispositivo.tipo === 'Som' ? 'speaker_group' : this.objDispositivo.tipo === 'Outros' ? 'devices' : '';

    this.objDispositivo.id = this.idIncrement++;

    this.dispositivos.push(this.objDispositivo);
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
        dispositivo.tipo.toLowerCase().includes(this.nameReceived.toLowerCase());
    });
  }


  constructor() { }

  ngOnInit(): void {
  }

}
