//Interceptor de loading - é necessário fazer todos os requests, pois em cada um dele será adicionado o loading
angular.module("listaTelefonica").factory("loadingInterceptor", function ($q, $rootScope, $timeout) {

    return {

        request: function (config) {
            $rootScope.loading = true;
            return config;
        },

        requestError: function (rejection) {
            $rootScope.loading = false;
            return $q.reject(rejection);
        },

        response: function (response) {
            //timeout agenda no futuro a execução de algo, aplicado aqui para testes
            $timeout(function () {
                $rootScope.loading = false;
            }, 2000);
            return response;
        },

        responseError: function (rejection) {
            $rootScope.loading = false;
            return $q.reject(rejection);
        }

    };

});