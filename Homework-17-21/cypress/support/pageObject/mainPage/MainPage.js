


export default class MainPage {


    // Selectors

    btnClass = '[class*=btn-sidebar]'

    get garageNavBar() {
        return cy.get(this.btnClass).contains('Garage')
    }

    get fuelExpensesNavBar() {
        return cy.get(this.btnClass).contains('Fuel expenses')
    }

    get instructionsNavBar() {
        return cy.get(this.btnClass).contains('Instructions')
    }

    get profileNavBar() {
        return cy.get(this.btnClass).contains('Profile')
    }

    get settingsNavBar() {
        return cy.get(this.btnClass).contains('Settings')
    }

    get logOutNavBar() {
        return cy.get(this.btnClass).contains('Log out')
    }





    // Actions

    visitGarage() {
        cy.visit('/panel/garage');
    }


    visitFuelExpenses() {
        cy.visit('/panel/expenses');
    }

    visitInstructions() {
        cy.visit('/panel/instructions');
    }

    visitProfile() {
        cy.visit('/panel/profile');
    }

    visitSettings() {
        cy.visit('/panel/settings');
    }

    logOut() {
        this.logOutNavBar.click();
    }

    getCarsAPI() {
        return cy.request({
            method: 'GET',
            url: '/api/cars',
        })
    }
}
