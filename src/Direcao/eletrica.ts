import { direcao } from "./direcao";

export class eletrica implements direcao {
        
    public left() : void{
        console.log("(eletrica)Virando para esquerda");
    }
}