const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//     trocar o nome      caso nao ache o nome   atribuindo normal
const {nome: mudaNome = 'não existe esse nome', sobrenome} = pessoa;
const{endereco:{rua, numero}, endereco} = pessoa;

console.log(mudaNome, sobrenome);
console.log(rua, numero, endereco);
