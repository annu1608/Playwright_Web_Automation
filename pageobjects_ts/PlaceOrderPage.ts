import {test, expect,Locator} from '@playwright/test';
import {Page } from '@playwright/test';

export class PlaceOrderPage
{
    searchFor: Locator;
    waitForDropdown: Locator;
    sameEmail: Locator;
    placeOrderBtn: Locator;



constructor(page: Page)
{

this.searchFor = page.locator("[placeholder*='Country']");
this.waitForDropdown = page.locator(".ta-results");
this.sameEmail = page.locator("label[type='text']");
this.placeOrderBtn = page.locator(':text("PLACE ORDER")');



}

async bookOrder(countryName: string, userName: string)
{
await this.searchFor.pressSequentially(countryName);
const dropdown = await this.waitForDropdown;
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count();
for(let i=0; i<optionsCount; ++i)
{
 const text = await dropdown.locator("button").nth(i).textContent();
 if(text=== " India")
 {
  await dropdown.locator("button").nth(i).click();
 break;
 }
  
}
await expect(this.sameEmail).toHaveText(userName);

await this.placeOrderBtn.click();


}

}

module.exports= {PlaceOrderPage};