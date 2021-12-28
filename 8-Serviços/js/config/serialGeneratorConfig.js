// Configura provider gerador de serial SÓ FUNCIONA COM PROVIDER
angular.module('listaTelefonica').config(function (serialGeneratorProvider) {
    serialGeneratorProvider.setLength(100); //Configura para um serial com 100 caracteres
});