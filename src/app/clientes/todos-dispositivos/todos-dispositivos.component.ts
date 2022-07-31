import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Cliente } from 'src/app/shared/model/Cliente';
import { Dispositivo } from 'src/app/shared/model/Dispositivo';
import { Tipo } from 'src/app/shared/model/Tipo';
import { DispositivosService } from 'src/app/shared/service/dispositivos.service';
import { TiposService } from 'src/app/shared/service/tipos.service';

@Component({
  selector: 'app-todos-dispositivos',
  templateUrl: './todos-dispositivos.component.html',
  styleUrls: ['./todos-dispositivos.component.css']
})
export class TodosDispositivosComponent implements OnInit {
  
  ngOnInit(): void {
  }

  constructor(private tipoService: TiposService, private dispositivosService: DispositivosService, private app : AppComponent) {
    this.getTipos();
    this.getDispositivos();
    this.app.changeLoadState(true);
  }

  public dispositivos: Dispositivo[] = [];
  public tiposLista: Tipo[] = [];
  userLogged: any = JSON.parse(sessionStorage.getItem('usuario-logado') as string);
  nameReceived: any = '';
  deleteState: any = {};
  criandoDispositivo: boolean = false;
  objDispositivo: Dispositivo = new Dispositivo();
  redAlert: boolean = false;


  getDispositivos() {
    console.log(this.userLogged.id);
    this.dispositivosService.getDispositivos().subscribe(d => {
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

  deleteDispositivo(dispositivo: Number) {
    this.deleteState.id = dispositivo;
    this.deleteState.state = true;
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
