// VALUE, tipo de service para criar objeto que pode ser usado para configuração geral da aplicação
// EX, caso a porta do serviço mude e precise ser alterada em todos os lugares, o values cumpre esse papel
angular.module('listaTelefonica').value("config", {
    baseUrl: 'http://localhost:3412'
})