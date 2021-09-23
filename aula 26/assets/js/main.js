//capturar evento de submit do formulario:
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);
});

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
}