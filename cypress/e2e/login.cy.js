// cypress/e2e/login.cy.js

describe('Login', () => {
  it('successfully logs', () => {
    cy.intercept('GET', '**/notes').as('getNotes')

    cy.guiLogin()
    cy.wait('@getNotes')

    cy.contains('a', 'Create a new note').should('be.visible')
  })
})
