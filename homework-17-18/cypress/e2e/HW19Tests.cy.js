import RegistrationModal from '../support/pageObject/registrationModal';

let userData
let registrationModal;

describe('Sign up checks', () => {

    before(() => {
        registrationModal = new RegistrationModal()

    })

    describe('Validation checks', () => {
        beforeEach(() => {
            userData = registrationModal.generateUserData()
            registrationModal.openRegistrationModal()
            })


        it('Check the form filling', () => {
            registrationModal.fillFirstNameField(userData.firstName).should('contain.text', userData.firstName)
            registrationModal.fillLastNameField(userData.lastName)
            registrationModal.fillEmailField(userData.email)
            registrationModal.fillPasswordField(userData.password)
            registrationModal.fillRepeatPasswordField(userData.password)
        })

    })


})