angular.module("listaTelefonica").filter("name", function () {

	// Input é o que estará sendo aplicado o filtro
	return function (input) {

		// Cria uma lista em cada elemento entre um espaço em branco
		var listaDeNomes = input.split(" ");

		// .map -> pega a lista de nomes e para cada elemento(nome) e aplica o que for definido
		var listaDeNomesFormatada = listaDeNomes.map(function (nome) {

			// Verfica se a entrada é "da,de,do" e mantem minúsculo (Estamos usando uma expressão regular)
			if (nome.length <= 3) {
				if (/(da|de|do|das|dos)/.test(nome)) return nome;
			}
			// Caracter na posição 0 para uppercase concatenado com o resto da palava em lower case
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		// Pega o array e coloca um espaço entre cada elemento transformando em uma string de novo (processo inverso ao split)
		return listaDeNomesFormatada.join(" ");
	};
}); 
