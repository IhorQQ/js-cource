import FuelExpensesPage from "./FuelExpensesPage";
import AddCarModal from "../garagePage/AddCarModal";

// Get the current date
const currentDate = new Date();

// Get year, month, and day
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const day = String(currentDate.getDate()).padStart(2, '0');

// Format the date as "yyyy-mm-dd"
const formattedDate = `${year}-${month}-${day}`;

console.log(formattedDate); // Output example: "2024-11-24"


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
        cy.request('POST', 'https://qauto.forstudy.space/api/expenses', {
            "carId": carId,
            "reportedAt": formattedDate,
            "mileage": mileage + 1,
            "liters": liters,
            "totalCost": totalCost,
            "forceMileage": false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.carId).to.eq(carId);
            expect(response.body.data.id).to.exist
            expect(response.body.data.liters).to.eq(liters);
            expect(response.body.data.mileage).to.eq(mileage + 1);
            expect(response.body.data.reportedAt).to.eq(formattedDate);
            expect(response.body.data.totalCost).to.eq(totalCost);

        })
    }
}