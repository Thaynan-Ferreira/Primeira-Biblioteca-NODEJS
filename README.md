# Primeira Biblioteca Node.js 🚀

Este projeto é uma ferramenta de linha de comando (CLI) desenvolvida em **Node.js** para processar arquivos Markdown e extrair links de forma automatizada. 

O foco principal foi praticar conceitos fundamentais de backend, como manipulação do sistema de arquivos, expressões regulares e o funcionamento de código assíncrono em JavaScript.

## 🛠️ Tecnologias e Conceitos Utilizados

* **Node.js**: Ambiente de execução.
* **FS (File System)**: Módulo nativo para leitura e escrita de arquivos.
* **Expressões Regulares (RegEx)**: Utilizadas para identificar padrões de links `[título](url)`.
* **Async/Await**: Gerenciamento de promessas para leitura eficiente de arquivos.
* **Modularização**: Separação de responsabilidades entre a lógica de extração e a interface de comando (CLI).

## 📂 Estrutura do Projeto

* `index.js`: Contém a lógica principal de extração e tratamento dos dados.
* `cli.js`: Responsável por receber os comandos do usuário no terminal e exibir o resultado.
* `arquivos/`: Pasta contendo exemplos de arquivos `.txt` para teste.

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone [https://github.com/Thaynan-Ferreira/Primeira-Biblioteca-NODEJS.git](https://github.com/Thaynan-Ferreira/Primeira-Biblioteca-NODEJS.git)

2. Entre na pasta:
   ```bash
   cd Primeira-Biblioteca-NODEJS

3. Execute o script passando o caminho de um arquivo ou diretório:
   ```bash
   node src/cli.js -t arquivos/texto-aprendizado.txt -d ./resultados