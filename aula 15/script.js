const numero = Number(prompt('digite umm numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const textoId = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
textoId.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;