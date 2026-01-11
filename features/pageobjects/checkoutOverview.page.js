class CheckoutOverviewPage {
    get finishButton() { return $('#finish') }

    async finish() {
        await this.finishButton.waitForClickable()
        await this.finishButton.click()
    }
}

module.exports = new CheckoutOverviewPage()
