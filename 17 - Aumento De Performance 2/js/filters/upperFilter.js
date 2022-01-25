angular.module("listaTelefonica").filter("upper", function () {
    var counter = 0;
    return function (input) {
        // Para saver quantas vezes essa função foi invocada
        console.log(counter++);
        // Se não houver input a gente não retorna nada
        if (!input) return;

        return input.toUppercase();
    }

});