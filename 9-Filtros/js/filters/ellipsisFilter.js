angular.module("listaTelefonica").filter("ellipsis", function () {
	// Size é o tamanho mínimo definido na chamada para a partir dele adicionar os "..."
	return function (input, size) {
		// Regra para que não se aplique o filtro caso o input seja menor que o size definido
		if (input.length <= size) return input;
		// output recebe o nome formatado tirando 2 do tamanho total e adicionando "..."
		// (size || 2) = Se o size for evaluado como false ele faz || cai do lado 2 e retorna de 0 a 2, se for true fica de 0 a size
		var output = input.substring(0, (size || 2)) + "...";
		return output;
	};
});