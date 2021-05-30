import uid from 'uuid/v4'
import { getAccessToken, getUserId } from '../api_usuarios'

export const criarConcurso = accessToken =>
  new Promise(resolve => {
    const getToken = accessToken ? Promise.resolve(accessToken) : getAccessToken('gestor-concursos')
    getToken.then(token => {
      return cy
        .request({
          method: 'POST',
          url: `${Cypress.env('API_URL')}concursos`,
          body: {
            titulo: uid(),
            instrucoes: [uid(), uid()],
            descricao: uid(),
            cargos: [],
            opcoes: {
              template: 'Comperve',
              quantidadeAlternativasQuestoes: 4,
              numeroInstancias: 1,
              cabecalho: uid(),
              frase: uid(),
            },
          },
          headers: { Authorization: token },
        })
        .then(response => {
          const { body: concurso } = response
          resolve(concurso)
        })
    })
  })

export const deletarConcurso = async (accessToken, id) =>
  new Promise(resolve => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('API_URL')}concursos/${id}`,
      headers: { Authorization: accessToken },
    }).then(() => {
      resolve()
    })
  })

export const getConcursoIdByUrl = () =>
  new Promise(resolve => {
    cy.url().then(url => resolve(url.split('/')[4]))
  })

export const setMembroConcurso = (concurso, accessToken, usuarioId, papel, value) => {
  return new Promise(resolve => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('API_URL')}concursos/${concurso.id}/set-papel`,
      headers: { Authorization: accessToken },
      body: { papel, value, usuarioId },
    }).then(({ body: concurso }) => resolve(concurso))
  })
}

export const criaConcursoComMembro = (membro, papeis) => {
  return new Promise(resolve => {
    const dados = {}
    getAccessToken('gestor-concursos')
      .then(accessToken => (dados.accessToken = accessToken))
      .then(() => criarConcurso(dados.accessToken))
      .then(concurso => (dados.concurso = concurso))
      .then(() => getUserId(membro))
      .then(userId => (dados.userId = userId))
      .then(() => {
        return Promise.all(
          papeis.map(papel => setMembroConcurso(dados.concurso, dados.accessToken, dados.userId, papel, true)),
        )
      })
      .then(() => {
        resolve(dados)
      })
  })
}
