const { expect } = require('@playwright/test');
class OrderHistoryPage
{
 constructor(page)
 {
   this.page = page;
    this.checkout = page.locator("text=Checkout");
   

 }

   async orderDetalis(productName)
   {
    
   const item = this.page.locator(`h3:has-text("${productName}")`);
   const bool = await item.isVisible();
    expect(bool).toBeTruthy();
    await this.checkout.click();
   }


}
module.exports= {OrderHistoryPage};