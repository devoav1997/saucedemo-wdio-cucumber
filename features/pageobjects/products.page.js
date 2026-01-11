class ProductsPage {
    get inventoryItems() {
        return $$('.inventory_item')
    }

    get cartBadge() {
        return $('.shopping_cart_badge')
    }
      get menuButton() {
        return $('#react-burger-menu-btn')
    }

    // get resetAppStateButton() {
    //     return $('#reset_sidebar_link')
    // }

    // get closeMenuButton() {
    //     return $('#react-burger-cross-btn')
    // }

    // async resetAppState() {
    //     await this.menuButton.click()
    //     await this.resetAppStateButton.waitForClickable()
    //     await this.resetAppStateButton.click()
    //     await this.closeMenuButton.click()
    // }

    async isPageOpened() {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('inventory'),
            {
                timeout: 5000,
                timeoutMsg: 'Products page tidak terbuka'
            }
        )
    }

    async addProductByIndex(index) {
        const item = await $$('.inventory_item')[index]
        const addButton = await item.$('.btn_inventory')
        await addButton.waitForClickable()
        await addButton.click()
    }

    async removeProductByIndex(index) {
        const item = await $$('.inventory_item')[index]
        const removeButton = await item.$('.btn_inventory')
        await removeButton.waitForClickable()
        await removeButton.click()
    }

}

module.exports = new ProductsPage()
