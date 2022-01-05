angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter, contatosAPI) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];


    var carregarContatos = function () {
        // Chamando o metodo get da service "Factory"
        contatosAPI.getContatos().success(function (data, status) {
            $scope.contatos = data;
        }).error(function (data, status) {
            $scope.message = "Aconteceu um problema: " + data;
        })
    }

    // Utilizando construtora de um "Service"
    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data, status) {
            $scope.operadoras = data;

        }).error(function (data, status) {
            $scope.message = "Aconteceu um problema " + data
        });
    }

    $scope.adicionarContato = function (contato) {

        // provider        service          metodo
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        // Chamando o metodo post da service "Factory"
        contatosAPI.saveContato(contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });

    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();
});