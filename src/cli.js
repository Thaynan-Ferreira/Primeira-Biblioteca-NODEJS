import fs from 'fs'; //file system
import path from 'path'; //path
import trataErros from './erros/funcoesErro.js'; //importa a função trataErros do arquivo funcoesErro.js, que é responsável por tratar os erros que podem ocorrer na leitura do arquivo
import { contaPalavras } from './index.js'; //importa a função contaPalavras do arquivo index.js, que é responsável por contar as palavras do texto lido do arquivo
import { montaSaidaArquivo } from './helpers.js'; //importa a função montaSaidaArquivo do arquivo helpers.js, que é responsável por montar a saída do arquivo com as palavras que ocorrem mais de uma vez em cada parágrafo
import { Command } from 'commander'; //importa a classe Command do módulo commander, que é responsável por criar a interface de linha de comando para o programa

const program = new Command(); //cria uma nova instância da classe Command, que é responsável por criar a interface de linha de comando para o programa

program
    .version('0.0.1') //define a versão do programa
    .option('-t, --texto <string>', 'caminho do texto a ser processado') //define a opção -t ou --texto, que é obrigatória e recebe um argumento do tipo string, que é o caminho do texto a ser processado
    .option('-d, --destino <string>', 'caminho da pasta de destino para salvar o resultado') //define a opção -d ou --destino, que é obrigatória e recebe um argumento do tipo string, que é o caminho da pasta de destino para salvar o resultado
    .action((options) => { //define a ação a ser executada quando o programa for executado, que é uma função que recebe um objeto options, que contém as opções definidas anteriormente
        const { texto, destino } = options; //desestrutura o objeto options para obter os valores das opções texto e destino
        
        if (!texto || !destino) { //verifica se as opções texto e destino foram fornecidas, se não, exibe uma mensagem de erro e encerra o programa
            console.error('Erro: Favor inserir caminho de origem e de destino.');
            program.help(); //exibe a ajuda do programa, que mostra as opções disponíveis e como usá-las
            return; //encerra o programa
        }

        const caminhoTexto = path.resolve(texto); //resolve o caminho do texto, ou seja, transforma o caminho relativo em um caminho absoluto, usando a função resolve do módulo path, passando o caminho do texto como argumento. O resultado é armazenado na variável caminhoTexto
        const caminhoDestino = path.resolve(destino); //resolve o caminho do destino, ou seja, transforma o caminho relativo em um caminho absoluto, usando a função resolve do módulo path, passando o caminho do destino como argumento. O resultado é armazenado na variável caminhoDestino

        try {
            processaArquivo(caminhoTexto, caminhoDestino); //chama a função processaArquivo, passando o caminho do texto e o caminho do destino como argumentos, para que ela leia o arquivo, conte as palavras e salve o resultado em um novo arquivo no destino especificado
            console.log('Arquivo processado com sucesso!'); //se a execução do programa for bem-sucedida, exibe uma mensagem de sucesso
        } catch (erro) {
            console.log('Ocorreu um erro ao processar o arquivo:', erro); //se ocorrer um erro na execução da função processaArquivo, exibe uma mensagem de erro com o erro ocorrido
        }
    })

    program.parse(); //analisa os argumentos passados na linha de comando e executa a ação definida anteriormente, que é a função que processa o arquivo e salva o resultado no destino especificado. O método parse é responsável por analisar os argumentos passados na linha de comando e executar a ação definida anteriormente, que é a função que processa o arquivo e salva o resultado no destino especificado.

function processaArquivo(texto, destino) {
    
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        
        //lê o arquivo usando a função readFile do módulo fs, passando o caminho do arquivo, o encoding (utf-8) e uma função de callback que recebe dois parâmetros: erro e texto. Se ocorrer um erro na leitura do arquivo, o parâmetro erro vai conter o erro, caso contrário, o parâmetro texto vai conter o conteúdo do arquivo.
        try {
            if (erro) throw erro; //se ocorrer um erro na leitura do arquivo, lança o erro para ser tratado no bloco catch
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino); //chama a função criaESalvaArquivo
        } catch (erro) {
            trataErros(erro); //chama a função trataErros, passando o erro ocorrido na leitura do arquivo, para que ele seja tratado e uma mensagem de erro seja exibida para o usuário
        }   
    })
}


async function criaESalvaArquivo(listaPalavras, caminhoArquivo) { //async é sempre adicionado na declarção da função
    const arquivoNovo = `${caminhoArquivo}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras); //chama a função montaSaidaArquivo, passando a lista de palavras que ocorrem mais de uma vez em cada parágrafo, para que ela retorne uma string formatada com as palavras e os parágrafos correspondentes
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras); //escreve a string formatada em JSON no arquivo novo, usando a função writeFile do módulo fs, passando o caminho do arquivo novo e a string formatada em JSON. A função writeFile retorna uma promessa, então eu uso o método then para tratar o sucesso da escrita do arquivo e o método catch para tratar os erros que podem ocorrer na escrita do arquivo.
        console.log('Arquivo criado com sucesso!');
    } catch (erro) {
        throw erro; //se ocorrer um erro na escrita do arquivo, lança o erro para ser tratado no bloco catch
    }
}