import BasePage from '../support/pageObject/basePageHW18'
import RegistrationModal from "../support/pageObject/registrationModal";

let basePage
let registrationModal

describe('Navigation buttons presented on the header of main page', () => {

    before (() => {
        basePage = new BasePage()
        registrationModal = new RegistrationModal()
    })

    beforeEach(() => {
        cy.visit('/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            }});
    })


    it('Check the header "Home" navigation button', () => {
        basePage.homeButton.should('be.visible').and("have.attr", 'href', '/')
    })

    it('Check the header "About" navigation button', () => {
        basePage.aboutButton.should('be.visible')
    })

    it('Check the header "Contacts" navigation button', () => {
        basePage.contactsButton.should('be.visible');
    })

    it('Check the header "Guest Log In" button', () => {
        basePage.guestLogInButton.should('be.visible').and('not.be.disabled');
        basePage.guestLogInButton.click()
        cy.get('[class="header_bar"]').should('be.visible').and('have.text', 'Logged in as guest, any changes will be lost!')
    })

    it('Check the header "Sign in" button', () => {
        basePage.signInButton.should('be.visible').and('not.be.disabled').click()
        cy.get('[class="modal-content"]').should('be.visible')
        cy.get('[class="modal-content"]').children().should('contain.text', 'Log in')
    })

    it('Check the header "Sign Up" button', () => {
        basePage.signUpButton.should('be.visible').and('not.be.disabled').click()
        cy.get('[class="modal-content"]').should('be.visible')
        cy.get('[class="modal-content"]').children().should('contain.text', 'Registration')
    })
});



describe('Social buttons are presented on the footer of main page', () => {

    before (() => {
        basePage = new BasePage()
    })

    beforeEach(() => {
        cy.visit('/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            }});
    })

    it('Check "Facebook" social icon', () => {
        basePage.facebookIconButton.parent().should('be.visible').and('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School')
    })

    it('Check "Telegram" social icon', () => {
        basePage.telegramIconButton.parent().should('be.visible').and('have.attr', 'href', 'https://t.me/ithillel_kyiv')
    })

    it('Check "YouTube" social icon', () => {
        basePage.youtubeIconButton.parent().should('be.visible').and('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1')
    })

    it('Check "Instagram" social icon', () => {
        basePage.instagramIconButton.parent().should('be.visible').and('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/')
    })

    it('Check "LinkedIn" social icon', () => {
        basePage.linkedinIconButton.parent().should('be.visible').and('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/')
    })

    it('Check Hillel url', () => {
        basePage.hillelUrl.should('be.visible').and('have.attr', 'href', 'https://ithillel.ua')
        basePage.hillelUrl.invoke('removeAttr', 'target', '_blank').click()
        cy.url().should('eq', 'https://ithillel.ua/')
    })

    it('Check Hillel email', () => {
        basePage.hillelEmail.should('be.visible').and('have.attr', 'href', 'mailto:developer@ithillel.ua')
    })
});

