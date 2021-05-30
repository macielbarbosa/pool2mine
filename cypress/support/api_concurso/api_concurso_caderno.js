import uid from 'uuid/v4'

export const criarCadernoConcurso = (accessToken, { concursoId, cargoId, etapaId }) =>
  new Promise((resolve) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('API_URL')}concursos/${concursoId}/cargos-list/${cargoId}/etapas/${etapaId}/cadernos`,
      body: {
        titulo: uid(),
        descricao: uid(),
        quantidadePrevistaDeProvas: 1,
        fraseDeRodape: uid(),
        cabecalho: `<p>${uid()}</p>`,
        instrucoes: [`<p>${uid()}</p>`, `<p>${uid()}</p>`],
        status: 'Edição finalizada',
        provasIds: [],
      },
      headers: { Authorization: accessToken },
    }).then(({ body: { caderno } }) => resolve(caderno))
  })

export const getCadernoConcurso = (accessToken, { concursoId, id }) =>
  new Promise((resolve) => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('API_URL')}concursos/${concursoId}/cadernos-list/${id}`,
      headers: { Authorization: accessToken },
    }).then(({ body: caderno }) => resolve(caderno))
  })
