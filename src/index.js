const fs = require('fs');//file system

const caminhoArquivo = process.argv; //passo o caminho do arquivo como argumento no terminal, o node vai ler esse caminho e armazenar na variável caminhoArquivo, que é um array. O primeiro elemento é o caminho do node, o segundo elemento é o caminho do arquivo index.js, e o terceiro elemento é o caminho do arquivo que eu quero ler.
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto);
    //verificaPalavrasDuplicadas(texto);
})

// criar um array com as palavras
//contar as ocorrencias
//montar um objeto com o resultado
// {
//     "web": 5,
//     "dev": 3,
//     "javascript": 2
// }

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n'); //quebra o texto em parágrafos, usando a quebra de linha como separador, e armazena em um array chamado paragrafos
    const contagem = paragrafos.map((paragrafo) => {
        return verificaPalavrasDuplicadas(paragrafo); //para cada parágrafo, chama a função verificaPalavrasDuplicadas e retorna o resultado, que é um objeto com a contagem de palavras para aquele parágrafo
    });
    console.log(contagem);

}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' '); //quebra o texto em palavras, usando o espaço como separador, e armazena em um array chamado listaPalavras
    const resultado = {};
    //objeto[propridade] = valor; 
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1; //se a palavra já existe no resultado, pega o valor atual e soma 1, se não existe, atribui o valor 0 e soma 1
    });
    return resultado;
}
