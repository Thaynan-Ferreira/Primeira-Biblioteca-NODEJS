function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        throw new Error('Arquivo não encontrado. Verifique o caminho e tente novamente.');
    } else {
        return 'Erro na aplicação';
    }

}

module.exports  = trataErros
