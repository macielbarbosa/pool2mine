import uid from 'uuid/v4'

const getBodyQuestaoPadrao = () => ({
  status: 'elaboracao',
  enunciado: uid(),
  elaborador: '',
  revisorConteudo: '',
})

export const getQuestoesConcurso = (accessToken, concursoId) =>
  new Promise((resolve) => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('API_URL')}concursos/${concursoId}/questoes-list/`,
      headers: { Authorization: accessToken },
    }).then(({ body: questoes }) => resolve(questoes))
  })

export const criarQuestaoMultiplaEscolhaConcurso = (accessToken, concursoId) =>
  new Promise((resolve) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('API_URL')}concursos/${concursoId}/questoes-list`,
      body: {
        ...getBodyQuestaoPadrao(),
        tipo: 'multiplaEscolha',
        multiplaEscolha: {
          respostaCerta: 'a',
          alternativas: [],
          alternativasPorLinha: 1,
        },
        dificuldade: 2,
        anoEscolar: 'Ensino superior: basico',
        tagsVirtuais: [],
      },
      headers: { Authorization: accessToken },
    }).then(({ body: questao }) => resolve(questao))
  })

export const criarQuestaoConcurso = criarQuestaoMultiplaEscolhaConcurso

export const criarQuestaoBlocoConcurso = (accessToken, concursoId) =>
  new Promise((resolve) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('API_URL')}concursos/${concursoId}/questoes-list`,
      body: {
        ...getBodyQuestaoPadrao(),
        tipo: 'bloco',
        bloco: {
          fraseInicial: uid(),
          questoes: [
            {
              enunciado: uid(),
              elaborador: 'ODocente SobrenomeDocente',
              anoEscolar: 'Ensino superior: basico',
              dificuldade: 2,
              tagsVirtuais: [],
              tipo: 'multiplaEscolha',
              id: uid(),
              multiplaEscolha: {
                respostaCerta: 'a',
                alternativas: [],
                alternativasPorLinha: 1,
              },
            },
          ],
        },
      },
      headers: { Authorization: accessToken },
    }).then(({ body: questao }) => resolve(questao))
  })

export const criarQuestaoRedacaoConcurso = (accessToken, concursoId) =>
  new Promise((resolve) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('API_URL')}concursos/${concursoId}/questoes-list`,
      body: {
        ...getBodyQuestaoPadrao(),
        tipo: 'redacao',
        redacao: {
          numeroDeLinhas: 20,
          instrucoes: uid(),
          expectativaDeResposta: uid(),
          tema: uid(),
        },
        dificuldade: 2,
        anoEscolar: 'Ensino superior: basico',
        tagsVirtuais: [],
      },
      headers: { Authorization: accessToken },
    }).then(({ body: questao }) => resolve(questao))
  })
