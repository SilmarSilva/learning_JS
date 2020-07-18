// Substituir valores de um variavel precisamos criar uma terceira variavel para preservar o valor.
var corCabelo = "preto";
var tintaCabelo = "vermelho";
console.log(corCabelo);// retorna: preto

var novaCorCabelo = tintaCabelo;// atribuindo a nova cor
corCabelo = novaCorCabelo//atribuindo a nova cor ao cabelo
console.log(corCabelo);// retorna: vermelho
