const fs = require('fs');//file system

const caminhoArquivo = process.argv; //passo o caminho do arquivo como argumento no terminal, o node vai ler esse caminho e armazenar na variável caminhoArquivo, que é um array. O primeiro elemento é o caminho do node, o segundo elemento é o caminho do arquivo index.js, e o terceiro elemento é o caminho do arquivo que eu quero ler.
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log(texto);
})

console.log(link);