const numero = Number(prompt('digite umm numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const textoId = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

textoId.innerHTML = '';

textoId.innerHTML += `<p>Raiza quadrada é: ${numero ** 0.5}</p>`;
textoId.innerHTML += `<p>Seu número + 2 é ${numero + 2}.</p>`;
textoId.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
textoId.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`;
textoId.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
textoId.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
textoId.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
