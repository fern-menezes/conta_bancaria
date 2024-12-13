export abstract class Conta{

    /**Definir o modelo de dados | por boas praticas no Typescript usa-se o _ na frente da palavra para indicar que ela é privada*/
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}


    // gerar todos os métodos get e set, com a extensão Typescript ToolBox

	public get numero(): number {
		return this._numero;
	}
    
	public get agencia(): number {
		return this._agencia;
	}
    
	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}



	public sacar (valor: number): boolean {
		if(valor > this._saldo){
			console.log("⚠️ Saldo Insuficiente! ⚠️");
			return false;
		}

		this._saldo -=valor;
		return true;
	}

	public depositar (valor: number){
		this._saldo +=valor;
	}

	public visualizar(){

		let tipo: string;
		switch(this._tipo){
			case 1:
				tipo = "Conta Corrente";
				break;
			case 2:
				tipo = "Conta Poupança";
				break;
			default:
				tipo = "Tipo Inválido ⚠️";
		}
		
    //usar os métodos get e set para gerar as informações no console
        console.log("==============================================");
        console.log("               DADOS DA CONTA                 ");
        console.log("==============================================");
        console.log(`Numero da Conta: ${this._numero}`);
        console.log(`Numero da Agência: ${this._agencia}`);
        console.log(`Tipo da Conta: ${tipo}`);
        console.log(`Nome do titular da Conta: ${this._titular}`);
        console.log(`Saldo da Conta: ${this._saldo}`);
	}
}