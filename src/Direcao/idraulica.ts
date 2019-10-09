import { direcao } from "./direcao";

export class idraulica implements direcao {
        
    public left() : void{
        console.log("(idraulica)Virando para esquerda");
    }
}