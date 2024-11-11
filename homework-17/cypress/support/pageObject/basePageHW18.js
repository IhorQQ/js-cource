
export default class BasePage {

    // Header locators
    get homeButton() {
        return cy.get('[class^=btn]').contains('Home')
    }

    get aboutButton() {
        return cy.get('[class^=btn]').contains('About')
    }

    get contactsButton() {
        return cy.get('[class^=btn]').contains('Contacts')
    }

    get guestLogInButton() {
        return cy.get('button').contains('Guest log in')
    }

    get signInButton() {
        return cy.get('button').contains('Sign In')
    }

    get signUpButton() {
        return cy.get('button').contains('Sign up')
    }

    // Footer locators

    parentContainer = '[class^=contacts_socials]';


    get facebookIconButton() {
        return cy.get(this.parentContainer).find('[class*="icon-facebook"]');
    }

    get telegramIconButton() {
        return cy.get(this.parentContainer).find('[class*="icon-telegram"]');
    }

    get youtubeIconButton() {
        return cy.get(this.parentContainer).find('[class*="icon-youtube"]');
    }

    get instagramIconButton() {
        return cy.get(this.parentContainer).find('[class*="icon-instagram"]');
    }

    get linkedinIconButton() {
        return cy.get(this.parentContainer).find('[class*="icon-linkedin"]');
    }





    // Actions
    clickHome() {
        this.homeButton.click()
    }

    clickAbout() {
        this.aboutButton.click()
    }

    clickContacts() {
        this.contactsButton.click();
    }

    clickGuestLogIn() {
        this.guestLogInButton.click();
    }

    clickSignIn() {
        this.signInButton.click();
    }

    clickSignUp() {
        this.clickSignUp.click();
    }

}