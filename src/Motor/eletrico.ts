import { motor } from "./motor";

export class eletrico implements motor {
        
    public acelera() : void{
        console.log("(eletrico)Acelera");
    }
}