angular.module("listaTelefonica").directive("uiDate", function () {
    // Retorna objeto de definição
    return {
        // Require = "Eu quero ter acesso a API ngModel"
        require: "ngModel",
        // scope - é o escopo em que estamos, para se quisermos isolar tambem
        // element - operações disponíveis utilizando jqLite(olhar documentação do angular js para mais informações)
        // attrs - atributos deste elemento
        // ctrl - o que está vindo de requireno caso controller
        link: function (scope, element, attrs, ctrl) {

            var _foromatDate = function (date) {

            }


            element.bind("keyup", function () {//evento que dispara a função assim que a tecla for levantada
                //Transforma os valores de entrada ctrl.viewValue - mostra os valores de entrada
                ctrl.$setViewValue(ctrl.$viewValue);
                ctrl.$render();//Executa OBS: São funções da api de ng-model 
            });
        }
    };
});