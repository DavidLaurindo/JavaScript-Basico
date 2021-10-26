const paragrafos = document.querySelector('.paragrafos');
const itens = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundBody = estiloBody.backgroundColor;

for(let p of itens){
    console.log(p);
    p.style.backgroundColor = backgroundBody;
    p.style.color = 'white'; //entre aspas.
}