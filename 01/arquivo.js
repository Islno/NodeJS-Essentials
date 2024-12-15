const path = require('node: path');
const fs = require('node: fs');
const filepath = path.join(process.cwd(),'texto.txt' )

console.log(filepath) // /home/runner/curso-nodejs/texto.txt

fs.readFile(filepath,{},(erro,dados)=>{
if (erro){
    console.log('erro')
    return
}
console.log(dados)
})