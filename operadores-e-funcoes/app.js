const readline = require('readline').createInterface ({
    input : process.stdin,
    output : process.stdout
});

readline.question('Favor informar um numero', (numero1) => {
    try {
        const n1 = Number.parseFloat(numero1);
        readline.question('Favor informar o segundo número', (numero2) => {
            try {
                const n2 = Number.parseFloat(numero2);    
            } catch (e) {
                console.log('Número informado não é válido');
            }
            
        });
    } catch (e) {
        console.log('Numero informado não é válido!');
    }
})

