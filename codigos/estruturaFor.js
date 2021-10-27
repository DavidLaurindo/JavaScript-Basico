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

//------------------------------------
//Número aleatório
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
};

console.log('Número aleatório');
let rand = random(1,5);
console.log(rand);

//-----------------------------------
//do while

console.log('do while');
let enquanto = 1;

do{
    console.log(`Repetiu ${enquanto} vezes.`);
    enquanto++;
}while(enquanto !== 10);

//-----------------------------
//BREAK E CONTINUE
console.log('break e contine');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if(numero === 2){
        continue;//pula para prox etapa do laço sem passar para baixo.
    }
    console.log(numero);
    if(numero === 7){
        break;//sai do laço antes de terminar.
    }
}