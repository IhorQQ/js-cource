import { test, expect } from '@playwright/test';
import LandingPage from '../pageObjects/LandingPage';
import SignUpModal from "../pageObjects/SignUpModal";
import BasePage from "../pageObjects/BasePage";
import 'dotenv/config'



let landingPage;
let signUpModal
let userData

test.describe('Test suite for checking validations', () => {


  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    signUpModal = new SignUpModal(page);
    userData = BasePage.generateUserData()
    await landingPage.openSignUpModal()
  })

  test.describe('Firstname validation checks', () => {

    // • Empty field - "Name required"
    // • Wrong data - "Name is invalid"
    // • Wrong length - "Name has to be from 2 to 20 characters long"
    // • Border color red

    const testCasesNegative = [
      ["First name validation check - empty field", "", "Name required"],
      ["First name validation check - invalid data (special chars + numbers)", "1234!@#", "Name is invalid"],
      ["First name validation check - <2 letters", "A", "Name has to be from 2 to 20 characters long"],
      ["First name validation check - >20 letters", "ThisNameIsWayTooLongForValidation", "Name has to be from 2 to 20 characters long"],
    ];

    testCasesNegative.forEach(([caseName, input, message]) => {
      test(caseName, async () => {
        await expect(signUpModal.locators.validationError).toBeHidden()
        await signUpModal.fillFirstName(input)
        await signUpModal.locators.firstNameField.blur()
        await expect(signUpModal.locators.validationError).toBeVisible()
        await expect(signUpModal.locators.validationError).toHaveText(message)
        await expect(signUpModal.locators.firstNameField).toHaveClass(/.*\bis-invalid\b.*/)
      })
    })

    test('First name validation check - valid input does not trigger the validation error', async () => {
      await expect(signUpModal.locators.validationError).toBeHidden()
      await signUpModal.fillFirstName('John')
      await signUpModal.locators.firstNameField.blur()
      await expect(signUpModal.locators.validationError).toBeHidden()
      await expect(signUpModal.locators.firstNameField).not.toHaveClass(/.*\bis-invalid\b.*/)
    })


  })

  test.describe('Last name validation checks', () => {
    // • Empty field - "Last name required"
    // • Wrong data - "Last name is invalid"
    // • Wrong length - "Last name has to be from 2 to 20 characters long"
    // • Border color

    const testCasesNegative = [
      ["Last name validation check - empty field", "", "Last name required"],
      ["Last name validation check - invalid data (special chars + numbers)", "1234!@#", "Last name is invalid"],
      ["Last name validation check - <2 letters", "A", "Last name has to be from 2 to 20 characters long"],
      ["Last name validation check - >20 letters", "ThisNameIsWayTooLongForValidation", "Last name has to be from 2 to 20 characters long"],
    ];

    testCasesNegative.forEach(([caseName, input, message]) => {
      test(caseName, async () => {
        await expect(signUpModal.locators.validationError).toBeHidden()
        await signUpModal.fillLastName(input)
        await signUpModal.locators.lastNameField.blur()
        await expect(signUpModal.locators.validationError).toBeVisible()
        await expect(signUpModal.locators.validationError).toHaveText(message)
        await expect(signUpModal.locators.lastNameField).toHaveClass(/.*\bis-invalid\b.*/)
      })
    })

    test('Last name validation check - valid input does not trigger the validation error', async () => {
      await expect(signUpModal.locators.validationError).toBeHidden()
      await signUpModal.fillLastName('Doe')
      await signUpModal.locators.lastNameField.blur()
      await expect(signUpModal.locators.validationError).toBeHidden()
      await expect(signUpModal.locators.lastNameField).not.toHaveClass(/.*\bis-invalid\b.*/)
    })

  })

  test.describe('Email validation checks', () => {

    // • Wrong data - "Email is incorrect"
    // • For empty field - "Email required"
    // • Border color red

    const emailTestCasesNeagative = [
      ["Email validation check - Missing '@' symbol", "testexample.com", "Email is incorrect"],
      ["Email validation check - Missing domain", "test@.com", "Email is incorrect"],
      ["Email validation check - Missing TLD", "test@example", "Email is incorrect"],
      ["Email validation check - Extra characters after domain", "test@example..com", "Email is incorrect"],
      ["Email validation check - Spaces in email", "test @example.com", "Email is incorrect"],
      ["Email validation check - Empty field", "", "Email required"]
    ];

    emailTestCasesNeagative.forEach(([caseName, input, message]) => {
      test(caseName, async () => {
        await expect(signUpModal.locators.validationError).toBeHidden()
        await signUpModal.fillEmail(input)
        await signUpModal.locators.emailField.blur()
        await expect(signUpModal.locators.validationError).toBeVisible()
        await expect(signUpModal.locators.validationError).toHaveText(message)
        await expect(signUpModal.locators.emailField).toHaveClass(/.*\bis-invalid\b.*/)
      })
    })

    test('Email validation check - valid input does not trigger the validation error', async () => {
      await expect(signUpModal.locators.validationError).toBeHidden()
      await signUpModal.fillEmail('test@gmail.com')
      await signUpModal.locators.emailField.blur()
      await expect(signUpModal.locators.validationError).toBeHidden()
      await expect(signUpModal.locators.emailField).not.toHaveClass(/.*\bis-invalid\b.*/)
    })

  })


  test.describe('Password validation checks', () => {

    // • Wrong data - "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    // • For empty field error - "Password required"
    // • Border color red

    const passwordValidationMessage = "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    const passwordTestCasesNegative = [
      ["Password validation check - Wrong data (too short)", "Pass12", passwordValidationMessage],
      ["Password validation check - Wrong data (too long)", "ThisIsAReallyLongPassword12345", passwordValidationMessage],
      ["Password validation check - Wrong data (missing integer)", "PasswordExample", passwordValidationMessage],
      ["Password validation check - Wrong data (missing capital letter)", "password123", passwordValidationMessage],
      ["Password validation check - Wrong data (missing small letter)", "PASSWORD123", passwordValidationMessage],
      ["Password validation check - Empty field", "", "Password required"]
    ];

    passwordTestCasesNegative.forEach(([caseName, input, message]) => {
      test(caseName, async () => {
        await expect(signUpModal.locators.validationError).toBeHidden()
        await signUpModal.fillPassword(input)
        await signUpModal.locators.passwordField.blur()
        await expect(signUpModal.locators.validationError).toBeVisible()
        await expect(signUpModal.locators.validationError).toHaveText(message)
        await expect(signUpModal.locators.passwordField).toHaveClass(/.*\bis-invalid\b.*/)
      })
    })

    test('Password validation check - valid input does not trigger the validation error', async ({ page }) => {
      await expect(signUpModal.locators.validationError).toBeHidden()
      await page.go
      await signUpModal.fillPassword('RestTest1!')
      await signUpModal.locators.passwordField.blur()
      await expect(signUpModal.locators.validationError).toBeHidden()
      await expect(signUpModal.locators.passwordField).not.toHaveClass(/.*\bis-invalid\b.*/)
    })

  })


  test.describe('Repeat password validation checks', () => {

    // • Passwords do not match.
    // • For empty field error - "Re-enter password required"
    // • Border color

    const repeatPasswordTestCasesNegative = [
      ["Repeat password validation check - Passwords do not match", "Password123", "Password456", "Passwords do not match"],
      ["Repeat password validation check - Empty field", "", "Password123", "Re-enter password required"]
    ];

    repeatPasswordTestCasesNegative.forEach(([caseName, repeatPass, pass, message]) => {
      test(caseName, async () => {
        await expect(signUpModal.locators.validationError).toBeHidden()
        await signUpModal.fillPassword(pass)
        await signUpModal.fillRepeatPassword(repeatPass)
        await signUpModal.locators.repeatPasswordField.blur()
        await expect(signUpModal.locators.validationError).toBeVisible()
        await expect(signUpModal.locators.validationError).toHaveText(message)
        await expect(signUpModal.locators.repeatPasswordField).toHaveClass(/.*\bis-invalid\b.*/)
      })
    })

    test('Repeat password validation check - valid input does not trigger the validation error', async () => {
      await expect(signUpModal.locators.validationError).toBeHidden()
      await signUpModal.fillPassword('RestTest1!')
      await signUpModal.fillRepeatPassword('RestTest1!')
      await signUpModal.locators.repeatPasswordField.blur()
      await expect(signUpModal.locators.validationError).toBeHidden()
      await expect(signUpModal.locators.repeatPasswordField).not.toHaveClass(/.*\bis-invalid\b.*/)
    })

  })

  test.describe('Registration checks', () => {

    test('The "Register" button becomes active only when all required fields are filled with valid data', async () => {
      await expect(signUpModal.locators.registerButton).toBeDisabled()
      await signUpModal.fillFirstName(userData.firstName)
      await expect(signUpModal.locators.registerButton).toBeDisabled()
      await signUpModal.fillLastName(userData.lastName)
      await expect(signUpModal.locators.registerButton).toBeDisabled()
      await signUpModal.fillEmail(userData.email)
      await expect(signUpModal.locators.registerButton).toBeDisabled()
      await signUpModal.fillPassword(userData.password)
      await expect(signUpModal.locators.registerButton).toBeDisabled()
      await signUpModal.fillRepeatPassword(userData.password)
      await expect(signUpModal.locators.registerButton).toBeEnabled()
    })

    test('User can create account with valid data', async ({ page }) => {
      await signUpModal.createUserUI(userData)
      const responsePromise = await page.waitForResponse('/api/auth/signup')
      await expect(page).toHaveURL('/panel/garage')
      const response = await responsePromise.json()
      expect(response).toHaveProperty('status', 'ok')
      expect(response).toHaveProperty('data.userId')
    })
  })

})