let a = 'A'; //recebe B
let b = 'B'; //recebe C
let c = 'C'; //recebe A

const desestruturar = [b, c, a];
[a, b, c] = desestruturar;
//variavel = arrays
console.log(a, b, c);

//-------------------------------------------------------------------------------
 
const numeros = [100, 2456, 48693, 44, 57, 68, 7, 811112, 90];

const [primeiroNumero, segundoNumero, ...rest] = numeros;

console.log(primeiroNumero, segundoNumero);//pega somento o 1 e 2 do array.
console.log(rest);//pega o que restou no array.

const [ , , tres, , cinco, seis, , , nove] = numeros;
console.log(tres, cinco, nove);

