import readlinesync = require("readline-sync");
import { colors } from './.src/util/colors';
//Remove os objetos dessa classe, pois ela se tornou abstrata import { Conta } from "./.src/model/Conta"
import {ContaCorrente } from "./.src/model/ContaCorrente"
import { ContaPoupanca } from "./.src/model/ContaPoupanca";
import { ContaControler } from "./.src/ContaController";

export function main(){
    let opcao, agencia, numero, tipo, saldo, limite, numeroDestino, valor,aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];


    const contas = new ContaControler();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 123, 1, 'Bob Esponja Calça Quadrada', 5000, 1000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 456, 1, 'Lula Molusco', 1000.00, 100.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 121, 1, 'Patrick EStrela', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 789, 2, "Seu Sirigueijo", 1000000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 101, 2, "Sandy Bochechas", 15000, 15));
    

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
                console.log(colors.bg.black, colors.fg.bluestrong);
                console.log("Criar Conta \n");
                agencia = readlinesync.questionInt('Digite o numero da agencia: \n')

                console.log("Digite o Nome do Titular: ");
                titular = readlinesync.question('');
                console.log("Escolha o Tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                console.log("Informe o saldo da conta: ");
                saldo = readlinesync.questionFloat('');

                switch(tipo){
                    case 1:
                        console.log("Digite o Limite da Conta: ");
                        limite = readlinesync.questionFloat('')
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        
                    break;
                    case 2:
                        console.log("Digite o dia do Aniversário da Poupança: ");
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                        
                        break;
                }
                keyPress();
                break;

            case 2:
                console.log("🗒️ Listar todas as contas");
                contas.listarTodas();
                
                keyPress();
                break;

            case 3:
                console.log("🔠 Consultar dados da conta - Por número");
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');


                contas.procurarPorNumero(numero);

                 
                keyPress();
                break;

            case 4:
                console.log("📝 Atualizar dados da conta");

                agencia = readlinesync.questionInt('Digite o novo numero da agencia: \n')

                console.log("Digite o novo número da conta: ");
                numero = readlinesync.questionInt('');

                let conta = contas.buscarNoArray(numero);

                if(conta !== null){

                    console.log("Digite o novo nome do Titular: ");
                    titular = readlinesync.question('');

                    console.log("Escolha o Tipo da Conta: ");
                    tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                    console.log("Informe o saldo da conta: ");
                    saldo = readlinesync.questionFloat('');

                    tipo = conta.tipo;

                switch(tipo){
                    case 1:
                        console.log("Digite o Limite da Conta: ");
                        limite = readlinesync.questionFloat('')
                        contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                        
                    break;
                    case 2:
                        console.log("Digite o dia do Aniversário da Poupança: ");
                        aniversario = readlinesync.questionInt('');
                        contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                    break;
                }
                }else{
                    console.log("\nConta Não Encontrada!")
                }
               
                keyPress();
                break;

            case 5:
                console.log("🚮 Apagar uma conta");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');
                contas.deletar(numero);
                
                keyPress();
                break;


            case 6:
                console.log("💵 Saque");
                
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');
                

                console.log("Digite o valor do saque: ");
                valor = readlinesync.questionFloat('');
                contas.sacar(numero, valor);

                keyPress();
                break;

            case 7:
                console.log("💰 Depósito");
                
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');
                

                console.log("Digite o valor do depósito: ");
                valor = readlinesync.questionFloat('');
                contas.depositar(numero, valor);

                keyPress();
                break;

            case 8:
                console.log("📤 Transferência entre contas");
                
                console.log("Digite o número da conta de origem: ");
                numero = readlinesync.questionInt('');
                console.log("Digite o número da conta de destino: ");
                numeroDestino = readlinesync.questionInt('');

                console.log("Digite o valor da transferência: ");
                valor = readlinesync.questionFloat('');

                contas.transferir(numero, numeroDestino, valor);
                
                
                keyPress();
                break;

            default:
                console.log("Opção Inválida!❌");
                console.log(colors.reset);
                break;
                        
        }
    }
};
console.log(colors.reset);

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