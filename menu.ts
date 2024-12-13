import readlinesync = require("readline-sync");
import { colors } from './.src/util/colors';
//Remove os objetos dessa classe, pois ela se tornou abstrata import { Conta } from "./.src/model/Conta"
import {ContaCorrente } from "./.src/model/ContaCorrente"
import { ContaPoupanca } from "./.src/model/ContaPoupanca";
import { ContaControler } from "./.src/ContaController";

export function main(){
    let opcao, agencia, numero, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];


    const contas = new ContaControler();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Bob Esponja Calça Quadrada', 5000, 1000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4567, 1, 'Lula Molusco', 1000.00, 100.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1213, 1, 'Patrick EStrela', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 7891, 2, "Seu Sirigueijo", 1000000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1011, 2, "Sandy Bochechas", 15000, 15));
    

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
            console.log(colors.bg.black, colors.fg.bluestrong);
            console.log("========================================================");
            console.log("\n🔸F6 Bank - Simplificando o seu futuro financeiro 🔸");
            console.log("\n=========🔹 Obrigada por usar nosso sistema 🔹=========");
            sobre();
            console.log(colors.reset);
            process.exit(0);
            
        }

        switch(opcao){
            case 1:
                console.log(colors.bg.black, colors.fg.bluestrong, "Criar Conta \n");
                agencia = readlinesync.questionInt('Digite o numero da agencia: \n')

                console.log("Digite o Nome do Titular: ");
                titular = readlinesync.question('');
                console.log("Escolha o Tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                console.log("Informe o saldo da conta: ", colors.reset);
                saldo = readlinesync.questionFloat('');

                switch(tipo){
                    case 1:
                        console.log(colors.bg.black, colors.fg.bluestrong,"Digite o Limite da Conta: ");
                        limite = readlinesync.questionFloat('')
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        console.log(colors.reset); 
                    break;
                    case 2:
                        console.log(colors.bg.black, colors.fg.bluestrong,"Digite o dia do Aniversário da Poupança: ");
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                        console.log(colors.reset); 
                        break;
                }
                keyPress();
                break;

            case 2:
                console.log("🗒️Listar todas as contas");
                contas.listarTodas();
                
                keyPress();
                break;

            case 3:
                console.log(colors.bg.black, colors.fg.bluestrong,"Consultar dados da conta - Por número");
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');


                contas.procurarPorNumero(numero);

                console.log(colors.reset); 
                keyPress();
                break;

            case 4:
                console.log("Atualizar dados da conta");


                keyPress();
                break;

            case 5:
                console.log("Apagar uma conta");
                
                
                keyPress();
                break;


            case 6:
                console.log("Saque");
                
                keyPress();
                break;

            case 7:
                console.log("Depósito");
                
                keyPress();
                break;

            case 8:
                console.log("Transferência entre contas");
                
                keyPress();
                break;

            default:
                console.log("Opção Inválida!❌");
                break;
                        
        }
    }
};
//console.log(colors.reset);

export function sobre(): void{
    console.log(colors.bg.black, colors.fg.bluestrong,"\n========================================================");
    console.log("🔹Projeto Desenvolvido por:");
    console.log("🔹Fernanda Menezes - fernandar@genstudents.org");
    console.log("🔹github.com/fern-menezes");
    console.log("========================================================");
    console.log(colors.reset);

}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main()