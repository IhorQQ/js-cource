export default class GaragePage {


    // Locators
    btnClass = 'button[class*=btn-primary]'

    get addCarBtn() {
        return cy.get(this.btnClass).contains('Add car')
    }

    get addExpenseBtn() {
        return cy.get('button[class*=car_add-expense]').contains('Add fuel expense')
    }


    // Actions

    visit() {
        cy.visit('/panel/garage');
    }

}