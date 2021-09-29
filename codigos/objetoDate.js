//LINK SOBRE DATE: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const data = new Date('2021-09-28 21:00:00.100');
console.log('dia', data.getDate());
console.log('mês', data.getMonth());//mes começa do zero
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('milesimo', data.getMilliseconds());
console.log('dia semana', data.getDay());//0 = Domingo, 6 = Sábado
console.log(data.toString());

console.log(Date.now());//Data atual.(contada desde o marco zero)

//FUNÇÃO QUE FORMATA A DATA:
function zeroEsquerda(num){//adiciona o zero na esquerda.
    return num >= 10 ? num : `0${num}`;
}

function formataData(data2){
    const dia = zeroEsquerda(data2.getDate());
    const mes = zeroEsquerda(data2.getMonth() + 1);
    const ano = zeroEsquerda(data2.getFullYear());
    const hora = zeroEsquerda(data2.getHours());
    const min = zeroEsquerda(data2.getMinutes());
    const seg = zeroEsquerda(data2.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data2 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
