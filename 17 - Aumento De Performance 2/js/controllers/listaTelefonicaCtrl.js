angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator, $filter) {
	// Solução de sobrecarga de filter, tirar ele da view e manter na controller
	// Chama esse filtro apenas uma vez independente da interação com o aplicativo
	$scope.app = $filter('upper')("Lista Telefonica");
	$scope.contatos = [];
	$scope.operadoras = operadoras.data;
	$scope.contato = contatos.data;
	$scope.imposto = 1.2;


	let init = function () {
		calcularImpostos($scope.contato)
		generateSerial($scope.contatos);

		// Track By vai definir uma chave única para o reaproveitamento a mesma instância de alguma forma
		// Exemplo de uso ruim, para ser aplicado o track by
		// Pegando o primeiro elemento da lista e inserindo no final da mesma lista
		// Não será possível, o angular irá disparar erro de elemento duplicado, a solução é o uso do track by em contatos.html
		// $scope.contatos.push($scope.contatos[0]);
	}

	let calcularImpostos = function (contatos) {
		contatos.forEach(function (contato) {
			contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
		})
	}

	$scope.calcularImposto = function (preco) {
		let imposto = 1.2;
		return preco * imposto1;
	}

	// Função para demonstrar track by
	$scope.reset = function () {
		// Tentar com o track by e sem o track by
		$scope.contato = angular.copy($scope.contatos);
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