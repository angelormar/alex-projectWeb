import { Tipo } from './../model/Tipo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  public static getTipos(){
      let tipos : Tipo [] = [];
      tipos = [{
        id : 1,
        nome : 'Ar Condicionado ',
        icon : 'ac_unit'
      },
      {
        id : 2,
        nome : 'Lâmpada',
        icon : 'tungsten'
      },
      {
        id : 3,
        nome : 'Tomada',
        icon : 'outlet'
      },
      {
        id : 4,
        nome : 'Som',
        icon : 'speaker_group'
      },
      {
        id : 5,
        nome : 'Televisão',
        icon : 'connected_tv'
      },
      {
        id : 6,
        nome : 'Outros',
        icon : 'more_horiz'
      }];
      return tipos!;
  }

  public static getTipoById(id: number){
    let tipos : Tipo [] = [];
    tipos = this.getTipos();
    return tipos.find(t => t.id === id)!;
  }


  constructor() { }
}
