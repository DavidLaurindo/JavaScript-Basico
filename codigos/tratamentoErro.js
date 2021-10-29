function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(1, 9));
    console.log(soma('1', 8));
} catch (error) {
    //    console.log(error);Não é aconselhável lançar o erro assim para o usuário.
    console.log('Algo deu errado');

};

try{
//Executada quando não há erros
}catch(e){
//Executada quando há erros
}finally{
//Sempre será executado(mas pode ser omitido).
}