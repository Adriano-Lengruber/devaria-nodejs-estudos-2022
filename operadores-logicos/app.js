const readLine = require('readline').createInterface ({
    input : process.stdin,
    output: process.stdout
});

console.log('Este programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Além da sua idade precisamos verificar se você está na lista de presença do horário');

readLine.question('Qual o ano do seu nascimento?', ano => {
    
})