import { cambio } from "./cambio";

export class automatico implements cambio {
        
    public trocamarcha() : void{
        console.log("Trocando marcha(automatico)");
    }
}