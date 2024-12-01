import BasePage from "./BasePage";

export default class SignUpModal extends BasePage {

  constructor(page) {
    super(page)
  }

  locators = {
    firstNameField: this.page.locator('input[id="signupName"]'),
    lastNameField: this.page.locator('input[id="signupLastName"]'),
    emailField: this.page.locator('input[id="signupEmail"]'),
    passwordField: this.page.locator('input[id="signupPassword"]'),
    repeatPasswordField: this.page.locator('input[id="signupRepeatPassword"]'),
    registerButton: this.page.getByRole('button', { name: 'Register' }),
    validationError: this.page.locator('div[class="invalid-feedback"]'),
  }

  async fillFirstName (firstName) {
    await this.locators.firstNameField.fill(firstName)
  }

  async fillLastName (lastName) {
    await this.locators.lastNameField.fill(lastName)
  }

  async fillEmail (email) {
    await this.locators.emailField.fill(email)
  }

  async fillPassword (password) {
    await this.locators.passwordField.fill(password)
  }

  async fillRepeatPassword (repeatPassword) {
    await this.locators.repeatPasswordField.fill(repeatPassword)
  }

  async clickRegisterButton() {
    await this.locators.registerButton.click()
  }

  async fillSignUpForm ({ firstName, lastName, email, password }) {
    await this.fillFirstName(firstName)
    await this.fillLastName(lastName)
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.fillRepeatPassword(password)
  }

  async createUserUI(userData) {
    await this.fillSignUpForm(userData)
    await this.clickRegisterButton()
  }
}