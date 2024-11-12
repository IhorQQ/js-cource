
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

    get hillelUrl() {
        return cy.get('[class*="contacts_link"]').contains('ithillel.ua')
    }

    get hillelEmail() {
        return cy.get('[class*="contacts_link"]').contains('support@ithillel.ua')
    }






    // Actions
    clickHomeButton() {
        this.homeButton.click()
    }

    clickAboutButton() {
        this.aboutButton.click()
    }

    clickContactsButton() {
        this.contactsButton.click();
    }

    clickGuestLogInButton() {
        this.guestLogInButton.click();
    }

    clickSignInButton() {
        this.signInButton.click();
    }

    clickSignUpButton() {
        this.signUpButton.click();
    }

}