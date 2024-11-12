import BasePage from '../pageObject/basePageHW18'
import { faker } from '@faker-js/faker';

export default class RegistrationModal extends BasePage {

    get firstNameField() {
        return cy.get('input[id="signupName"]')
    }

    get lastNameField() {
        return cy.get('input[id="signupLastName"]')
    }

    get emailField() {
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


    // Actions
    clickRegisterButton() {
        this.registerButton.click()
    }

    fillFirstNameField(firstName) {
        this.firstName.type(firstName)
    }

    fillLastNameField(lastName) {
        this.lastNameField.type(lastName)
    }

    fillEmailField(email) {
        this.emailField.type(email)
    }

    fillPasswordField(password) {
        this.passwordField.type(password)
    }

    fillRepeatPasswordField(repeatPassword) {
        this.repeatPasswordField.type(repeatPassword)
    }

    openRegistrationModal() {
        cy.visit('/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            }});
        this.clickSignUpButton()
    }

    static generateUserData() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email({
                firstName: this.firstName,
                lastName: this.lastName,
                provider: 'testemail.com',
                allowSpecialCharacters: true
            }),
            validPassword: faker.internet.password({
                length: 8,
                pattern: /[A-Za-z0-9]/,
                prefix: 'A1!'
            }),
        }
    }


}