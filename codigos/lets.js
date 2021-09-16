/*let é única
não podemos redeclarar uma variável let
Não utilize var, UTILIZE let.
*/

let nome = 'João'; //String
let outroNome;//inicializando sem declarar.
outroNome = 'Adalberto';

console.log(nome, 'nasceu em 1984.');
console.log('em 2000' ,nome,'conheceu Maria.');
console.log(nome,'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com',nome,'em 2015');
console.log('O filho de',nome,'se chama Eduardo');
console.log(outroNome);

nome = 'rozemiro';//Novo valor.
console.log(nome);