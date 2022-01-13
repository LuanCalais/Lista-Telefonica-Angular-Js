angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, contatosAPI) {
    // RouteParams para ver qual parâmetro chegou da rota
    console.log($routeParams.id);//debug

    // Se for um sucesso, aciona a function que armazena no scope o contato em questão
    contatosAPI.getContato($routeParams.id).success(function (contato) {
        $scope.contato = contato.data;
    });
});