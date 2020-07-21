// Criar um método para ler propriedades de um objeto
// retornar somente as propriedades do tipo string que estão no objeto

const filme = {
    titulo: 'matrix',
    ano: 1999,
    diretor: 'Lilly e Lana Wachowski',
    protagonista : 'Neo'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for(prop in obj)
    if(typeof obj[prop] === 'string')//prop retorna a propriedade em sim, obj[prop] retorna o valor da Propriedades 
    console.log(prop,obj[prop])
}