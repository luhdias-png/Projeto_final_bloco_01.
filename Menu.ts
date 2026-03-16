import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Pedidos } from "./src/model/Jogos";
import { tipagem } from "./src/model/Tipagem";
import { JogosController } from "./src/controller/JogosController";

function main() {
    let opcao: number;
    let listaGames: JogosController = new JogosController();

    while (true) {

        console.log("\n*****************************************************");
        console.log("                                                     ");
        console.log("              GEN DOS GAMES - E-COMMERCE              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Pedido de game.                      ");
        console.log("            2 - Listar todos os game.                ");
        console.log("            3 - Atualizar game                       ");
        console.log("            4 - Excluir pedido de game.              ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");



        console.log("\nEntre com a opção desejada: ");
        opcao = readlinesync.questionInt();

        if (opcao == 0) {
            console.log("Obrigado por utilizar nossos serviços!");
            break
        }

        switch (opcao) {
            case 1:
                
                console.log("Cadastrar um jogo");
                const id =  readlinesync.questionInt("Digite o numero de identificacao (ID) do jogo: ");
                const nome = readlinesync.question("Digite o nome do jogo: ");
                const quantidade = readlinesync.questionInt("Qual a quantidade em estoque: ");
                const valor = readlinesync.questionInt("Qual o valor do game: ");
                const desconto = readlinesync.questionInt("Qual o desconto do game (em caso negativo digite 0): ")
                const tipo = readlinesync.question("Qual o genero do game: ")
                const idade = readlinesync.questionInt("Qual a faixa de idade do game: ")
                
                let jogo = new tipagem(id, nome,valor,desconto,quantidade,idade,tipo);
                listaGames.cadastrarJogo(jogo);
                break;
            case 2:
                console.log("Listar todos os jogos cadastrados: ");
                listaGames.listaDeJogos();
                break;
            case 3:
                try {
                    console.log("Atualizar jogo!");

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
                break
            case 4:
                listaGames.deletarJogo(readlinesync.questionInt("Digite o Id do Jogo para deletar: "))
            default:
                console.log("Opção inválida!");
                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: André Lucas Dias Lima ");
    console.log("Data: 16/03/2026");
    console.log("Generation Brasil - andre_lucas.94@hotmail.com");
    console.log("https://github.com/luhdias-png");
    console.log("*****************************************************");
}

function keyPress(): void{
    console.log("\nPressione Enter para continuar...");
    readlinesync.prompt();
}

main();