//As funções são: First-class objects(Objetos de primeira classe).(pode-se tratar as funções como dados).

//----------------------------------------------------------

//function hoisting: A função é elevada para o escopo global no topo do código.
function falaOi(){
    console.log('Oi');
}

//---------------------------------------------------------------

//Function express(utilizar como dado, armazenando em uma variável):
const recebeDados = function(){
    console.log('Dados');
}
recebeDados();//INTERESSANTE!

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(recebeDados);//INTERESSANTE!!

//-------------------------------------------------------------------

//Arrow function:
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//--------------------------------------------------

//Dentro de um objeto:
const obj = {
    falar: function(){//maneira padrão.
        console.log('Estou falando')
    },
    comer(){//Pode-se usar diretamento.
        console.log('Comendo')
    }
}
obj.falar();