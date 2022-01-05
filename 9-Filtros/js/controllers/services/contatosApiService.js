//FACTORY Uma fábrica de uma certa função, similar a criar uma função em js que cria objetos 
angular.module('listaTelefonica').factory("contatosAPI", function ($http, config) {

    // Get para o contato ser buscado
    var _getContatos = function () {
        return $http.get(config.baseURL + "/contatos");
    }

    // Post para que o contato seja salvo
    var _saveContato = function (contato) {
        $http.post(config.baseURL + "/contatos", contato);
    }

    //retorna a variável fábrica instanciada na listaTelefonicaCtrl.js
    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    }
})