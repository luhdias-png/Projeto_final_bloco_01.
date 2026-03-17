import { Pedidos } from "./Jogos";

export class tipagem extends Pedidos{

    private _idade: number;
    private _tipo: string;


    constructor(id: number, nome: string, valor: number, desconto: number,quantidade: number, idade: number, tipo: string){
    super(id, nome, valor, desconto, quantidade);
    this._idade = idade;
    this._tipo = tipo;
    }

    public get idade(){
        return this._idade;
    }

    public get tipo(){
        return this._tipo
    }

    public set idade(Idade: number){
        this._idade = Idade
    }

    public set tipo(Tipo: string){
        this._tipo = Tipo
    }

    public visualizar(): void {
        super.visualizar();
        console.log("O genero do game é: " + this._tipo);
        console.log("Recomendado para pessoas de "+ this._idade," anos.");
        console.log("********************************************")
    }
}