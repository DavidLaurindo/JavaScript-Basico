let a = 'A'; //recebe B
let b = 'B'; //recebe C
let c = 'C'; //recebe A

const desestruturar = [b, c, a];
[a, b, c] = desestruturar;
//variavel = arrays
console.log(a, b, c);