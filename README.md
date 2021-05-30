# multiprova-web

Aplicação web (frontend) para o sistema Multiprova da UFRN.

## Instruções para rodar

1.  Clone o repositório `$ git clone git@gitlab.com:tapioca/multiprova/multiprova-web.git`
2.  Entre no diretório: `$ cd multiprova-web`
3.  Instale as dependências: `$ npm install`
4.  Garantir que o projeto está apontando para serviços de backend ativos. Há algumas opções diferentes para esse caso.
    - Apontar para nosso serviço online, mas em ambiente de dev. Para fazer isso é preciso editar a linha que vem após `case 'local':` no arquivo `src/api/url.js`, retornando a url `http://api.multiprova3.ufrn.br/api/`. Se for usar essa opção, tenha muito cuidado para não commitar a edição de `src/api/url.js` para o branch develop.
    - Rodar os serviços de backend localmente. Para isso vamos nos referir as suas próprias documentações: [multiprova-api](https://gitlab.com/tapioca/multiprova/multiprova3/wikis/readme-multiprova-api), [multiprova-html2pdf](https://gitlab.com/tapioca/multiprova/multiprova3/wikis/readme-multiprova-html2pdf)
5.  Inicie o serviço através do comando `$ npm start`

##### Comando para rodar

```
> npm start
```

##### Comando para build

```
> npm run build
```

## Rodar o projeto com a api apontando para `http://dev.api.multiprova3.ufrn.br/api/`

`$ npm start d`

ou

`$ npm start com-dev-api`

## Informações importantes na wiki

- [Estilo](https://gitlab.com/tapioca/multiprova/multiprova3/wikis/estilo)
- [Estrutura de arquivos](https://gitlab.com/tapioca/multiprova/multiprova3/wikis/estrutura-de-arquivos)
- [Padrão de projeto - Strings](https://gitlab.com/tapioca/multiprova/multiprova3/wikis/strings)
- [Padrão de projeto - Redux](https://gitlab.com/tapioca/multiprova/multiprova3/wikis/redux)
- [Padrão de projeto - Chamadas API](https://gitlab.com/tapioca/multiprova/multiprova3/wikis/chamadas-api)
- [Padrão de projeto - JSS](https://gitlab.com/tapioca/multiprova/multiprova3/wikis/jss)
- [Extensões do vscode](https://gitlab.com/tapioca/multiprova/multiprova3/wikis/extensões-do-vscode)

# Instruções para abrir Cypress

Além da execução em background, o Cypress permite executar e visualizar todas a operações realizadas no browser. Para isso, você deve abrir o cypress utilizando os seguinte comando:

`npm test open`

## Comandos

### Cypress Commands e Cypress Options

| Opção                                                                       | Descrição                                                                                      |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `npm test run [opção de projeto] [opções de ambiente] [opções do cypress]`  | roda os testes no console                                                                      |
| `npm test open [opção de projeto] [opções de ambiente] [opções do cypress]` | abre a pagina da internet e o dashboard do cypress para visualização em tempo real dos testes. |

Exemplo de comando para teste local do multiprova: `npm test run multiprova local api-local`, `npm test open multiprova local api-local`

outras opcoes do cypress estão disponiveis em https://docs.cypress.io/guides/guides/command-line.html

### argumentos do projeto

| Projeto    | Projeto abreviado | Descrição                                          |
| ---------- | ----------------- | -------------------------------------------------- |
| multiprova | multi             | Executa os testes relevantes ao projeto multiprova |
| picco      | pi                | Executa os testes relevantes ao projeto PICCO      |

| Ambiente   | Ambiente abreviado | API                                   | Descrição                                                                                                                           |
| ---------- | ------------------ | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| local      | loc                | api-l (default) <br> api-d <br> api-p | Seta a url do front apontando seu projeto react rodando localmente, deve ser especificado onde roda a api caso nao queira a default |
| develop    | dev                | -                                     | Seta as urls para implementação de multiprova-web branch develop na web.                                                            |
| production | prod               | -                                     | Seta as urls para implementação de multiprova-web branch master na web                                                              |

Aviso: Opções pode ser concatenadas.

Ex. picco local + api dev: `npm test open picco loc api-d`

Ex. multiprova local + api prod: `npm test open multi loc api-p`

Ex. picco local + api local: `npm test run picco local api-local`

Ex picco dev : `npm test run picco start dev`

Ex multiprova prod com visualização: `npm test run multiprova open prod`

## Testes Jest

Também é possivel executar testes jest através do comando `npm run jest`, ou executa-los em modo de depuração através do comando `npm run jest:debug`
