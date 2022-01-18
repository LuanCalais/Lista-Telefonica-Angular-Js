angular.module("listaTelefonica").config(function ($httpProvider) {
    // Adicionando qual interceptor estamos trabalhando por meio do método push()
    $httpProvider.interceptors.push("timesStampInterceptor");
    $httpProvider.interceptors.push("errorInterceptor");
    $httpProvider.interceptors.push("loadingInteceptor")
});