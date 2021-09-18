//Padrão IEEE 754-2008

let num1 = 15;
let num2 = 2.5;
let casaDecimais = 15.25484846464;

console.log(num1.toString() + num2);//o Number está como String somente aqui. por causa do toString().
console.log(typeof num1);//agora, continua Number.

console.log(casaDecimais.toFixed(2));//quantas casa decimais quer que apareça?
 
console.log(Number.isInteger(num1));//Caso seja um número inteiro, vai retornar true, caso seja número de ponto flutuante, retornará false.

let temp = num1 * 'ola';
console.log(temp);//NaN - não é um número.
console.log(Number.isNaN(temp));//Está perguntando se isso é um NaN.

let num3 = 0.7;
let num4 = 0.1;
console.log(num3 + num4);
