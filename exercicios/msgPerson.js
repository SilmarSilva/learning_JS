//exemplo de função. A função ela deve ser chamada para rodar, isto é: multiplica(2,3); // 6
function multiplica(num1,num2){
    let result = num1 *num2;
    return result;
}
// evento de clique
document.querySelector('html').onclick = function(){
//    alert('Olá, mundo!');
}
//Exemplo do developer.mozilla e não funciona
// Image swircher code
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'exercicios/bee.jpg'){
        minhaImagem.setAttribute('src', 'exercicios/optimus.jpg');
    } else {
        minhaImagem.setAttribute ('src', 'exercicios/bee.jpg');
    }
}
// Personalized welcome message code
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario(){
    let meuNome = prompt('Digite seu nome.');
    localStorage.setItem('nome', meuNome); // função localStorage guarda dados no navegador para usar depois
    //setItem cria e guarda um item chamado 'nome' definindo seu valor para var meuNome
    meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
}
if (!localStorage.getItem('nome')) { // se o nome não existir a função defineNomeUsuario é executada para criar
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome'); // se estiver criada, o getitem recupera o nome guardado e joga no textContet
    meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}
meuBotao.onclick = function(){
    defineNomeUsuario();
}
function defineNomeUsuario(){
    let meuNome = prompt('Digite seu nome.');
    if(!meuNome || meuNome === null){
        defineNomeUsuario();
    } else {
        localStorage.getItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
    }
}