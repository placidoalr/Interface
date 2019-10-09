import { cambio } from "./Cambio/cambio";
import { direcao } from "./Direcao/direcao";
import { motor } from "./Motor/motor";
import { rodado } from "./Roda/rodado";


export class carro {
    private cambio : cambio;
    private direcao : direcao;
    private motor : motor;
    private rodado : rodado;
    constructor(cambio : cambio, direcao : direcao, motor : motor, rodado : rodado){
        this.cambio = cambio;
        this.direcao = direcao;
        this.motor = motor;
        this.rodado = rodado;
    }

    public trocaMarcha() : void{
        this.cambio.trocamarcha();
    }

    public acelerar() : void {
        this.motor.acelera();
    }

    public left() : void {
        this.direcao.left();
    }
    public girar() : void {
        this.rodado.gira();
    }
}
