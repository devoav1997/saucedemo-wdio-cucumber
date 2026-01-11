# SauceDemo Web Automation (WebdriverIO + Cucumber)

Project ini adalah automation testing untuk website **SauceDemo**
menggunakan **WebdriverIO**, **Cucumber (BDD)**, dan **Page Object Model**.

---

## 🛠 Tech Stack

- Node.js
- WebdriverIO
- Cucumber
- Chrome Browser
- Page Object Model (POM)

---

## 📂 Project Structure

saucedemo-wdio-cucumber/
├── features/
│ ├── login.feature
│ ├── products.feature
│ ├── checkout.feature
│ └── step-definitions/
│ ├── login.steps.js
│ ├── products.steps.js
│ └── checkout.steps.js
├── pageobjects/
│ ├── login.page.js
│ ├── products.page.js
│ ├── cart.page.js
│ ├── checkout.page.js
│ ├── checkoutOverview.page.js
│ └── checkoutComplete.page.js
├── wdio.conf.js
├── package.json
└── README.md


---

## 🚀 Getting Started

### 1️⃣ Clone Repository dari GitHub

```bash
git clone https://github.com/<username>/<repository-name>.git


Masuk ke folder project:

cd saucedemo-wdio-cucumber

2️⃣ Install Dependencies

Pastikan Node.js (LTS) sudah terinstall.

npm install

3️⃣ Pastikan Browser (Chrome) Terinstall

Automation menggunakan Google Chrome.

Cek versi:

google-chrome --version


atau (Mac):

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --version

▶️ Running Automation Test
🔹 Run SEMUA Feature
npm run wdio


atau:

npx wdio run wdio.conf.js

▶️ Running Feature Satu per Satu
🔹 1. Login Feature
npx wdio run wdio.conf.js --spec features/login.feature


Test case:

Login valid

Login tanpa username

Login tanpa password

Login credential invalid

🔹 2. Products & Cart Feature
npx wdio run wdio.conf.js --spec features/products.feature


Test case:

Add 1 produk ke cart

Add multiple produk ke cart

Remove produk dari cart

🔹 3. Checkout Feature
npx wdio run wdio.conf.js --spec features/checkout.feature


Test case:

Checkout sampai selesai

Checkout tanpa first name

Checkout tanpa last name

Checkout tanpa postal code

🧪 Reporting

Automation menggunakan Spec Reporter (default WebdriverIO).

Contoh output:

8 passing (16s)
0 failing


Jika ada failure, detail error akan muncul di terminal.

🧠 Best Practice yang Digunakan

✅ Page Object Model (POM)

✅ Reusable step definitions

✅ Explicit wait (waitForClickable, waitForDisplayed)

✅ Clear separation antara action & assertion

✅ No hardcoded sleep (pause)

📝 Notes

User yang digunakan:

username: standard_user
password: secret_sauce


Website under test:

https://www.saucedemo.com

🧹 Troubleshooting
❌ Error: CartPage.open is not a function

Pastikan cart.page.js memiliki method:

async open() {
    await browser.url('/cart.html')
}

👨‍💻 Author

Automation dibuat untuk pembelajaran & implementasi Web Automation Testing
menggunakan WebdriverIO + Cucumber.