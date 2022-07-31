import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/model/Cliente';
import { Dispositivo } from 'src/app/shared/model/Dispositivo';
import { Tipo } from 'src/app/shared/model/Tipo';
import { DispositivosService } from 'src/app/shared/service/dispositivos.service';
import { TiposService } from 'src/app/shared/service/tipos.service';

@Component({
  selector: 'app-cadastro-tipos',
  templateUrl: './cadastro-tipos.component.html',
  styleUrls: ['./cadastro-tipos.component.css']
})
export class CadastroTiposComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private tipoService: TiposService, private dispositivosService: DispositivosService) {
    this.getTipos();
  }

  public tiposLista: Tipo[] = [];
  userLogged: any = JSON.parse(sessionStorage.getItem('usuario-logado') as string);
  nameReceived: any = '';
  criandoTipo: boolean = false;
  objTipo: Tipo = new Tipo(0, '', '');
  redAlert: boolean = false;

  getTipos() {
    this.tipoService.getTipos().subscribe(t => {
      console.log(t);
      this.tiposLista = t;
    });
  }

  newTipo(tipo: Tipo) {
    this.tipoService.newTipo(tipo).subscribe(t => {
      this.getTipos();
    });
  }

  deleteTipo(tipo: Number) {
    this.tipoService.deleteTipo(tipo).subscribe(t => {
      if (t === -1) alert('Erro ao deletar, o tipo já está em uso.')
      this.getTipos();
    });
  }

  onCreationProcessStarted() {
    this.criandoTipo = true;
    this.objTipo.nome = this.nameReceived;
  }
  
  onCreating() {
    if (this.objTipo.nome === '' || this.objTipo.icon === '') {
      this.redAlert = true;
      return;
    }
    this.redAlert = false;

    console.log(this.objTipo);

    this.newTipo(this.objTipo)
    this.onCreationFinished()
  }

  onCreationFinished() {
    this.objTipo = new Tipo(0, '', '');
    this.criandoTipo = false;
  }

  onDeletion(tipo: any) {
    this.deleteTipo(tipo.id);
  }

  obterTipos() {
    return this.tiposLista.filter(tipo => {
      return tipo.nome.toLowerCase().includes(this.nameReceived.toLowerCase()) ||
        tipo.nome.toLowerCase().includes(this.nameReceived.toLowerCase());
    });
  }

}
