import readlinesync = require("readline-sync");
import { colors } from './.src/util/colors';

export function main(){
    let opcao: number;

    while(true){
        console.log(colors.bg.black, colors.fg.green);
        console.log("**********************************************");
        console.log("                   F6 BANK                    ");
        console.log("**********************************************");
        console.log("                                              ");
        console.log("      1 - Crie sua conta                      ");
        console.log("      2 - Listar todas as contas              ");
        console.log("      3 - Buscar conta por número             ");
        console.log("      4 - Atualizar dados da conta            ");
        console.log("      5 - Apagar Conta                        ");
        console.log("      6 - Sacar                               ");
        console.log("      7 - Depositar                           ");
        console.log("      8 - Transferir valores entre contas     ");
        console.log("      9 - Sair                                ");
        console.log("                                              ");
        console.log("**********************************************");
        console.log("                                              ");
        //console.log(colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 9) {
            console.log("**************************************************");
            console.log("\nF6 Bank - Simplificando o seu futuro financeiro ");
            sobre();
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("\n Criar Conta \n\n");
                break;

            case 2:
                console.log("\n Listar todas as contas \n\n");
                break;

            case 3:
                console.log("\n Consultar dados da conta - Por número \n\n");
                break;

            case 4:
                console.log("\n Atualizar dados da conta \n\n");
                break;
            
            case 5:
                console.log("\n Apagar uma conta \n\n");
                break;

            case 6:
                console.log("\n Saque\n\n");
                break;

            case 7:
                console.log("\n Depósito \n\n");
                break;

            case 8:
                console.log("\nTransferência entre contas \n\n");
                break;

            default:
                console.log("\nOpção Inválida!\n");
                break;
                        
        }
    }
};
console.log(colors.reset);

export function sobre(): void{
    console.log("\n**************************************************");
    console.log("\nProjeto Desenvolvido por:");
    console.log("\nFernanda Menezes - fernandar@genstudents.org");
    console.log("\ngithub.com/fern-menezes");
    console.log("\n**************************************************");

}

main()