angular.module("listaTelefonica").directive("uiAlert", function () {
	return {

		// templateUrl referencia onde está o elemento DOM para ser manipulado em outro escopo
		templateUrl: "view/alert.html",
		replace: true, //Demonstra o próprio elemento ao inspecionar
		restrict: "AE",//Restringe para tipos de elementos na DOM
		scope: {//Cria um novo escopo para ser manipulado
			title: "@title",//Trás o valor vindo do elemento DOM e armazena numa variável e escopo
			message: "=error" //Trás de forma bidimencional a varial do escopo da controller e coloca na variável da diretiva
		},
		// transclude: true //Trás o conteúdo de dentro do elemento
	};
});