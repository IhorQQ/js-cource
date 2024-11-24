
import {LoginModal} from "./LoginModal";
import {faker} from "@faker-js/faker";


export default class Methods extends LoginModal {
    createAccountUI({ firstName, lastName, email, validPassword }) {
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

    createAccountAPI({firstName, lastName, email, validPassword}) {
        cy.request({
            method: 'POST',
            url: '/api/auth/signup',
            body: {
                "name": firstName,
                "lastName": lastName,
                "email": email,
                "password": validPassword,
                "repeatPassword": validPassword
            }

        }).then((response) => {
            expect(response.status).to.eql(201)
        })

    }

    logInAPI({email, validPassword}) {
        cy.request({
            method: 'POST',
            url: '/api/auth/signin',
            body: {
                "email": email,
                "password": validPassword,
                "remember": false
            }
        }).then((response) => {
            expect(response.status).to.eql(200)
        })
    }

    static generateUserData() {
        return {
            firstName: faker.person.firstName().replace(/[^a-zA-Z\s]/g, ''),
            lastName: faker.person.lastName().replace(/[^a-zA-Z\s]/g, ''),
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