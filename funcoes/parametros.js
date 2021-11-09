function funcao(){
    //arguments armazena os argumentos que foram passados.
    console.log(arguments);//pode usar arguments[8];
}
funcao('Valor1', 'valor2', 'valor3', 4, 5, 6, 7, 8);

//-----------------------------------------
//ARGUMENTS nas funções.
//toda função com a palavra function tem uma variável especial chamada ARGUMENTS.

function argumento(){//em javaScript não é obrigado ter argumento aqui.
    let total = 0;
    for(let argumen of arguments){
        total += argumen;//Somando os valores.
    }
    console.log(total);
}
console.log('função argumentos')
argumento(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//------------------------------------------

function conta(operador, acumulador, ...numeros){//depois do primeiro e segundo item, o resto ficará em um array por causa dos '...'(resto).
    console.log(`Operador:${operador} Acumulador:${acumulador} Números:${numeros}`);
}
conta('+', 0, 20, 30, 40, 50)