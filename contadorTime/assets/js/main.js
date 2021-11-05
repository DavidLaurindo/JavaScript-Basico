function relogio(){
    function getTimeSecond(sec){
        const data = new Date(sec * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    console.log(getTimeSecond(10));
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function playTime(){
        timer = setInterval(function(){
            segundos++;//contador para let segundos.
            relogio.innerHTML = getTimeSecond(segundos);
        }, 1000);//executa a cada 1 segundo(1000).
    }
    
    document.addEventListener('click', function(e){
        const elemento = e.target;//informa o elemento que está sendo clicado e joga na const.
    
        if(elemento.classList.contains('zerar')){
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
        if(elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            playTime();
        }
        if(elemento.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');//add pausado na classe(relogio pausado)
        }
    })
}
relogio();
