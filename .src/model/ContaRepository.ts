import { Conta } from "./Conta";

export interface ContaRepository{

    //métodos do CRUD(Create, Read, Update e Delete)
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
    procurarPorTitular(titular: string):void;

    //Métodos bancários
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}