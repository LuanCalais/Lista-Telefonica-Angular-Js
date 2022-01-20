//Módulo de accordion sendo referênciado externamente para dentro do projeto
angular.module("ui", []);//Criando módulo ui

// Bloco Run para que seja iniciado o módulo
angular.module("ui").run(function ($templateCache) {
    // declarando crianção do template dentro da biblioteca, é uma forma de distribuí-la
    // Utilizando o templateCache para definir um template padrão para essa diretiva
    $templateCache.put("view/acordion.html", '<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-transclude ng-show="isOpened"></div>');
});

angular.module("ui").directive("uiAcordions", function () {
    return {
        controller: function ($scope, $element, $attrs) {
            var acordions = [];
            this.registerAcordion = function (acordion) {
                acordions.push(acordion);
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
        require: "^uiAcordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAcordion(scope);
            scope.open = function () {
                ctrl.closeAll();
                scope.isOpened = !scope.isOpened;
            }
        }
    };
});