import fs from 'fs'; //file system
import trataErros from './erros/funcoesErro.js'; //importa a função trataErros do arquivo funcoesErro.js, que é responsável por tratar os erros que podem ocorrer na leitura do arquivo
import { contaPalavras } from './index.js'; //importa a função contaPalavras do arquivo index.js, que é responsável por contar as palavras do texto lido do arquivo

const caminhoArquivo = process.argv; //passo o caminho do arquivo como argumento no terminal, o node vai ler esse caminho e armazenar na variável caminhoArquivo, que é um array. O primeiro elemento é o caminho do node, o segundo elemento é o caminho do arquivo index.js, e o terceiro elemento é o caminho do arquivo que eu quero ler.
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    
    //lê o arquivo usando a função readFile do módulo fs, passando o caminho do arquivo, o encoding (utf-8) e uma função de callback que recebe dois parâmetros: erro e texto. Se ocorrer um erro na leitura do arquivo, o parâmetro erro vai conter o erro, caso contrário, o parâmetro texto vai conter o conteúdo do arquivo.
    try {
        if (erro) throw erro; //se ocorrer um erro na leitura do arquivo, lança o erro para ser tratado no bloco catch
        contaPalavras(texto);
    } catch (erro) {
        trataErros(erro); //chama a função trataErros, passando o erro ocorrido na leitura do arquivo, para que ele seja tratado e uma mensagem de erro seja exibida para o usuário
    }
      
    
    
})