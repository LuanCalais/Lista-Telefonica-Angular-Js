angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = operadoras.data;
	$scope.contato = contatos.data;
	// Exemplo má otimização 1 de cuidado de performance(importo de 20%) criando variável para aplicar imposto como expression
	$scope.imposto = 1.2;

	// Exemplo 2 de má otimização do site
	// $scope.calcularImposto = function (preco) {
	// var counter = 0;
	// console.log(counter++);//Para saber quantas vezes está sendo executada
	// 	let imposto1 = 1.2;
	// 	return preco * imposto1;
	// }


	// função que faz inicializações necessárias 
	let init = function () {
		calcularImpostos($scope.contato)
		generateSerial($scope.contatos);
	}

	// Função que recebe o calculo do imposto dentro de contatos, aplica em todos eles
	let calcularImpostos = function (contatos) {
		contatos.forEach(function (contato) {
			contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
		})
	}

	// Exemplo 3 de BOA otimização do site
	$scope.calcularImposto = function (preco) {
		let imposto = 1.2;
		return preco * imposto1;
	}


	var generateSerial = function (contatos) {
		contatos.forEach(function (item) {
			item.serial = serialGenerator.generate();
		});
		$scope.contatos = data;
	};

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};

	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
		$scope.verificarContatoSelecionado($scope.contatos);
	};

	// OUTRO EXEMPLO, esta função está sendo invocada várias vezes a cada caracter
	// $scope.isContatoSelecionado = function (contatos) {
	// 	var counter = 0;
	// 	console.log(counter++);//Para saber quantas vezes está sendo executada
	// 	return contatos.some(function (contato) {
	// 		return contato.selecionado;
	// 	});
	// };

	// Solução melhor, chamando no checkBox
	$scope.verificarContatoSelecionado = function (contatos) {
		$scope.hasContatoSelecionado = contatos.some(function (contato) {
			return contato.selecionado;
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};





});