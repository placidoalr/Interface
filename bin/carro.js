"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro = /** @class */ (function () {
    function carro(cambio, direcao, motor, rodado) {
        this.cambio = cambio;
        this.direcao = direcao;
        this.motor = motor;
        this.rodado = rodado;
    }
    carro.prototype.trocaMarcha = function () {
        this.cambio.trocamarcha();
    };
    carro.prototype.acelerar = function () {
        this.motor.acelera();
    };
    carro.prototype.left = function () {
        this.direcao.left();
    };
    carro.prototype.girar = function () {
        this.rodado.gira();
    };
    return carro;
}());
exports.carro = carro;
