/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25,26
Luiz Otavio nasce em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 79;
const altura = 1.75;
let imc; //peso / (altura * altura)
let anoNascimento;


imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`); //usar o ${} sempre com `crase.
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em 1980`);