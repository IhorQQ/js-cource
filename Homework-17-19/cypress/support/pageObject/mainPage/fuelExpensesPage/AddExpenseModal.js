import FuelExpensesPage from "./FuelExpensesPage";
import AddCarModal from "../garagePage/AddCarModal";

export default class AddExpenseModal extends AddCarModal {
    constructor() {
        super();
        this.fuelExpensesPage = new FuelExpensesPage();
    }

    get vehicleDD() {
        return cy.get('[id="addExpenseCar"]')
    }

    get reportDateInputField() {
        return cy.get('[id="addExpenseDate"]')
    }

    get mileageExpensesInputField() {
        return cy.get('input[id="addExpenseMileage"]')
    }

    get  numberLitersInputField() {
        return cy.get('input[id="addExpenseLiters"]')
    }

    get totalCostInputField() {
        return cy.get('[id="addExpenseTotalCost"]')
    }


    // Actions

    addExpense(vehicle, reportDate, mileage, numberLiters, totalCost) {
        this.mainPage.fuelExpensesNavBar.click()
        this.fuelExpensesPage.addExpenseBtn.click()
        this.vehicleDD.select(vehicle)
        this.reportDateInputField.clear().type(reportDate)
        this.mileageExpensesInputField.clear().type(mileage)
        this.numberLitersInputField.type(numberLiters)
        this.totalCostInputField.type(totalCost)
        this.addBtn.click()
        this.successAlert.should('be.visible').and('have.text', 'Fuel expense added')

    }
}