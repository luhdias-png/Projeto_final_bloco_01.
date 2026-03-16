import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Pedidos } from "./src/model/Jogos";
import { tipagem } from "./src/model/Tipagem";

function main() {
    let opcao: number;

    while (true) {

        console.log("\n*****************************************************");
        console.log("                                                     ");
        console.log("              GEN DOS GAMES - E-COMMERCE              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Pedido de game.                      ");
        console.log("            2 - Listar todos os game.                ");
        console.log("            3 - Consultar game pelo ID               ");
        console.log("            4 - Atualizar game                       ");
        console.log("            5 - Excluir pedido de game.              ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");


        const jogos: tipagem  = new tipagem(1,"resident evil",200,0,30,18,"sobrevivencia");
        jogos.visualizar()



        console.log("\nEntre com a opção desejada: ");
        opcao = readlinesync.questionInt();

        if (opcao == 0) {
            console.log("Obrigado por utilizar nossos serviços!");
        }

        switch (opcao) {
            case 1:
                console.log("Cadastrar um jogo: ");
                keyPress();
                break;
            case 2:
                console.log("Listar todos os jogos cadastrados: ");
                keyPress();
                break;
            case 3:
                console.log("Consultar jogos por ID: ");
                keyPress();
                break;
            case 4:
                console.log("Atualizar Dados do Produto");
                keyPress();
                break;
            case 5:
                console.log("Apagar um jogo: ");
                keyPress();
                break;
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