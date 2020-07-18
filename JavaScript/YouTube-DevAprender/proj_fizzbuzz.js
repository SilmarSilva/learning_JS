/*
Divisível por 3 => Fizz
Divisível por 5 => Buzz
Divisível por 3 e 5 => FizzBuzz
Não é divisível por 3 ou 5 => entrada
Não é um número => "Não é um número"
*/
var resultado = fizzBuzz(prompt("Informe um número: "));
console.log(resultado);

function fizzBuzz(entrada){
 /*   if(typeof entrada !== "number")
        return "Não é um número"; Solução implementada pelo Prof */
    if (entrada % 3 == 0 && entrada % 5 == 0)
        return "FizzBuzz";  
    if(entrada % 3 == 0)
        return "Fizz";
    if(entrada % 5 == 0)
        return "Buzz";
    if (entrada % 3 > 0 && entrada % 5 > 0) {
        return "Não é um número divisível por 3 ou 5.";
    } 
    else{
        return "Não é um número."
    }  
};
