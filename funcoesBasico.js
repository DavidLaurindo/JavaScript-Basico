function saudacao(nome){
    console.log('Bom dia, '+ nome);//também pode usar o ${}. SEM RETORNO
} 
saudacao('Luiz');
saudacao('rogerim');

const variavel = saudacao('teste');
console.log(variavel);

function comRetorno(nome2){//COM RETORNO
    return `Outro Bom dia para ${nome2}`;
}
const retorno2 = comRetorno('Carcaraus');
console.log(retorno2);

function soma(x=1, y=1){//estou passando um valor padrão: se não for enviado nenhum número, o x vai receber 1 e o y vai receber 1
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));
//console.log(resultado);//Erro porque  aqui não se pode mecher em nada que está dentro da função.
//-----------------------------------------------------------------------------=
//outras maneiras de criar função:
const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(9));

const raizDois = (m) => m ** 0.5;//a arrow function simplifica a função. ela está retornando a soma.
console.log(raizDois(10));