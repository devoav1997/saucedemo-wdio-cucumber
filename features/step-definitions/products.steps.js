const { Given, When, Then } = require('@wdio/cucumber-framework')
const LoginPage = require('../pageobjects/login.page')
const ProductsPage = require('../pageobjects/products.page')
const CartPage = require('../pageobjects/cart.page')

/**
 * =========================
 * Background
 * =========================
 */
Given('user login sebagai standard user', async () => {
    await LoginPage.open()

    // RESET sebelum login
    await browser.execute(() => {
        window.localStorage.clear()
        window.sessionStorage.clear()
    })

    await LoginPage.login('standard_user', 'secret_sauce')
    await ProductsPage.isPageOpened()
})


/**
 * =========================
 * Add Product Scenarios
 * =========================
 */
When('user menambahkan 1 produk ke cart', async () => {
    await ProductsPage.addProductByIndex(0)
})

When('user menambahkan 2 produk ke cart', async () => {
    await ProductsPage.addProductByIndex(0)
    await ProductsPage.addProductByIndex(1)
})

When('user menghapus 1 produk dari cart', async () => {
    await ProductsPage.removeProductByIndex(0)
})

/**
 * =========================
 * Assertions
 * =========================
 */
Then('cart berisi {int} produk', async (expectedCount) => {
    await browser.waitUntil(
        async () => {
            const count = await CartPage.getCartItemCount()
            return count === expectedCount
        },
        {
            timeout: 5000,
            timeoutMsg: `Cart tidak berisi ${expectedCount} produk`
        }
    )
})

