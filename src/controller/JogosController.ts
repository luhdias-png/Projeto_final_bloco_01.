import { Pedidos } from "../model/Jogos"
import { colors } from "../util/Colors";

export class JogosController implements JogosController{
    private listaJogos = new Array<Pedidos>();

    cadastrarJogo(jogo: Pedidos):void{
        this.listaJogos.push(jogo);
        console.log(`${colors.fg.green}O jogo foi cadastrado com sucesso!${colors.reset}`);
    }

    atualizarJogo(jogo: Pedidos){
        let cont: number = 0;
        for (let i of this.listaJogos){
            if(i.id == jogo.id){
                this.listaJogos[cont] = jogo;
                console.log("O game foi atualizado com sucesso!");
                break
            }else{
            }
            console.log(`${colors.fg.red}Jogo no encontrado!${colors.reset}`);
            cont ++
        }
    }

    buscarPorId(id: number) {
    return this.listaJogos.find(jogo => jogo.id === id);

}

    listaDeJogos(): void{
        for(let j of this.listaJogos){
            j.visualizar()
        }
    }


    deletarJogo(id: number):void {

        const indice = this.listaJogos.findIndex(jogo => jogo.id === id)
        if(indice !== -1){
            this.listaJogos.splice(indice,1);
            console.log(`${colors.fg.green}Jogo removido com sucesso!${colors.reset}`);

        } else {
            console.log(`${colors.fg.red}Erro: ID inválido ou não encontrado.${colors.reset}`);
            }

        }
    }
