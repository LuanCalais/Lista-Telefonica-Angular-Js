angular.module("listaTelefonica").directive("uiAcordions", function () {
    return {
        // Função para controlar a influência dos elementos entre eles, dentro da tag pai
        controller: function ($scope, $element, $attrs) {

            // Esta controller mantem todos os elementos fechados e só abre quando for clicado em cima, e força os outros a ficarem fechados

            var acordions = [];
            // Registra os acordions na lista de acordion
            this.registerAcordion = function (acordion) {
                acordions.push(acordion);//registra os tres acordions criados na lista
            };

            this.closeAll = function () {
                accordions.forEach(function (acordion) {
                    acordion.isOpened = false;
                })
            }

        }
    };
});

angular.module("listaTelefonica").directive("uiAcordion", function () {
    return {
        templateUrl: "view/acordion.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAcordions",// ^ - Significa que está em um outro elemento, no caso o pai - Estamos chamando a diretiva uiAcordions
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAcordion(scope);
            scope.open = function () {//Função para o ng-click de acrodion.html definida, abrir e fechar
                ctrl.closeAll();
                scope.isOpened = !scope.isOpened;
            }
        }
    };
});