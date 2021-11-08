const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpar(){
    inputTarefa.value = '';//limpa o campo de texto
    inputTarefa.focus();//deixa o cursor em focus(piscando).
}

function criarBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar'); ou:
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
   const li = criaLi();
   li.innerText = textoInput;
   tarefas.appendChild(li);
   limpar();
   criarBotaoApagar(li);
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('apagar')){
        console.log(elemento.parentElement);//mostra o pai desse elemento(não precisa desse console.log.() usado somente para estudo).
        elemento.parentElement.remove();
    }
})