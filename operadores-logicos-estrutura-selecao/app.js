const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação se pode entrar no kart');
console.log('Além das suas verificações anteriores, precisamos verificar se você está na lista de presença do horário');

readLine.question('Qual o ano do seu nascimento?', ano =>{
    if(ano > 2005){
        console.log('Você não tem 18 anos');
    }else{
        readLine.question("Você tem habilitacao? (Sim/Nao) ", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitacao para entrar no kart');
            }else{
                readLine.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart, Douglas');
                            break;
                        case 'Rafael':
                            console.log('Bem vindo ao Kart, Rafael');
                            break;
                        default:
                            console.log('Seu nome não foi identificado');
                    }
                });
            }
        })
    }
})