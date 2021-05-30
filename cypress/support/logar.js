import { usuarios } from './utils'

export const logar = tipo => {
  cy.clearCookie('authToken')
  const { email, password } = usuarios[tipo]
  cy.visit('/login')
  cy.getTestId('campo-selecao-organizacoes').click()
  cy.getTestId('opcao-de-organizacao')
    .contains('Org Para Testes Cypress')
    .click()
  cy.getTestId('login-form-email')
    .find('input')
    .click()
    .type(email)
    .blur()
  cy.getTestId('login-form-password')
    .find('input')
    .click()
    .type(password)
    .blur()
  cy.wait(200)
  cy.getTestId('login-button-entrar').click()
  cy.url().should('not.include', '/login')
}
