export default class FuelExpensesPage {

    get addExpenseBtn() {
        return cy.get('button[class*=btn-primary]').contains('Add an expense');
    }

    addExpense() {
        this.addExpenseBtn.click();

    }

}