//Criar função somar que retonar a soma de todos os multiplos 3 e 5

somar(10);
function somar(limite){
    let multiploDe3 = 0;
    let multiploDe5 = 0;
    for(i = 0; i <= limite; i++){
        if(i % 3 === 0)
        multiploDe3 += i;
        if(i % 5 === 0)
        multiploDe5 += i; 
    }
    console.log(multiploDe3 + multiploDe5)
}

// Minha implementação

let n1 = prompt('informe um número entre 0 e 10');
let n2 = prompt('Informe outro número enrte 0 e 100');
console.log('Você informou os números '+ n1 + ' e ' + n2);

descubraMultiplos(100);
function descubraMultiplos(limite){
    let multiplosN1 = 0;
    let multiplosN2 = 0;
    for(i = 0; i <= limite; i++){
        if(i % n1 === 0)
        multiplosN1 += i; //Obs, existe diferença entre += (returna 33 para 3 e 5) e o =+ (retorna 19 para 3 e 5)
        if(i % n2 === 0)
        multiplosN2 += i;
        soma = multiplosN1 + multiplosN2;
    }
    console.log("A soma dos multiplos dos número que você informou é: " + soma);
}