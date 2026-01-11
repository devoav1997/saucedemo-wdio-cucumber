class CheckoutPage {
    get firstNameInput() { return $('#first-name') }
    get lastNameInput() { return $('#last-name') }
    get postalCodeInput() { return $('#postal-code') }
    get continueButton() { return $('#continue') }
    get errorMessage() { return $('.error-message-container') }

    async fillCheckoutForm({ firstName, lastName, postalCode }) {
        if (firstName !== undefined) await this.firstNameInput.setValue(firstName)
        if (lastName !== undefined) await this.lastNameInput.setValue(lastName)
        if (postalCode !== undefined) await this.postalCodeInput.setValue(postalCode)
    }

    async continue() {
        await this.continueButton.click()
    }

    async isErrorDisplayed() {
        await this.errorMessage.waitForDisplayed()
    }
}

module.exports = new CheckoutPage()