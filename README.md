# 🛒 Playwright E-Commerce Web Automation

## 📌 Project Overview

This project is an **end-to-End E-Commerce Web Application Automation Testing Framework** developed using **Playwright, JavaScript, TypeScript, and Cucumber**.

The framework follows the **Page Object Model (POM)** design pattern to create reusable, maintainable, and scalable automation scripts.

---

## 🛠️ Tech Stack

| Technology            | Purpose                         |
| --------------------- | ------------------------------- |
| **Playwright**        | Web UI Automation               |
| **JavaScript**        | Automation Scripting            |
| **TypeScript**        | Automation Scripting            |
| **Cucumber**          | BDD Testing                     |
| **Page Object Model** | Framework Design                |
| **Node.js & npm**     | Project & Dependency Management |
| **Git & GitHub**      | Version Control                 |

---

## 🧪 Test Scenarios

The project automates key E-Commerce workflows:

* 🔐 User Login
* 🔎 Product Search & Selection
* 🛒 Add Product to Cart
* 💳 Checkout
* 📦 Place Order
* ✅ Order Confirmation
* 📋 Order History Verification

---

## 📂 Project Structure

```text
Playwright_Web_Automation/
│
├── features/
│   ├── Ecommerce.feature
│   ├── Step_definations/
│   │   └── steps.js
│   └── support/
│       └── hooks.js
│
├── pageobjects/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── PlaceOrderPage.js
│   ├── ConfirmationPage.js
│   ├── OrderHistoryPage.js
│   └── POManager.js
│
├── pageobjects_ts/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── PlaceOrderPage.ts
│   ├── ConfirmationPage.ts
│   ├── OrderHistoryPage.ts
│   └── POManager.ts
│
├── tests/
│   ├── Client.spec.js
│   ├── ClientAppCopy.spec.js
│   └── ClientAppCopy.spec.ts
│
├── utils/
│   └── placeorderTestData.json
│
├── utils_ts/
│   └── placeorderTestData.json
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/annu1608/Playwright_Web_Automation.git
```

### 2. Navigate to the Project

```bash
cd Playwright_Web_Automation
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all Playwright tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test

```bash
npx playwright test tests/Client.spec.js
```

---

## 📊 Test Reports

Playwright generates test execution reports that can be used to analyze:

* Test execution status
* Passed and failed test cases
* Execution time
* Failure details
* Screenshots and traces when configured

---

## ✨ Key Features

* End-to-End E-Commerce testing
* Playwright automation
* JavaScript & TypeScript support
* Cucumber BDD integration
* Page Object Model (POM)
* Reusable page objects
* Test data management
* Cross-browser automation
* Maintainable and scalable framework
* Git & GitHub integration

---

## 🎯 Objective

The objective of this project is to demonstrate practical experience in **Web UI Automation Testing, BDD, Page Object Model, Test Automation Framework Development, and End-to-End E-Commerce Testing** using Playwright.

---

## 👩‍💻 Author

**Annu Kumari**

**QA Automation Engineer | Manual & Automation Testing**
