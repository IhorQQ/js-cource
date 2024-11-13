import RegistrationModal from "./registrationModal";
import '../commands'

export class LoginModal extends RegistrationModal {

    // Locators
    get emailFieldL() {
        return cy.get('input[id="signinEmail"]');
    }

    get passwordFieldL() {
        return cy.get('input[id="signinPassword"]');
    }

    get loginButton() {
        return cy.get('button[class="btn btn-primary"]').contains('Login');
    }


    // Actions

    fillLoginForm({email, validPassword}) {
        this.emailFieldL.type(email)
        this.passwordFieldL.type(validPassword, { sensitive: true })
    }

    clickLoginButton() {
        this.loginButton.click()
    }

    openLognModal() {
        this.visitMainPage()
        this.clickSignInButton()
    }
}