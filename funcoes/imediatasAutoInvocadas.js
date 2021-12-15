//LIFE -> Immediately invoked unction expression

(function(){
    const nome = 'Luiz';
    console.log(nome);//protegido dentro do escolpo.
})();//tudo que estiver na função irá ser executado imediatamente por que esses parénteses estão chamando.

const nome = 'Qualquer coisa';//aqui é outra variável nome.
console.log(nome);