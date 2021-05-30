Cypress.Commands.add('getTestId', (name, ...args) => cy.get(`[data-testid=${name}]`, ...args))

Cypress.Commands.add('findTestId', (name, base, ...args) => base.find(`[data-testid=${name}]`, ...args))

Cypress.Commands.add('forEach', (testid, doPerElement) => {
  cy.get('body').then($body => {
    if ($body.find(`[data-testid=${testid}]`).length) {
      cy.getTestId(testid).each(doPerElement)
    }
  })
})

Cypress.Commands.add('setTextMultiline', (testid, conteudo) =>
  cy
    .getTestId(testid)
    .find('textarea')
    .first()
    .clear()
    .type(conteudo),
)

Cypress.Commands.add('setText', (testid, conteudo) =>
  cy
    .getTestId(testid)
    .find('input')
    .first()
    .clear()
    .type(conteudo),
)

Cypress.Commands.add('setEditor', (testid, conteudo) =>
  cy
    .getTestId(testid)
    .first()
    .find('[contenteditable=true]')
    .clear()
    .type(conteudo)
    .blur(),
)
