const { expect } = require('@playwright/test');
class ConfirmationPage
{

constructor(page)
{

this.successMsg= page.locator(".hero-primary");
this.getOrderId= page.locator(".em-spacer-1 .ng-star-inserted");

}

async verifyOrderPage()
{

await this.successMsg.waitFor(); 
const confiramtionMsg = await this.successMsg.textContent();
console.log(confiramtionMsg);
await expect(this.successMsg).toHaveText(" Thankyou for the order. "); 
const orderId = await this.getOrderId.textContent();
console.log(orderId);

}




}

module.exports= {ConfirmationPage};