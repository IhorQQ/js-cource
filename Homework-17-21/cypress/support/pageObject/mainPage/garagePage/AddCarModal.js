import GaragePage from '../garagePage/GaragePage';
import MainPage from '../MainPage';

export default class AddCarModal {

    constructor() {
        this.garagePage = new GaragePage();
        this.mainPage = new MainPage();
    }

    // Locators

    get brandDD() {
        return cy.get('[id="addCarBrand"]');
    }

    get modelDD() {
        return cy.get('[id="addCarModel"]');
    }

    get mileageInputField() {
        return cy.get('[id="addCarMileage"]')
    }

    get cancelBtn() {
        return cy.get('div[class="modal-content"]').children().contains('button', 'Cancel');
    }

    get addBtn() {
        return cy.get('div[class="modal-content"]').children().contains('button', 'Add');
    }

    get successAlert() {
        return cy.get('[class*=alert-success]')
    }


    //Actions

    addCarUI(brand, model, mileage) {
        this.mainPage.garageNavBar.click()
        this.garagePage.addCarBtn.click()
        this.brandDD.select(brand)
        this.modelDD.select(model)
        this.mileageInputField.type(mileage)
        this.addBtn.click()
        this.successAlert.should('be.visible').and('have.text', 'Car added');
        }


    addCarAPI(brandId, modelId, mileage) {
        cy.request('POST', 'https://qauto.forstudy.space/api/cars', {
            "carBrandId": brandId,
            "carModelId": modelId,
            "mileage": mileage
        }).then((response) => {
            expect(response.status).to.eq(201);
        })
    }
}