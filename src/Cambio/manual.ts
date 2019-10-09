import { cambio } from "./cambio";

export class manual implements cambio {
        
    public trocamarcha() : void{
        console.log("Trocando marcha(manual)");
    }
}