import uid from 'uuid/v4'
import { criarQuestaoConcurso } from './api_concurso_questao'

const getBodyComumProva = () => ({
  descricao: uid(),
  instituicao: uid(),
  nomeProfessor: 'ODocente SobrenomeDocente',
  quantidadePrevistaDeCadernos: 1,
  quantidadePrevistaDeQuestoes: 1,
  sistemaDeNotasDaProva: 'valorEmQuestoes',
  tagsVirtuais: [],
  tema: uid(),
  tipoEmbaralhamento: 2,
  titulo: uid(),
  membros: {},
})

export const criarProvaConcurso = (accessToken, concursoId) =>
  new Promise((resolve) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('API_URL')}concursos/${concursoId}/provas-list`,
      body: {
        ...getBodyComumProva(),
        membros: {},
        grupos: [{ questoes: [], nome: uid(), id: uid() }],
      },
      headers: { Authorization: accessToken },
    }).then(({ body: prova }) => resolve(prova))
  })

export const criarProvaConcursoComQuestao = (accessToken, concursoId) =>
  new Promise((resolve) => {
    criarQuestaoConcurso(accessToken, concursoId).then((questao) => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}concursos/${concursoId}/provas-list`,
        body: {
          ...getBodyComumProva(),
          grupos: [{ questoes: [{ questaoId: questao.id, fixa: false, peso: questao.peso }], nome: uid(), id: uid() }],
          questoes: [questao],
        },
        headers: { Authorization: accessToken },
      }).then(({ body: prova }) => resolve(prova))
    })
  })
