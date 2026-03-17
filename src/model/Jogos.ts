export abstract class Pedidos{

    //Atributo:
    private _id: number;
    private _nome: string;
    private _valor: number;
    private _desconto: number;
    private _quantidade: number;


constructor(id: number, nome: string, valor: number, desconto: number, quantidade: number){

    this._id = id;
    this._nome = nome;
    this._valor = valor;
    this._desconto = desconto;
    this._quantidade = quantidade;
}
    
        public get id() {
            return this._id;
        }

        public get nome() {
            return this._nome;
        }

        public get valor() {
            return this._valor;
        }

        public get desconto() {
            return this._desconto;
        }

        public get total() {
            return this._quantidade;
        }

        //PUBLIC SET
        public set id(id: number){;
            this._id = id;
        }

        public set nome(nome: string){
            this._nome = nome;
        }

        public set valor(valor: number){
            this._valor =  valor;
        }

        public set desconto(desconto: number){
            this._desconto = desconto
        }

        public set quantidade(quantidade: number){
            this._quantidade = quantidade
            
        }

        public visualizar(): void{
            
            const total = this.valor * (1-this.desconto/100)

            console.log(`\n********************************************`);
            console.log(`Id: ${this._id}`);
            console.log(`Nome: ${this._nome}`);
            console.log(`Quantidade em estoque: ${this._quantidade}`);
            console.log(`Valor do game: R$${this._valor}`);
            console.log(`Valor do Desconto: ${this._desconto}%`);
            console.log(`Valor real do game com desconto do game: R$${total}`);
        }


}