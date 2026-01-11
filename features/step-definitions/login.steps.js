const { Given, When, Then } = require('@wdio/cucumber-framework')
const LoginPage = require('../pageobjects/login.page')

Given('user membuka halaman login', async () => {
    await LoginPage.open()
})

When(
    'user login dengan username {string} dan password {string}',
    async (username, password) => {
        const user = username === '' ? null : username
        const pass = password === '' ? null : password

        await LoginPage.login(user, pass)
    }
)

Then('user berhasil masuk ke halaman products', async () => {
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toContain('inventory')
})

Then('tampil error message', async () => {
    await expect(LoginPage.errorMessage).toBeDisplayed()
})
