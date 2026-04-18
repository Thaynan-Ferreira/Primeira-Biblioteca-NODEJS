const fs = require('fs');//file system

const caminhoArquivo = process.argv; //passo o caminho do arquivo como argumento no terminal, o node vai ler esse caminho e armazenar na variável caminhoArquivo, que é um array. O primeiro elemento é o caminho do node, o segundo elemento é o caminho do arquivo index.js, e o terceiro elemento é o caminho do arquivo que eu quero ler.
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    if (erro) {
        console.log('Qual é o erro? ', erro.code);
        return;
    }    
    contaPalavras(texto);
    
})

function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto); //chama a função extraiParagrafos, passando o texto lido do arquivo, e armazena o resultado em uma variável chamada paragrafos, que é um array de parágrafos
    const contagem = paragrafos.flatMap((paragrafo) => {//para cada parágrafo, chama a função verificaPalavrasDuplicadas e retorna o resultado, que é um objeto com a contagem de palavras para aquele parágrafo, e depois junta todos os resultados em um único array usando flatMap
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo); //para cada parágrafo, chama a função verificaPalavrasDuplicadas e retorna o resultado, que é um objeto com a contagem de palavras para aquele parágrafo
    })

    console.log(contagem);

}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n'); //quebra o texto em parágrafos, usando a quebra de linha como separador, e armazena em um array chamado paragrafos
    
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); //remove os caracteres especiais da palavra, usando uma expressão regular, e retorna a palavra limpa
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' '); //quebra o texto em palavras, usando o espaço como separador, e armazena em um array chamado listaPalavras
    const resultado = {};
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra); //limpa a palavra usando a função limpaPalavras e armazena na variável palavraLimpa
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; //se a palavra já existe no resultado, pega o valor atual e soma 1, se não existe, atribui o valor 0 e soma 1
        }
        
    });
    return resultado;
}
