import { carro } from "./carro";
import { ligaleve } from "./Roda/ligaleve";
import { comum } from "./Roda/comum";
import { eletrica } from "./Direcao/eletrica";
import { idraulica } from "./Direcao/idraulica";
import { combustao } from "./Motor/combustao";
import { manual } from "./cambio/manual";
import { eletrico } from "./Motor/eletrico";
import { automatico } from "./Cambio/automatico";

let motor1 = new combustao();
let dir1 = new eletrica();
let idraulica1 = new idraulica();
let roda1 = new comum();
let manual1 = new manual();
let motor2 = new eletrico();
let roda2 = new ligaleve();
let cambio2 = new automatico();
let carro1 = new carro(manual1, idraulica1, motor1, roda1);
let carro2 = new carro(cambio2, dir1,motor2,roda2);

carro1.left();
carro1.acelerar();
carro1.girar();
carro1.trocaMarcha();

carro2.left();
carro2.acelerar();
carro2.girar();
carro2.trocaMarcha();