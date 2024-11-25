import BasePage from './BasePageHW18'
import { faker }  from '@faker-js/faker';

export default class RegistrationModal extends BasePage {

    get firstNameField() {
        return cy.get('input[id="signupName"]')
    }

    get lastNameField() {
        return cy.get('input[id="signupLastName"]')
    }

    get emailFieldR() {
        return cy.get('input[id="signupEmail"]')
    }

    get passwordField() {
        return cy.get('input[id="signupPassword"]')
    }

    get repeatPasswordField() {
        return cy.get('input[id="signupRepeatPassword"]')
    }

    get nameField() {
        return cy.get('input[id="signupName"]')
    }

    get registerButton() {
        return cy.get('button[class="btn btn-primary"]')
    }

    get errorMessage() {
        return cy.get('div[class="invalid-feedback"]')
    }


    // Actions
    clickRegisterButton() {
        this.registerButton.click()
    }

    fillFirstNameField(firstName) {
        this.firstNameField.type(firstName)
    }

    fillLastNameField(lastName) {
        this.lastNameField.type(lastName)
    }

    fillEmailField(email) {
        this.emailFieldR.type(email)
    }

    fillPasswordField(password) {
        this.passwordField.type(password, { sensitive: true })
    }

    fillRepeatPasswordField(repeatPassword) {
        this.repeatPasswordField.type(repeatPassword, { sensitive: true })
    }


    openRegistrationModal() {
        this.visitMainPage()
        this.clickSignUpButton()
    }


    static generateUserData() {
        return {
            firstName: faker.person.firstName().replace(/[^a-zA-Z\s]/g, ''),
            lastName: faker.person.lastName().replace(/[^a-zA-Z\s]/g, ''),
            email: faker.internet.email({
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                provider: 'testemail.com',
                allowSpecialCharacters: true
            }),
            validPassword: faker.internet.password({
                length: 8,
                pattern: /[A-Za-z0-9]/,
                prefix: 'A1a!'
            }),
        }
    }


}