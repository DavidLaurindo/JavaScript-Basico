const pessoa = {//Objeto
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa.nome);
console.log(pessoa.idade);

function criarPessoa(nome, sobrenome, idade){//parametros
    return {
        nome: nome,//nome repetido não precisa fazer assim.
        sobrenome, idade//pode se fazer assim.
    };
}
const pessoa2 = criarPessoa('Carcaraus', 'Cracnildo', 30);//argumentos
const pessoa3 = criarPessoa('Macateus', 'Aberlindos', 60);
const pessoa4 = criarPessoa('Briokcs', 'Malacroys', 15);
const pessoa5 = criarPessoa('Quiclest', 'Berifim', 32);

const pessoa6 = {
    nome: 'Luiz',
    sobrenome: 'Carcaraus',
    idade: 38,

    fala(){//criando uma função dentro do objeto não precisa de function.
        console.log(`${this.nome} ${this.sobrenome} está falando oi.`);
        console.log(`Minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++
    }
}
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();