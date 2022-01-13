//Timestamp Interceptor: Adiciona uma marcação contendo um timestamp em todas as requisições (ajuda na admnistração do cache)
angular.module("listaTelefonica").factory("timesStampInterceptor", function () {
    return {
        request: function (config) {
            var url = config.url;
            // Se a url possui uma index com a string view retorna normal
            if (url.indexOf('view') > -1) return config;
            // Pega o tempo em milisegundos e adiciona na url
            var timestamp = new Date().getTime();
            // Cria uma marcação única a cada requisição o que ajuda a burlar mecanismos de cache
            config.url = url + "?timestamp=" + timestamp;
            return config;
        }
    };
});