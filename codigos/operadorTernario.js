//? operador ternário.
const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario >= 1000? 'Usuário vip' : 
'Usuário normal'

console.log(nivelUsuario);

const corUsuario = 'null';
const corPadrao = corUsuario || 'preta';//para no preimeiro item válido.

console.log(corPadrao);
