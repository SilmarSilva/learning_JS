// variáveis podem ser declaradas como var, let ou const
var nome = "Silmar"
console.log(nome); // retorna: Silmar

// Tipos primitivos: Valor
var nome = "João"; // string literal
var idade = 32; //number literal
var estaAprovado = true; // boolean
var sobrenome = undefined; // undefined
var corSelecionada = null; // object, usado para resetar um valor

// Tipos primitivos: Referência
//Object tem a função de agrupar propriedades
var pessoa = {
    nome:"Maria",
    idade: 25,
    //sobreNome = "Santos";
};
console.log(pessoa);// retorna: {nome:"Maria", idade: 25}

// Arrays: é um conjunto de dados que pode ser acessado por um indice
var familia = ["pai", "mãe", "filho", "filha"];
console.log(familia[0]); // retorna: pai
console.log(familia.length); // retorna: 4
console.log(familia) // retorna todos os elementos do array, pois o indice não foi informado

// Funções: para criar sempre criamos uma estrutura: verbo + substantivo
var corSite = "azul";
function resetaCor(cor){ // entrada de dados
    corSite = cor; // o que vou fazer com os dados
};
console.log(corSite); //retorna: azul
resetaCor(); // chamar função e não oferecer parametros, reseta.
console.log(corSite); //retorna: undefined, pois quando resetaCor() foi chamado sem parametro
resetaCor("verde"); // redefine o undefined para verde
console.log(corSite); // retorna; verde

// Tipos de função
// função que realiza uma tarefa e não retorna nada
function dizerNome(){
    console.log("Ana");
};
dizerNome();
// Função que faz uma operação e torna valor
function multiplicarDois(valor){
    return valor * 2;
}
console.log(multiplicarDois(5));
var resultado = multiplicarDois(6);
console.log(resultado)

// Operadores aritméticos:
/*(+) = soma, (-) subtração, (*) = multiplicação
(/) = divisão e (**) = exponeciação
(++) = incremento, (--) = decremento
*/
var salario = 1050;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);
console.log(salario++); // operaçãos só aparece depois de atribuir valor
console.log(salario); // retorna salario +1
console.log(--salario); // retorna salario -1, operação ocorre antes de atribuir valor.

// Operadores de atribuição
depositoMes = 100;
depositoMes += depositoMes;
// é o menos que: depositoMes = depositoMes + depositoMes;
console.log(depositoMes)


// Operadores de igualdade
//Igualdade estrita: compara valor e tipo
console.log(1 === 1); //retorna true, pois são iguais em tipo e valor
console.log("1" === 1); // retorna false, pois o valor é igual, mas tipo diferente

// Operador ternário
// Um cliente tem 110 pontos e eu quero saber se ele é comum ou premium
var pontos = 100;
var tipo = pontos > 100 ? "premium" : "comum";
// se pontos for maior que 100, logo o cliente é 'premium', do contrário será 'comum'.
console.log(tipo);

// Operadores lógicos (&&) e, (||) ou, (!) not
// O teste lógico e (&&) precisa que as duas condições sejam verdadeiras para retornar TRUE
var maiorIdade = false;
var carteiraTrabalho = true;
var podeContratar = maiorIdade && carteiraTrabalho;
console.log(podeContratar); // retorna: false, pois as duas condições devem ser true
// O teste lógico ou (||) precisa apenas que um valor seja verdadeiro para retornar TRUE
var maiorIdade = false;
var carteiraTrabalho = true;
var podeContratar = maiorIdade || carteiraTrabalho;
console.log(podeContratar); //retorna: true, pois apenas uma condição precisa ser verdadeira
// O teste lógico not (!)
var maiorIdade = false;
var carteiraTrabalho = true;
var podeContratar = maiorIdade || carteiraTrabalho;
var candidatoRecusado = !maiorIdade;

console.log(podeContratar);// retorna: true, pois o candidato nõão possui idade especificada

// Operadores lógicos não booleanos
/*
Falsy são todos os resultados:
undefined
null
0 - zero
false
'' - string vazia
NaN - not a number

Truthy
são todos os valores que não são Falsy
*/
var corPersonalizada = "vermelha";
var corPadrao = "Azul";
var corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil)//retorna: vermelho, pois nesse caso ele só precisa encontrar um valor verdadeiro para retornar true

// Expressões condicionais: If...Else
/*
se a hora estiver entre 06:00 até 12:00 : Bom dia!
se a hora estiver entre 12:00 até 18:00 : Boa tarde!
caso contrário: Boa noite!
*/
var hora = 10;
if (hora > 6 && hora < 12){
    console.log("Bom dia!");
}
else if (hora > 12 && hora < 18){
    console.log("Boa tarde!");
}
else {
    console.log("Boa noite!")
}

// Expressoẽs condicionais: switch
/*
Uma declaração switch permite que um programa avalie
uma expressão e tente associar o valor da expressão ao rótulo de um case.
Se uma correspondência é encontrada, o programa executa a declaração associada.
*/
var permissao; // comum, gerente e diretor
switch (permissao){
    case "comum":
    console.log("Usuário comum");
    break;
// o break é usado para que a função seja interrompida ao ser satisfeita a condição
    case "gerente":
    console.log("Usuário gerente");
    break;

    case "diretor":
    console.log("Usuário diretor");
    break;

    default:
    console.log("Usuário não reconhecido");
    
}

// Laços de repetição - For
// Um laço for é repetido até que a condição especificada seja falsa. 
for(var i = 0; i <= 5; i++){
    if(i % 2 !== 0){
        console.log("Vou aprender a programar!")
}
    }
    

// Lado de repetição - while
/* Uma declaração while executa suas instruções,
desde que uma condição especificada seja avaliada como verdadeira. 
*/
var i = 5
while (i >= 1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    
}

// Laço de repetição - do...while
/* A instrução do...while repetirá até que a condição especificada seja falsa.
A instrução será executada uma vez antes da condição ser verificada.
Para executar multiplas instruções utilize uma declaração de bloco ({ ... }) para agrupá-las.
Caso a condicao seja verdadeira, então o laço será executado novamente.
Ao final de cada execução, a condicao é verificada. 
*/
var i = 0
do{
    console.log("digitando...", i);
    i++; //se não for implementado vai gerar loop infinito e tratar
} while (i < 10);

// Laço de repetição - for-in
/*A declaração for...in executa iterações a partir de uma variável específica,
percorrendo todas as propriedades de um OBJETO.
Para cada propriedade distinta, o JavaScript executará uma iteração.
*/
const pessoa = {
    nome: "Silmar",
    idade: 32
};

for (var chave in pessoa){
    console.log(chave,pessoa["nome"]);
//aqui pode-se acessar informando o parâmetro: console.log(chave, pessoa.nome);
}
const cores = ["azul", "verde", "amarelo"];

for (var indice in cores){
    console.log(indice) //retorna o indice de todos os elementos
    console.log(indice,cores[indice]) //retorna os elementos por indice
}

// Laço de repetição - for...of
/*
A declaração for...of cria uma laço com objetos
interativos ((incluindo, Array, Map, Set, assim por conseguinte ),
executando uma iteração para o valor de cada propriedade distinta.
*/
for (var cor of cores){
    console.log(cor);
}