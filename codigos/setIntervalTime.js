function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pr-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostrarHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('Parada!');
}, 5000);