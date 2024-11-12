// Locators

function fieldLocator (fieldName) {
    return `[data-test="${fieldName}"]`

}

export default {
    usernameField: fieldLocator('username'),
    passwordField: fieldLocator('password'),
    loginButton: fieldLocator('login-button'),
}