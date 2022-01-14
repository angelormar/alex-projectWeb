import { Tipo } from './Tipo';

export class Dispositivo {
    id : number = 0;
    nome : string = '';
    tipo : Tipo = new Tipo();
    ligado : boolean = false;
}