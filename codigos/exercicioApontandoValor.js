let varA = 'a';//b
let varB = 'b';//c
let varC = 'c';//a

/*
maneira antiga:

let aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);
*/

//nova maneira:
[varA, varB, varC] = [varB, varC, varA];

console.log('varA, varB, varC');