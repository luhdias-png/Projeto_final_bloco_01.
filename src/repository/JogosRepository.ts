import { Pedidos } from "../model/Jogos"
import { tipagem } from "../model/Tipagem"

export interface JogosRepository{

    cadastrar(jogos: Pedidos): void
    atualizar(jogos: Pedidos): void
    deletar(id: number): void
    listagem():void
}