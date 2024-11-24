import Methods from "../support/pageObject/BaseMethods";
import AddCarModal from "../support/pageObject/mainPage/garagePage/AddCarModal.js";
import AddExpenseModal from "../support/pageObject/mainPage/fuelExpensesPage/AddExpenseModal";
import MainPage from "../support/pageObject/mainPage/MainPage";

let methods
let addCarModal
let addExpenseModal
let userData
let mainPage

const carData_BMWX5 = {
    brand: 'BMW',
    model: 'X5',
    mileage: 111,
    liters: 11,
    totalCost: 11,
    brandId: 2,
    modelId: 8
}


describe('Car + expenses adding suite', () => {


    before(() => {
        methods = new Methods()
        addCarModal = new AddCarModal()
        addExpenseModal = new AddExpenseModal()
        mainPage = new MainPage()
    })

    beforeEach(() => {
        userData = Methods.generateUserData()
        methods.createAccountAPI(userData)
        cy.clearCookies()
        methods.uiLogIn(userData)
    })

    it('User can add car + expenses via UI', () => {
        cy.intercept('POST', 'https://qauto.forstudy.space/api/cars').as('createCar');

        // Create car on UI side
        addCarModal.addCarUI(carData_BMWX5)

        // Add expense on UI side
        addExpenseModal.addExpenseUI(carData_BMWX5)

        // Verifying that the GET /cars EP contains the created car with correct data
        cy.wait('@createCar').then((interception) => {
            expect(interception.response.statusCode).to.eq(201);
            const createdCarId = interception.response.body.data.id;
            mainPage.getCarsAPI().then((response) => {
                expect(response.body.data[0].id).to.eq(createdCarId);
                expect(response.body.data[0].brand).to.eq(carData_BMWX5.brand);
                expect(response.body.data[0].model).to.eq(carData_BMWX5.model);
                expect(response.body.data[0].carBrandId).to.eq(carData_BMWX5.brandId);
                expect(response.body.data[0].carModelId).to.eq(carData_BMWX5.modelId);
                expect(response.body.data[0].initialMileage).to.eq(carData_BMWX5.mileage);
            })
        })

    })

    it('User can add car + expenses via API', () => {
        addCarModal.addCarAPI(carData_BMWX5)
        mainPage.getCarsAPI().then((response) => {
            const lastAddedCarId = response.body.data[0].id;
            addExpenseModal.addExpenseAPI(lastAddedCarId, carData_BMWX5);
        })
    })

})