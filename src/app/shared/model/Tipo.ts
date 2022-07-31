export class Tipo {
    id : number = 0;
    nome : string = '';
    icon : string = '';

    constructor(id : number, nome : string, icon : string) {
        this.id = id;
        this.nome = nome;
        this.icon = icon;
    }
}