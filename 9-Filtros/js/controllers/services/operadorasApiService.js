// SERVICE é um tipo de serviço similar ao construtor
angular.module('listaTelefonica').service('operadorasAPI', function ($http, config) {

    // Construtora SERVICE 
    this.getOperadoras = function () {
        return $http.get(config.baseURL + "/operadoras")
    }
});