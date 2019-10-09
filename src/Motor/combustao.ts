import { motor } from "./motor";

export class combustao implements motor {
        
    public acelera() : void{
        console.log("(combustao)Acelera");
    }
}