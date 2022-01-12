angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator, $location, operadoras) {

    $scope.operadoras = operadoras.data;//linkando

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();

            //Depois do contato ser adicionado, iremos voltar para visualizar os contatos adicionados
            $location.path("/contatos");
        });
    };

});