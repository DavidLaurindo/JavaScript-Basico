            //012345678910  
const nome = 'Luiz Otávio';
            //     1       2        3
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);

console.log(nome[10]);//pega somente a letra na posição
console.log(alunos[0]);//pega o elemento completo que está na posição
console.log(alunos[2]);

alunos[0] = 'Eduardo';//editando o índice.
console.log(alunos);

alunos[3] = 'Luiza';//adicionando um nome no índice 3.
console.log(alunos);

console.log(alunos.length);//informa quantos elementos existem no array.

alunos[alunos.length] = 'rogerim'//adicionando automaticamente na última posição
alunos[alunos.length] = 'Carcaraus';
console.log(alunos);

alunos.push('Cardoso');//função que adiciona na última posição altomaticamente.
console.log(alunos);

alunos.unshift('Creuza');//adiciona no primeiro espaço do array e empurra os outros pra frente.
console.log(alunos);

alunos.pop();//remove o último elemento do array.
console.log(alunos);

const removido = alunos.pop();//salva o aluno que está sendo removido.
console.log(removido);
console.log(alunos);

const remove = alunos.shift();//remove o primeiro elemento do array e puxa todos os outros para a frente.
console.log(remove);
console.log(alunos);

delete alunos[1];//apaga o elemento sem alterar os outros elementos. Ficará um elemento vazio na array.
console.log(alunos);
console.log(alunos[1]);//undefined pois não tem nada lá.(foi apagado);

console.log(alunos.slice(0, 3));//ele não pega o último número. vai até o número anterior. está pegando do elemento 0 até o 2.
console.log(alunos.slice(0, -2));//também pode ser feito com números negativos.

console.log(typeof alunos);//object
console.log(alunos instanceof Array);//alunos é uma instancia de array? está pergunta se é uma instancia de array. retorno: false ou true.