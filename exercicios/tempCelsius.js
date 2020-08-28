// Execício 5: Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius.  Fórmula: Celsius = (5 * (Farenheit -32) / 9).

let tempFarenheit = prompt('Informe a temperatura em Farenheit para converter para Celsius: ');
const tempCelsius =  (tempFarenheit - 32) / 1.8;
alert(tempFarenheit + ' graus Farenheit corresponde a ' + tempCelsius + ' graus Celsius.');