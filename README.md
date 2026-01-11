# SauceDemo Web Automation  
**WebdriverIO + Cucumber (BDD)**

Project ini merupakan automation testing untuk website **SauceDemo**
menggunakan **WebdriverIO**, **Cucumber (BDD)**, dan **Page Object Model (POM)**.

---

## 🛠 Tech Stack

- Node.js (LTS)
- WebdriverIO
- Cucumber (BDD)
- Google Chrome
- Page Object Model (POM)

---

## 📂 Project Structure

```

saucedemo-wdio-cucumber/
├── features/
│   ├── login.feature
│   ├── products.feature
│   ├── checkout.feature
│   └── step-definitions/
│       ├── login.steps.js
│       ├── products.steps.js
│       └── checkout.steps.js
│
├── pageobjects/
│   ├── login.page.js
│   ├── products.page.js
│   ├── cart.page.js
│   ├── checkout.page.js
│   ├── checkoutOverview.page.js
│   └── checkoutComplete.page.js
│
├── test-data/
│   ├── users.data.js
│
├── wdio.conf.js
├── package.json
└── README.md


````

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<username>/<repository-name>.git
````

Masuk ke folder project:

```bash
cd saucedemo-wdio-cucumber
```

---

### 2️⃣ Install Dependencies

Pastikan **Node.js (LTS)** sudah terinstall.

```bash
npm install
```

---

### 3️⃣ Pastikan Google Chrome Terinstall

Automation dijalankan menggunakan **Google Chrome**.

Cek versi Chrome:

**Mac**

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --version
```

**Linux**

```bash
google-chrome --version
```

---

## ▶️ Menjalankan Automation Test

### 🔹 Menjalankan SEMUA Feature

```bash
npm run wdio
```

atau:

```bash
npx wdio run wdio.conf.js
```

---

## ▶️ Menjalankan Feature Secara Terpisah

### 🔹 1. Login Feature

```bash
npx wdio run wdio.conf.js --spec features/login.feature
```

Scenario yang diuji:

* Login dengan credential valid
* Login tanpa username
* Login tanpa password
* Login dengan credential invalid

---

### 🔹 2. Products & Cart Feature

```bash
npx wdio run wdio.conf.js --spec features/products.feature
```

Scenario yang diuji:

* Add 1 produk ke cart
* Add multiple produk ke cart
* Remove produk dari cart

---

### 🔹 3. Checkout Feature

```bash
npx wdio run wdio.conf.js --spec features/checkout.feature
```

Scenario yang diuji:

* Checkout sampai selesai
* Checkout tanpa first name
* Checkout tanpa last name
* Checkout tanpa postal code

---

## 🧪 Reporting

Automation menggunakan **Spec Reporter** (default dari WebdriverIO).

Contoh output di terminal:

```
8 passing (16s)
0 failing
```

Jika terjadi kegagalan, detail error akan ditampilkan di terminal.

---

## 🧠 Best Practices yang Digunakan

* ✅ Page Object Model (POM)
* ✅ Reusable Step Definitions
* ✅ Explicit Wait (`waitForDisplayed`, `waitForClickable`)
* ✅ Pemisahan Action & Assertion
* ✅ Tanpa hardcoded `browser.pause()`

---

## 📝 Test Data

User yang digunakan:

```
username: standard_user
password: secret_sauce
```

Website yang diuji:

```
https://www.saucedemo.com
```

---

## 🧹 Troubleshooting

### ❌ Error: `CartPage.open is not a function`

Pastikan file `cart.page.js` memiliki method berikut:

```js
async open() {
    await browser.url('/cart.html')
}
```

---

## 👨‍💻 Author

Project ini dibuat untuk pembelajaran dan implementasi **Web Automation Testing**
menggunakan **WebdriverIO + Cucumber**.

