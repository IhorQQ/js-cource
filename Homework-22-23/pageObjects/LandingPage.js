import BasePage from "./BasePage";
import {expect} from "@playwright/test";

export default class LandingPage extends BasePage {
    constructor(page) {
        super(page);
    }

    locators = {
        signInButton: this.page.getByRole("button", { name: "Sigh In" }),
        signUpButton: this.page.getByRole("button", { name: "Sign Up" }),
        registrationModal: this.page.locator('div[class="modal-content"]')
    }

    async openSignInModal() {
        await this.gotoBasePage()
        await this.locators.signInButton.click();
    }

    async openSignUpModal() {
        await this.gotoBasePage()
        await this.locators.signUpButton.click();
        await expect(this.locators.registrationModal).toBeVisible()
    }


}