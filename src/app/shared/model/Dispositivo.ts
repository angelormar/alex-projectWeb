import { Cliente } from './Cliente';
import { Tipo } from './Tipo';

export class Dispositivo {
    id : number = 0;
    nome : string = '';
    tipo : Tipo = new Tipo(0, '', '');
    idtipo : number = 0;
    ligado : string = '';
    usuario : Cliente = new Cliente(0, '', '', '', '', '');
}