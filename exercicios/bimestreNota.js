// Exercício 6: Faça um Programa que peça as 4 notas bimestrais e mostre a média.

let nota1 = Number(prompt('Informe a primeira nota: '));
let nota2 = Number(prompt('Informe a segunda nota: '));
let nota3 = Number(prompt('Informe a terceira nota: '));
let nota4 = Number(prompt('Informe a quarta nota: '));
const mediaBimestral = (nota1 + nota2 + nota3 + nota4) / 4;
alert('A sua média bimestral é ' + mediaBimestral);