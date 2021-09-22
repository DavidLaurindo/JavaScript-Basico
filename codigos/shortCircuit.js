console.log('Luiz' && 0 && 'Maria');//ele retorna o valor(o primeiro valor false que ele encontrar ele vai retornar.) está retornando o 0.( zero para javascript é false).

console.log('Luiz' && true && 'maria');//irá percorrer e caso não ache nenhum false ele retornará o último.(retornou Maria).

/*
Valores falsos em JavaScript:(FALSY)

false(literal)
0
"vazio"
null/undefined
NaN

obs:Tudo foram esses é verdadeiro.
*/