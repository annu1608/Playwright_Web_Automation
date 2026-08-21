import {test, expect,Locator} from '@playwright/test';
import {Page } from '@playwright/test';

export class OrderHistoryPage
{
page: Page;
checkout: Locator;


 constructor(page: Page)
 {
   this.page = page;
    this.checkout = page.locator("text=Checkout");
   

 }

   async orderDetalis(productName: string)
   {
    
   const item = this.page.locator(`h3:has-text("${productName}")`);
   const bool = await item.isVisible();
    expect(bool).toBeTruthy();
    await this.checkout.click();
   }


}
module.exports= {OrderHistoryPage};