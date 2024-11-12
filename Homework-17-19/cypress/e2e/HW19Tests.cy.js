import RegistrationModal from '../support/pageObject/registrationModal';

let userData
let registrationModal;

describe('Sign up checks', () => {

    before(() => {
        registrationModal = new RegistrationModal()
        userData = RegistrationModal.generateUserData()

    })

    beforeEach(() => {
        registrationModal.openRegistrationModal()
    })

    context('"Name" field validation checks', () => {

        /*
              First name validation:
            • Empty field - "Name is required"
            • Wrong data - "Name is invalid"
            • Wrong length - "Name has to be from 2 to 20 characters long"|
            • Border color red

 */

        it('"Name" validation - empty field', () => {
            registrationModal.firstNameField.should('not.have.class', 'is-invalid')
            registrationModal.firstNameField.focus().blur()
            registrationModal.firstNameField.should('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Name required')
        })

        it('"Name" validation - wrong field data', () => {
            registrationModal.firstNameField.should('not.have.class', 'is-invalid')
            registrationModal.fillFirstNameField('!!')
            registrationModal.firstNameField.blur().and('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Name is invalid')
        })

        it('"Name" validation - <2 characters in the field', () => {
            registrationModal.firstNameField.should('not.have.class', 'is-invalid')
            registrationModal.fillFirstNameField('A')
            registrationModal.firstNameField.blur().and('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Name has to be from 2 to 20 characters long')
        })

        it('"Name" validation - >20 characters in the field', () => {
            registrationModal.firstNameField.should('not.have.class', 'is-invalid')
            registrationModal.fillFirstNameField('Aaaaaaaaaaaaaaaaaaaaa')
            registrationModal.firstNameField.blur().and('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Name has to be from 2 to 20 characters long')
        })

        it('"Name" validation - valid data does not trigger error', () => {
            registrationModal.fillLastNameField(userData.lastName)
            registrationModal.lastNameField.should('not.have.class', 'is-invalid')
            registrationModal.errorMessage.should('not.exist')
        })
    })

    context('"Last name" field validation checks', () => {

        /*
            Last name validation:
            • Empty field - "Last name is required"
            • Wrong data - "Last name is invalid"
            • Wrong length - "Last name has to be from 2 to 20 characters long"
            • Border color red
        */

        it('"Last name" validation - empty field', () => {
            registrationModal.lastNameField.should('not.have.class', 'is-invalid')
            registrationModal.lastNameField.focus().blur()
            registrationModal.lastNameField.should('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Last name required')
        })

        it('"Last name" validation - wrong field data', () => {
            registrationModal.lastNameField.should('not.have.class', 'is-invalid')
            registrationModal.fillLastNameField('!!')
            registrationModal.lastNameField.blur().and('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Last name is invalid')
        })

        it('"Last name" validation - <2 characters in the field', () => {
            registrationModal.lastNameField.should('not.have.class', 'is-invalid')
            registrationModal.fillLastNameField('A')
            registrationModal.lastNameField.blur().and('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Last name has to be from 2 to 20 characters long')
        })

        it('"Last name" validation - >20 characters in the field', () => {
            registrationModal.lastNameField.should('not.have.class', 'is-invalid')
            registrationModal.fillLastNameField('Aaaaaaaaaaaaaaaaaaaaa')
            registrationModal.lastNameField.blur().and('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Last name has to be from 2 to 20 characters long')
        })

        it('Validation - valid data does not trigger error', () => {
            registrationModal.fillLastNameField(userData.lastName)
            registrationModal.lastNameField.should('not.have.class', 'is-invalid')
            registrationModal.errorMessage.should('not.exist')
        })
    })

    context('"Email" field validation checks', () => {

        /*
            Email validation:
            • Wrong data - "Email is incorrect"
            • For empty field - "Email required"
            • Border color red
        */

        it('"Email" validation - empty field', () => {
            registrationModal.emailField.should('not.have.class', 'is-invalid')
            registrationModal.emailField.focus().blur()
            registrationModal.emailField.should('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Email required')
        })

        it('"Email" validation - wrong field data', () => {
            registrationModal.emailField.should('not.have.class', 'is-invalid')
            registrationModal.fillEmailField('test')
            registrationModal.emailField.blur().and('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Email is incorrect')
        })

        it('"Email" validation - valid data does not trigger error', () => {
            registrationModal.fillEmailField(userData.email)
            registrationModal.emailField.should('not.have.class', 'is-invalid')
            registrationModal.errorMessage.should('not.exist')
        })
    })

    context('"Password" field validation checks', () => {

        /*
            Password validation:
            • Wrong data - "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
            • For empty field error - "Password required"
            • Border color red
        */

        const validationCases = [
            ['Password validation - <8 characters, NO integer, NO capital', 'test'],
            ['Password validation - <8 characters, NO integer, with capital', 'Test'],
            ['Password validation - <8 characters, with integer, NO capital', 'test1'],
            ['Password validation - <8 characters, with integer and capital', 'Test1'],

            ['Password validation - 8 characters, NO integer, NO capital', 'testtest'],
            ['Password validation - 8 characters, NO integer, with capital', 'Testtest'],
            ['Password validation - 8 characters, with integer, NO capital', 'testtest1'],

            ['Password validation - >15 characters, NO integer, NO capital', 'testtesttesttest'],
            ['Password validation - >15 characters, NO integer, with capital', 'Testtesttesttest'],
            ['Password validation - >15 characters, with integer, NO capital', 'testtesttesttest1'],
            ['Password validation - >15 characters, with integer and capital', 'Testtesttesttest1']
        ]

        validationCases.forEach(([caseName, password]) => {
            it(caseName, () => {
                registrationModal.passwordField.should('not.have.class', 'is-invalid')
                registrationModal.fillPasswordField(password)
                registrationModal.passwordField.blur().should('have.class', 'is-invalid')
                registrationModal.errorMessage.should('be.visible').and('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            })

        })


        it('"Password" validation - empty field', () => {
            registrationModal.passwordField.should('not.have.class', 'is-invalid')
            registrationModal.passwordField.focus().blur()
            registrationModal.passwordField.should('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Password required')
        })


        it('"Password" validation - 8-15 characters, with integer and capital does not trigger error', () => {
            registrationModal.fillPasswordField(userData.validPassword)
            registrationModal.passwordField.should('not.have.class', 'is-invalid')
            registrationModal.errorMessage.should('not.exist')
        })


    })

    context('"Re-enter password" field validation checks', () => {

        /*
            Re-enter password validation:
            • Passwords do not match.
            • For empty field error - "Re-enter password required"
            • Border color red
        */

        it('"Re-enter password" validation - passwords do not match', () => {
            registrationModal.fillPasswordField('TestTest1')
            registrationModal.fillRepeatPasswordField('TestTest2')
            registrationModal.repeatPasswordField.blur().should('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Passwords do not match')
        })

        it('"Re-enter password" validation - empty field', () => {
            registrationModal.repeatPasswordField.should('not.have.class', 'is-invalid')
            registrationModal.repeatPasswordField.focus().blur()
            registrationModal.repeatPasswordField.should('have.class', 'is-invalid')
            registrationModal.errorMessage.should('be.visible').and('have.text', 'Re-enter password required')
        })

        it('"Re-enter password" validation - same passwords do not trigger the error', () => {
            registrationModal.fillPasswordField(userData.validPassword)
            registrationModal.fillRepeatPasswordField(userData.validPassword)
            registrationModal.repeatPasswordField.blur().should('not.have.class', 'is-invalid')
            registrationModal.errorMessage.should('not.exist')
        })



    })

    })