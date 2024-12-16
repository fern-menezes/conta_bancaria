import { Conta } from "./model/Conta";
import { ContaRepository } from "./model/ContaRepository";

export class ContaControler implements ContaRepository{

    //Coleção Array que vai armazenar os objetos Conta
    private listaContas = new Array<Conta>()

    //Controlar os números das contas
    public numero: number =0;

    
    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar();
        else{
            console.log("\nConta Não Encontrada!")
        }
            
    }

    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso!✅")
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA conta foi atualizada com sucesso!✔️")
        } else
            console.log("\nConta Não Encontrada!")
    }
    
    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("\nA conta foi deletada com sucesso!✔️")
        } else
            console.log("\nConta Não Encontrada!")
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //Métodos Auxiliares

    public gerarNumero():number{
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null{
        for (let conta of this.listaContas){
            if(conta.numero === numero)
                return conta;
        }
        return null;
    }
}