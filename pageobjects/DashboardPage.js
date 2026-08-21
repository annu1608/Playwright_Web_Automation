class DashboardPage
{
constructor(page){

 this.page = page;
this.products = page.locator(".card-body");
this.productsText = page.locator(".card-body b");
this.cart = page.locator("[routerlink*='cart']")
this.itemName = page.locator("div li");


}

async searchProductAddCart(productName)
{

await this.products.first().waitFor({ state: "visible" });
const titles = await this.productsText.allTextContents();
console.log(titles);

const count = await this.products.count();

for( let i =0; i < count; ++i)
{
  const title = (await this.products.nth(i).locator("b").textContent()).trim();
            console.log(title);

   if( title=== productName)
      {
         await this.products.nth(i).locator("text= Add To Cart").click();
         break;
       }
 }
    await this.page.waitForTimeout(2000);
    await this.page.waitForLoadState('networkidle');

}

async navigateToCart()
{
  console.log("Current URL:", await this.page.url());
await this.cart.waitFor({ state: 'visible' });
await this.cart.click();
await this.itemName.first().waitFor();
;

}

}
module.exports= {DashboardPage};