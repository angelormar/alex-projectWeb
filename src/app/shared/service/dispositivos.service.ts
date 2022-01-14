import { TiposService } from './tipos.service';
import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

 public static getDispositivos(){
      let dispositivos: Dispositivo[] = [];
      dispositivos = [{
        id : 1,
        nome : 'Ar do quarto',
        tipo : TiposService.getTipoById(1),
        ligado : true
      },
      {
        id : 2,
        nome : 'Luz do quarto',
        tipo : TiposService.getTipoById(2),
        ligado : true
      },
      {
        id : 3,
        nome : 'Ventilador',
        tipo : TiposService.getTipoById(3),
        ligado : false
      },
      {
        id : 4,
        nome : 'Caixa de som',
        tipo : TiposService.getTipoById(4),
        ligado : true
      },
      {
        id : 5,
        nome : 'Samsung TV',
        tipo : TiposService.getTipoById(5),
        ligado : true
      }];
      return dispositivos!;
  }

  public static getDispositivoById(id: number){
    let dispositivos: Dispositivo[] = [];
    dispositivos = this.getDispositivos();
    return dispositivos.find(d => d.id === id);

  }
  
  constructor() { }
  
}
