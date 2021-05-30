import uid from 'uuid/v4'

export const criarProvaIsolada = accessToken =>
  new Promise(resolve => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('API_URL')}provas`,
      body: {
        tipoProva: 'convencional',
        descricao: uid(),
        grupos: [{ questoes: [], nome: uid(), id: uid() }],
        instituicao: uid(),
        nomeProfessor: 'ODocente SobrenomeDocente',
        sistemaDeNotasDaProva: 'valorEmQuestoes',
        tags: [],
        tema: uid(),
        tipoEmbaralhamento: 2,
        titulo: uid(),
        status: 'Em elaboração',
        valor: 0,
        template: 'geral/prova',
      },
      headers: { Authorization: accessToken },
    }).then(({ body: prova }) => resolve(prova))
  })

export const deletarProvaIsolada = (accessToken, id) =>
  new Promise(resolve => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('API_URL')}provas/${id}`,
      headers: { Authorization: accessToken },
    }).then(() => resolve())
  })
