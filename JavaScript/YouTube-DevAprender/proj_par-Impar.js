/*
Receber vários número e avaliar se os número são Impar ou par
Função exibe se cada valor é impar ou par
*/
var i = 0;
var entrada = checarParImpar(prompt("Insira um número: "));
console.log(entrada);
function checarParImpar(numero){
    for (i = 0; i <= numero; i++){
      if (numero % 2 === 0) { // a jogada é usar igualdade estrita (===) no lugar de ==
        console.log(i, "Par")
    } else
        console.log(i, "Impar") 
    }
     
}
/* Solução do Prof
exibirTipos();
function exibirTipos(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 2 === 0)
            console.log(i, "Par");
        else
            console.log(i, "Impar")
    
    }
}
*/