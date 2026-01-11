class CheckoutCompletePage {
    get completeHeader() { return $('.complete-header') }

    async isOrderComplete() {
        await this.completeHeader.waitForDisplayed({
            timeoutMsg: 'Order tidak berhasil diselesaikan'
        })
    }
}

module.exports = new CheckoutCompletePage()
