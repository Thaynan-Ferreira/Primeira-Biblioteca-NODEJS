// função que filtra as palavras que ocorrem mais de uma vez no parágrafo, usando o método Object.keys para obter as chaves do objeto paragrafo e o método filter para filtrar as chaves que correspondem às palavras que ocorrem mais de uma vez, verificando se o valor associado à chave é maior que 1.
function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        if (duplicadas.length > 0) {
            textoFinal += `Palavras que ocorrem mais de uma vez no parágrafo ${indice + 1}: ${duplicadas}\n`;
        }
        else {
            textoFinal += `Nenhuma palavra ocorre mais de uma vez no parágrafo ${indice + 1}.\n`;
        }        
    });
    return textoFinal;
}

export { montaSaidaArquivo };