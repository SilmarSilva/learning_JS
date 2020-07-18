// Escrever uma função que usa dois números e retorna o maior entre dois valores

var numero1 = prompt("Insira um número: ");
var numero2 = prompt("Insira outro número:");
if (numero1 > numero2){
    console.log("O primeiro número é maior");
}
else if(numero1 < numero2){
    console.log("O segundo número é maior")
}
else{
    console.log("Os números são iguais")
}
/*
Alternativas
1)
var maiorValor = max(10, 5);
console.log(maiorValor);
function max(numero1, numero2) {
    if (numero1 > numero2)
        return numero1;
    return numero2; // não precisa do else, pois ele vai checar a logica, se ela for atendida ele não percorrerá o resto da função
}
2)
var maiorValor = max(10, 5);
console.log(maiorValor);
function max(numero1, numero2) {
    return numero1 > numero2 ? numero1: numero2 ;
}
*/