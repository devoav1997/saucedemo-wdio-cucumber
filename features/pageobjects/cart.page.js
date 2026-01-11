class CartPage {
    get checkoutButton() { return $('#checkout') }
    get cartBadge() {
        return $('.shopping_cart_badge')
    }

    async open() {
        await browser.url('/cart.html')
    }

    async removeItemByIndex(index) {
        const items = await $$('.cart_item')
        await items[index].$('.cart_button').click()
    }

    async checkout() {
        await this.checkoutButton.waitForClickable()
        await this.checkoutButton.click()
    }

  

    async getCartItemCount() {
        if (await this.cartBadge.isExisting()) {
            const text = await this.cartBadge.getText()
            return Number(text)
        }
        return 0
    }
}

module.exports = new CartPage()
