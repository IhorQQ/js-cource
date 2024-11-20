import Methods from "../support/pageObject/BaseMethods";
import AddCarModal from "../support/pageObject/mainPage/garagePage/AddCarModal.js";
import AddExpenseModal from "../support/pageObject/mainPage/fuelExpensesPage/AddExpenseModal";


let methods
let addCarModal
let addExpenseModal
let userData
let date
let tomorrowDate


describe('Sign in checks', () => {

    before(() => {
        methods = new Methods()
        addCarModal = new AddCarModal()
        addExpenseModal = new AddExpenseModal()
        date = new Date()
        tomorrowDate = `${date.getUTCDate() + 1}.${date.getUTCMonth()}.${date.getUTCFullYear()}`
        console.log(tomorrowDate)
        userData = Methods.generateUserData()

    })

    beforeEach(() => {
        // cy.clearCookies()
        methods.createAccount(userData)
        methods.uiLogIn(userData)
    })

    it('User can add car + expenses', () => {
        addCarModal.addCar('BMW', 'X5', '111')
        addExpenseModal.addExpense('1000', '25', '200' )
    })

})