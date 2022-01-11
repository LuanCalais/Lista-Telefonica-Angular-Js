angular.module("listaTelefonica").directive("uiDate", function ($filter) {
    // Retorna objeto de definição
    return {
        // Require = "Eu quero ter acesso a API ngModel"
        require: "ngModel",
        // scope - é o escopo em que estamos, para se quisermos isolar tambem
        // element - operações disponíveis utilizando jqLite(olhar documentação do angular js para mais informações)
        // attrs - atributos deste elemento
        // ctrl - o que está vindo de requireno caso controller
        link: function (scope, element, attrs, ctrl) {

            var _formatDate = function (date) {
                // Limpa máscara da data padrão, substitui tudo que não for digito de 0 a 9 por vazio(expressão regular)
                date = date.replace(/[^0-9]+/g, "");

                // Se o tamanho for mais que 2, adiciona uma barra depois dos dois primeiros caracteres e inclui o fim da data 
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2);
                }
                if (date.length > 5) {//Se o tamanho for maior que 5, adiciona uma segunda barra
                    data = date.substring(0, 5) + "/" + date.substring(5, 8);//substring de 5 em diante até o 8(limita a entrada)
                }
                return date;
            }


            element.bind("keyup", function () {//evento que dispara a função assim que a tecla for levantada
                //ctrl.$setViewValue transforma os valores de entrada ctrl.viewValue - mostra os valores de entrada
                // invoca o _formatDate levando como parâmetro os inputs
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();//Executa OBS: São funções da api de ng-model 
            });

            // Parser
            //A máscara está aplicada mas quando ele entrar, virá no tipo date com os milisegundos inseridos
            ctrl.$parsers.push(function (value) {
                if (value.length === 10) {//Faz com que só permita a entrada no momento correto, em que esteja completamente digitado
                    var dateArray = value.split("/");//pega a data tirando pelas barras
                    // ano, mês - 1, dia
                    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0].getTime());
                }
            });

            //Formater
            // levando o tipo date gerado pelo parser para a view pelo $scope definido formatando da maneira certa
            ctrl.$formatters.push(function (value) {
                // Filtro padrão do angular JS para aplicar máscara de date(Importante fazer a injeção dele)
                return $filter("date")(value, "dd/MM/yyyy");
            });
        }
    };
});