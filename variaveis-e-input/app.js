const readLine = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout 
});

const minhaPrimeiraConstanteString = 'Minha primeira string' ;
console.log(minhaPrimeiraConstanteString);

let leituraCampo;
let teste = ('Testando....');

readLine.question('Informe sua idade: ', input => {
    leituraCampo = input;
    console.log(`O usuário digitou: ${leituraCampo} e nossa variável de teste é: ${teste}`);
});