//Função fábrica.

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');//divide os valores quando tiver espaço.
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Silva Cardoso';
console.log(p1.nomeCompleto);
