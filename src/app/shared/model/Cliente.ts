export class Cliente{
    id : number = 0;
    nome : string= ''
    login : string= ''
    senha : string= '' 
    token : string = '';
    permissao : string = '';

    //empty constructor
    constructor(id : number, nome: string, login: string, senha: string, token: string, permissao: string){
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.token = token;
        this.permissao = permissao;
    }
}