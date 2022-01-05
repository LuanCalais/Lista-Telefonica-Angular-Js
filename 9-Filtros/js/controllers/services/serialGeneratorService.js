// PROVIDER serviço que da origem aos outros, podemos configura externamente
angular.module('listaTelefonica').provider('serialGenerator', function () {

    // Exemplo do porquê usar o provider
    var _length = 10;
    this.getLength = function () {
        return _length
    }
    this.setLength = function (length) {

    }
    // Podemos configura-lo externamente, então a injeção é o que vem de get
    this.get = function () { //EQUIVALENCIA DE UM FACTORY
        return {
            generate: function () {
                // Algoritmo que gera o serial
                var serial = "";
                while (serial.length < 20) {
                    //String.fromCharCode, Math.floor arredonda o Math.random que é um número aleatório (* 64 + 32) para o range pega um caracter
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});