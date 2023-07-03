describe('Login', () => {
    it('Successfully logs in', () => {
        cy.guiLogin()
        cy.contains('a', 'Create a new note').should('be.visible')
    })
})