
import {LoginModal} from "./LoginModal";
import {faker} from "@faker-js/faker";


export default class Methods extends LoginModal {
    createAccount({ firstName, lastName, email, validPassword }) {
        this.openRegistrationModal()
        this.fillFirstNameField(firstName)
        this.fillLastNameField(lastName)
        this.fillEmailField(email)
        this.fillPasswordField(validPassword)
        this.fillRepeatPasswordField(validPassword)
        this.clickRegisterButton()
    }

    uiLogIn({email, validPassword}) {
        this.openLognModal()
        this.fillLoginForm({email, validPassword})
        this.clickLoginButton()
        cy.url().should('include', '/panel/garage')
    }

    static generateUserData() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email({
                firstName: faker.person.firstName().replace(/[^a-zA-Z\s]/g, ''),
                lastName: faker.person.lastName().replace(/[^a-zA-Z\s]/g, ''),
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