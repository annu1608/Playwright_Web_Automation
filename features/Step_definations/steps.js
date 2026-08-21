const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const { chromium, expect } = require('@playwright/test');

    Given('Login to Ecommerce application with {string} and {string}',{timeout :100*1000 }, 
            async function (username, password) {
         

         const loginPage = this.poManager.getLoginPage(); 
         await loginPage.goTo();
         await loginPage.validLogin(username, password);
        

         });

    When('Add {string} to the cart', { timeout:  100*1000 }, async function (productname) {
           // Write code here that turns the phrase above into concrete actions
           const dashboardPage= this.poManager.getDashboardPage();  
           await dashboardPage.searchProductAddCart(productname);
           await dashboardPage.navigateToCart();
           
         });    
    
    Then('Verify {string} is displayed in the cart', async function (productname) {
           // Write code here that turns the phrase above into concrete actions
          const orderHistoryPage = this.poManager.getOrderHistoryPage();
          await orderHistoryPage.orderDetalis(productname);
         });    

    When('Enter valid detalis {string} and {string} and place the order',  { timeout: 100 * 1000 }, async function (countryname, username) {
           // Write code here that turns the phrase above into concrete actions
           const placeOrderPage = this.poManager.getPlaceOderPage();
           await placeOrderPage.bookOrder(countryname, username);
         });
           

    Then('verfiy order is present in the OrderHistory',async function () {
           // Write code here that turns the phrase above into concrete actions
          const confirmationPage = this.poManager.getConfirmationPage();
         await confirmationPage.verifyOrderPage();

         });   