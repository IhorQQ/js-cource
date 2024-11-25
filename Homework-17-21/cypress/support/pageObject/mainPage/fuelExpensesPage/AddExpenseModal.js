import FuelExpensesPage from "./FuelExpensesPage";
import AddCarModal from "../garagePage/AddCarModal";
import Methods from "../../BaseMethods";


export default class AddExpenseModal extends AddCarModal {
    constructor() {
        super();
        this.fuelExpensesPage = new FuelExpensesPage();
        this.methods = new Methods();
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

    get successAlertExpenseAdded() {
        return cy.get('[class*=alert-success]').contains('Fuel expense added');
    }


    // Actions


    // This doesn't fill the prefilled fields
    addExpenseUI({ mileage, liters, totalCost }) {
        this.mainPage.fuelExpensesNavBar.click()
        this.fuelExpensesPage.addExpenseBtn.click()
        // this.vehicleDD.select(vehicle)
        // this.reportDateInputField.clear().type(reportDate)
        this.mileageExpensesInputField.clear().type(mileage + 1)
        this.numberLitersInputField.type(liters)
        this.totalCostInputField.type(totalCost)
        this.addBtn.click()
        this.successAlertExpenseAdded.should('be.visible').and('have.text', 'Fuel expense added')

    }

    addExpenseAPI(carId, { mileage, liters, totalCost }) {
        return cy.request('POST', 'https://qauto.forstudy.space/api/expenses', {
            "carId": carId,
            "reportedAt": this.methods.currentDate(),
            "mileage": mileage + 1,
            "liters": liters,
            "totalCost": totalCost,
            "forceMileage": false
        })
    }
}