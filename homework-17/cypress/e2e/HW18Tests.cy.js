import BasePage from '../support/pageObject/basePageHW18'

let basePage

describe('Navigation buttons presented on the header of main page', () => {

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
    })

    it('Check the header "Sign in" button', () => {
        basePage.signInButton.should('be.visible').and('not.be.disabled');
    })

    it('Check the header "Sign Up" button', () => {
        basePage.signUpButton.should('be.visible').and('not.be.disabled');
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
});

