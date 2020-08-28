/* Exercício 8: Faça um Programa que peça o valor da gasolina e do álcool de um posto e diga qual é o
combustível mais vantajoso abastecer, sabendo que somente é vantagem abastecer álcool se
o preço do mesmo é menor ou igual a 70% do valor da gasolina.*/

let gasolina = prompt('Informe o valor da gasolina: ');
let alcool = prompt('Informe o valor do álcool: ');
const alcoolVsGasolina = alcool / gasolina;

alcoolVsGasolina >= 0.7 ? alert('É viável abastecer com álcool.') : alert('É mais viável abastecer com gasolina');