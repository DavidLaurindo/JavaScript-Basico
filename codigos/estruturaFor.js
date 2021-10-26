let numero = 0;
for(let i = 0; i <=5; i++){
    console.log(numero);
    numero++;
}

const frutas = ['maçã', 'pêra', 'uva'];

for(let i = 0; i< frutas.length; i++){//For clássico
    console.log(frutas[i]);
}

//----------------------------------------------------

//For in - lê os índices ou vetores.
for(let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    idade: 30
};
for(let i in pessoa){
    console.log(i);
};

//----------------------------------------------

const nome = 'Renato';
for(let valor of nome){//For of - pega o valor
    console.log(valor);
};

//--------------------------------------------
//while
console.log('While');

let i = 0;
while(i<=10){
    console.log(i);
    i++;
}
console.log('ssaiu do laço');
