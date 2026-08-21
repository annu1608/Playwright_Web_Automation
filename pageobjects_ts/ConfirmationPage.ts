import {test, expect,Locator} from '@playwright/test';
import {Page } from '@playwright/test';

export class ConfirmationPage
{

    successMsg: Locator;
    getOrderId: Locator;

constructor(page: Page)
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