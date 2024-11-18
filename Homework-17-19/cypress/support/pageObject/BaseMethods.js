
import {LoginModal} from "./LoginModal";


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
    }
}