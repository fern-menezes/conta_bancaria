import readlinesync = require("readline-sync");
import { colors } from './.src/util/colors';
import { Conta } from "./.src/model/Conta"
import {ContaCorrente } from "./.src/model/ContaCorrente"
import { ContaPoupanca } from "./.src/model/ContaPoupanca";

export function main(){
    let opcao: number;

    //criar novas contas
    const c1 = new Conta(1, 123, 1, "Jonas", 100000);
    c1.visualizar();

    const c2 = new Conta(1, 123, 1, "Jonas", 100000);
    c2.visualizar();

    //deposito
    console.log(c1.depositar(200));

    c2.visualizar();
    //sacar
    console.log(c2.sacar(200));
    c2.visualizar();


    //criar novas contas corrente
    const cc1 = new ContaCorrente(3, 789, 1, "Andressa", 100, 1000);
    cc1.visualizar();
    cc1.sacar(500);
    cc1.visualizar();
    
     //criar nova conta poupança
     const cp1 = new ContaPoupanca(1, 987, 2, "Cleitinho", 500, 1000, 12);
     cp1.visualizar();
     cp1.depositar(500);
     cp1.visualizar();

    console.log('')


    while(true){
        console.log(colors.bg.black, colors.fg.bluestrong);
        console.log("==============================================");
        console.log("                🔷  F6 BANK                   ");
        console.log("==============================================");
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
        console.log("==============================================");
        console.log("                                              ");
        

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        console.log(colors.reset); 

        if(opcao == 9) {
            console.log("========================================================");
            console.log("\n🔸F6 Bank - Simplificando o seu futuro financeiro 🔸");
            console.log("\n=========🔹 Obrigada por usar nosso sistema 🔹=========");
            sobre();
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("Criar Conta");
                break;

            case 2:
                console.log("Listar todas as contas");
                break;

            case 3:
                console.log("Consultar dados da conta - Por número");
                break;

            case 4:
                console.log("Atualizar dados da conta");
                break;
            
            case 5:
                console.log("Apagar uma conta");
                break;

            case 6:
                console.log("Saque");
                break;

            case 7:
                console.log("Depósito");
                break;

            case 8:
                console.log("Transferência entre contas");
                break;

            default:
                console.log("Opção Inválida!❌");
                break;
                        
        }
    }
};
//console.log(colors.reset);

export function sobre(): void{
    console.log("\n========================================================");
    console.log("🔹Projeto Desenvolvido por:");
    console.log("🔹Fernanda Menezes - fernandar@genstudents.org");
    console.log("🔹github.com/fern-menezes");
    console.log("========================================================");

}

main()