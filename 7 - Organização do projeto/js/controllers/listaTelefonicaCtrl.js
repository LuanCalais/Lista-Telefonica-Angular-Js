angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter, $http) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];


    var carregarContatos = function () {
        $http.get("http://localhost:3412/contatos").success(function (data, status) {
            $scope.contatos = data;
        });
    }


    var carregarOperadoras = function () {
        $http.get("http://localhost:3412/operadoras").success(function (data, status) {
            $scope.operadoras = data;

        }).error(function (data, status) {
            $scope.message = "Aconteceu um problema " + data
        });
    }

    $scope.adicionarContato = function (contato) {

        $http.post("http://localhost:3412/contatos", contatos).success(function (data) {
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