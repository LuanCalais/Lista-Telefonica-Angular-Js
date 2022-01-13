// Interceptor de erro!
angular.module("listaTelefonica").factory("errorInterceptor", function ($q, $location) {
    // $q = Implementação do angular para promisses/deferred usado para rejeitar a promisses feita
    // $location = Encaminha/Redireciona esse usuário para outro destino
    return {
        responseError: function (rejection) {
            console.log(rejection);//debug

            // Se o status do rejection for igual a 404
            if (rejection.status === 404) {
                $location.path("/error");
            }
            return $q.reject(rejection);
        }
    };
});