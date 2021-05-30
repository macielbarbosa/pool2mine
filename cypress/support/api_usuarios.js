import { usuarios } from './utils'

export const getAccessToken = (tipo) =>
  new Promise((resolve) => {
    const { email, password } = usuarios[tipo]
    cy.request({
      method: 'POST',
      url: `${Cypress.env('API_URL')}usuarios/login`,
      body: {
        email,
        password,
        realm: '117049ba-f3b1-4f4r-9a48-v4e1a3deb733',
      },
    }).then(({ body: { id: accessToken } }) => {
      resolve(accessToken)
    })
  })

export const getUserId = (tipo) =>
  new Promise((resolve) => {
    const { email, password } = usuarios[tipo]
    cy.request({
      method: 'POST',
      url: `${Cypress.env('API_URL')}usuarios/login`,
      body: {
        email,
        password,
      },
    }).then(({ body: { userId } }) => {
      resolve(userId)
    })
  })
