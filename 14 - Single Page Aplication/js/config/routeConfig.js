angular.module("listaTelefonica").config(function ($routeProvider) {
    // Objeto de configuração de rota 
    //Quando for "/contatos" ele irá para algum lugar, este "algum lugar" é "contatos.html"
    $routeProvider.when("/contatos", {//"#!/contatos no navegador
        templateUrl: "view/contatos.html",//definição do template
        controller: "listaTelefonicaCtrl",//definição da controller 
        resolve: {
            contatos: function (contatosAPI) {
                return contatosAPI.getContatos();
            },

            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    })


    //Rota para adicionar template de adicionarNovoContato
    $routeProvider.when("/novoContato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl",
        resolve: {

            contatos: function (contatosAPI) {
                return contatosAPI.getContatos();
            },

            //Carrega as operadoras na página
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
            // É uma alternativa de dependencia dessa função, definindo no "resolve" evita a necessidade de manter essa função lá dentro
            // var carregarOperadoras = function () {
            //     operadorasAPI.getOperadoras().success(function (data) {
            //         $scope.operadoras = data;
            //     });
            // };
        }
    });

    // Para acessar os detalhes do contato com "contato/1 por exemplo"
    $routeProvider.when("/detalhesContato/:id", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            // É necessário pegar a rota tmb para saber para onde ir usando o id
            contato: function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.id);
            }
        }
    });

    //Se não for encontrada nenhuma rota, esta será a página padrão
    $routeProvider.otherwise({ redirectTo: "/contatos" });

});
//Configuração da rota 