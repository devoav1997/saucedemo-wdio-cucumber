const { Given, When, Then } = require('@wdio/cucumber-framework')
const LoginPage = require('../pageobjects/login.page')
const ProductsPage = require('../pageobjects/products.page')
const CartPage = require('../pageobjects/cart.page')
const CheckoutPage = require('../pageobjects/checkout.page')
const CheckoutOverviewPage = require('../pageobjects/checkoutOverview.page')
const CheckoutCompletePage = require('../pageobjects/checkoutComplete.page')

/**
 * =========================
 * Background
 * =========================
 */
Given('user login dan memiliki produk di cart', async () => {
    await LoginPage.open()
    await LoginPage.login('standard_user', 'secret_sauce')
    await ProductsPage.isPageOpened()

    // Pastikan cart kosong dulu
    await browser.execute(() => {
        window.localStorage.clear()
        window.sessionStorage.clear()
    })

    // Tambah 1 produk
    await ProductsPage.addProductByIndex(0)

    // Masuk ke cart
    await CartPage.open()
})

/**
 * =========================
 * Checkout Actions
 * =========================
 */
When('user checkout dengan data valid', async () => {
    await CartPage.checkout()

    await CheckoutPage.fillCheckoutForm({
        firstName: 'Budi',
        lastName: 'Testing',
        postalCode: '12345'
    })

    await CheckoutPage.continue()
    await CheckoutOverviewPage.finish()
})

When('user checkout tanpa first name', async () => {
    await CartPage.checkout()

    await CheckoutPage.fillCheckoutForm({
        firstName: '',
        lastName: 'Testing',
        postalCode: '12345'
    })

    await CheckoutPage.continue()
})

When('user checkout tanpa last name', async () => {
    await CartPage.checkout()

    await CheckoutPage.fillCheckoutForm({
        firstName: 'Budi',
        lastName: '',
        postalCode: '12345'
    })

    await CheckoutPage.continue()
})

When('user checkout tanpa postal code', async () => {
    await CartPage.checkout()

    await CheckoutPage.fillCheckoutForm({
        firstName: 'Budi',
        lastName: 'Testing',
        postalCode: ''
    })

    await CheckoutPage.continue()
})

/**
 * =========================
 * Assertions
 * =========================
 */
Then('order berhasil diselesaikan', async () => {
    await CheckoutCompletePage.isOrderComplete()
})

Then('tampil error message checkout', async () => {
    await CheckoutPage.isErrorDisplayed()
})
