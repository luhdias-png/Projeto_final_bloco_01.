import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { tipagem } from "./src/model/Tipagem";
import { JogosController } from "./src/controller/JogosController";

function main() {
    let opcao: number;
    let listaGames: JogosController = new JogosController();

    while (true) {

        console.log(colors.fg.cyan,"\n*****************************************************");
        console.log("*                                                   *");
        console.log("*             GEN DOS GAMES - E-COMMERCE            *");
        console.log("*                                                   *");
        console.log("*****************************************************");
        console.log("*                                                   *");
        console.log("*           1 - Pedido de game.                     *");
        console.log("*           2 - Listar todos os game.               *");
        console.log("*           3 - Atualizar game                      *");
        console.log("*           4 - Excluir pedido de game.             *");
        console.log("*           5 - Buscar por Id.                      *");
        console.log("*           0 - Sair                                *");
        console.log("*                                                   *");
        console.log("*****************************************************",colors.reset);



        console.log("\nEntre com a opção desejada: ");
        opcao = readlinesync.questionInt();

        if (opcao == 0) {
            console.log("Obrigado por utilizar nossos serviços!");
            sobre();
            break
        }

        switch (opcao) {
            case 1:
                while(true){ 
                console.log(colors.fg.green,"**********************************************************");    
                console.log(" *                 Cadastro de game.                      *");
                console.log(" **********************************************************",colors.reset);                
                const id =  readlinesync.questionInt("Digite o numero o Id do Jogo (IDs repetidos sao invalidos) do jogo: ");
                const game = listaGames.buscarPorId(id);
                    if(game){
                        console.log("ID repetido!")
                        continue
                    }
                    
                const nome = readlinesync.question("Digite o nome do jogo: ");
                const quantidade = readlinesync.questionInt("Qual a quantidade em estoque: ");
                const valor = readlinesync.questionInt("Qual o valor do game: ");
                const desconto = readlinesync.questionInt("Qual o desconto do game (em caso negativo digite 0): ")
                const tipo = readlinesync.question("Qual o genero do game: ")
                const idade = readlinesync.questionInt("Qual a faixa de idade do game: ")
                
                let jogo = new tipagem(id, nome,valor,desconto,quantidade,idade,tipo);
                listaGames.cadastrarJogo(jogo);
                keyPress();
                break;
                }
            case 2:
                console.log(colors.fg.blue,"**********************************************************");    
                console.log(" *               Listar Jogos Cadastrado                  *");
                console.log(" **********************************************************",colors.reset);
                listaGames.listaDeJogos();
                keyPress();
                break;
            case 3:
                try {
                console.log(colors.fg.yellow,"**********************************************************");    
                console.log(" *              Atualizar Cadastro de game.               *");
                console.log(" **********************************************************",colors.reset);

                    const id = readlinesync.questionInt("Digite o ID do jogo que deseja atualizar: ");
                    const game = listaGames.buscarPorId(id);
                    if(!game){
                        console.log("ID nao encontrado!")
                        break
                    }                   
                    const nome = readlinesync.question("Digite o novo nome do jogo: ");
                    const quantidade = readlinesync.questionInt("Digite a nova quantidade em estoque: ");
                    const valor = readlinesync.questionInt("Digite o novo valor do jogo: ");
                    const desconto = readlinesync.questionInt("Digite o novo desconto: ");
                    const tipo = readlinesync.question("Digite o genero do jogo: ");
                    const idade = readlinesync.questionInt("Digite a faixa de idade: ");

                    let jogoAtualizado = new tipagem(id, nome, valor, desconto, quantidade, idade, tipo);

                    listaGames.atualizarJogo(jogoAtualizado);

                } catch(error) {
                    console.log(error);
                }
                keyPress();
                break
            case 4:
                console.log(colors.fg.red,"**********************************************************");    
                console.log(" *              Deletar Registro de Jogos.                *");
                console.log(" **********************************************************",colors.reset);
                listaGames.deletarJogo(readlinesync.questionInt("Digite o Id do Jogo para deletar: "))
                keyPress();
                break
            case 5:
                console.log(colors.fg.magenta,"**********************************************************");    
                console.log(" *                     Buscar por Id                      *");
                console.log(" **********************************************************",colors.reset);
                const procurarId = readlinesync.questionInt("Digite o Id para procurar: ")
                const achouId = listaGames.buscarPorId(procurarId);

                    if(!achouId){
                        console.log("ID nao encontrado!")
                        keyPress();
                        break
                    }else{
                        achouId.visualizar()
                        keyPress();
                        break
                    }
                
            default:
                console.log("Opção inválida!");
                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log(colors.fg.cyan,"\n*****************************************************");
    console.log("Projeto Desenvolvido por: André Lucas Dias Lima ");
    console.log("Data: 16/03/2026");
    console.log("Generation Brasil - andre_lucas.94@hotmail.com");
    console.log("https://github.com/luhdias-png");
    console.log("*****************************************************",colors.reset);
}

function keyPress(): void{
    console.log("\nPressione Enter para continuar...");
    readlinesync.prompt();
    console.clear()
}

main();