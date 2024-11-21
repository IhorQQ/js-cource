import Methods from "../support/pageObject/BaseMethods";
import AddCarModal from "../support/pageObject/mainPage/garagePage/AddCarModal.js";
import AddExpenseModal from "../support/pageObject/mainPage/fuelExpensesPage/AddExpenseModal";

let methods
let addCarModal
let addExpenseModal
let userData

describe('Sign in checks', () => {

    let createdCarId
    before(() => {
        methods = new Methods()
        addCarModal = new AddCarModal()
        addExpenseModal = new AddExpenseModal()
        userData = Methods.generateUserData()
    })

    beforeEach(() => {
        methods.createAccount(userData)
        methods.uiLogIn(userData)
    })

    it('User can add car + expenses', () => {
        cy.intercept('POST', 'https://qauto.forstudy.space/api/cars').as('createCar');
        addCarModal.addCar('BMW', 'X5', '111')
        addExpenseModal.addExpense('1000', '25', '200')


        cy.wait('@createCar').then((interception) => {
            cy.log('Full Response Body:', JSON.stringify(interception.response.body))
            expect(interception.response.statusCode).to.eq(201); // Ensure the car creation was successful
            createdCarId = interception.response.body.data.id; // Adjust the path if the response format is different
            cy.log('Created Car ID:', createdCarId);
            cy.request('GET', 'https://qauto.forstudy.space/api-docs/#/Cars/getCars')
        })

    })

})