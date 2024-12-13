import { Conta } from "./Conta";

export class  ContaCorrente extends Conta{

    //definir o limite da conta
    private _limite: number; //atributos


    //variáveis 
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo);
		this._limite = limite;
	}

	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;
	}
    /**o limite da conta precisa levar em consideração o saque, então o método saque que tem lá na conta, deve ser repetido aqui com os seguintes ajustes.
     * Essa é uma particularidade do tipo de conta corrente
    */
    public sacar (valor: number): boolean {
        //quando trabalhar com um atributo que está dentro da própria classe, usa sem o _ | quando usa o parâmetro de outra classe com o _
		if(valor > this.saldo + this._limite){
			console.log("⚠️ Saldo Insuficiente! ⚠️");
			return false;
		}

		this.saldo -=valor;
		return true;
	}
    //criar método visualizar (pra que serve isso? inserir explicação)

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da conta: ${this._limite}`);
    }

};