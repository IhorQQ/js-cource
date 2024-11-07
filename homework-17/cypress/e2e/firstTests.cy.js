import signUpPage from "../support/signUpPage";

const USERS = {
    validUser: 'standard_user',
    lockedUser: 'locked_out_user',
    pass: 'secret_sauce'
}



describe('Sign in checks', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    afterEach(() => {
        cy.clearCookies()
    })

    it.only('Should be able to sign-in with valid data', () => {
        cy.get(signUpPage.usernameField).type(USERS.validUser)
        cy.get(signUpPage.passwordField).type(USERS.pass)
        cy.get(signUpPage.loginButton).click()
        cy.url().should('include', '/inventory.html')
        cy.getCookie('session-username').should('exist')
    })

    it('Should NOT be able to sign-in with locked account', () => {
        cy.get(signUpPage.usernameField).type(USERS.lockedUser)
        cy.get(signUpPage.passwordField).type(USERS.pass)
        cy.get(signUpPage.loginButton).click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should("contain.text", 'Epic sadface: Sorry, this user has been locked out.')
    })
})