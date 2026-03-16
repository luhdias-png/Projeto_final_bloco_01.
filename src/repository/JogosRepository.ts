import { Pedidos } from "../model/Jogos"

export interface InstrumentoRepository{

    cadastrar(jogos: Pedidos): void
    atualizar(jogos: Pedidos): void
    deletar(id: number): void
    listagemm():void
}