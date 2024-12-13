const { resolve } = require('path');
const rl = require('readline');

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

prompt.question('What is your name? ', (name) => {
    console.log(`Hello ${name}`);
    prompt.close(); // Fechar a interface de leitura
});
const promptPromisse ={
    question: new Promise((resolve, reject) => {
        try {
            prompt.question('What is your name? ', (name) => resolve(name))
        }catch(erro){
            reject(erro)
        }
    }),close: prompt.close
}