//return retorna um valor e termina a função.

//exemplo duplificação com múltiplas funcões:

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(8));
console.log(triplica(2));
console.log(quadriplica(10));