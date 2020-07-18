/*
Criar um programa que verifica a velocidade de automóveis
velocidade máxima de até 70km
a cada 5km acima do limite você ganha 1 ponto na carteira
Math.Floor()
caso os pontos sejam maior que 12 -> "Carteira suspensa"
*/

var velocidade = prompt("Informe a velocidade registrada: ");
console.log(velocidade);
var pontos = velocidade - 70;
infracao = Math.floor(pontos / 5); // Math.floor() arredonda o número para inteiros
console.log(infracao);
if(velocidade <= 70){
    alert("Você está dirigindo com responsabilidade, boa viagem!");
} else{
    alert("Reduza! Você excedeu o limite de velocidade em " + pontos + " " + "km e recebeu " + infracao + " " + "pontos na carteira");
}
if (infracao >= 12){
    alert("Você terá sua carteira suspensa");
}
/*
// Resolução do Prof
function verificaVelocidade(velocidade){
    if(velocidade <= 70)
        console.log("ok");
    else{
        const pontos = Math.floor(((velocidade - 70) / 5));
        if(pontos >= 12)
            console.log("carteira suspensa");
        else
            console.log("pontos", pontos);
    }

}
// Refatorando (deixar o código mais limpo) a solução do professor

function verificaVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if(velocidade <= velocidadeMaxima)
        console.log("ok");
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if(pontos >= 12)
            console.log("carteira suspensa");
        else
            console.log("pontos", pontos);
    }

}
*/