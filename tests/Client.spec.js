const{test , expect} = require('@playwright/test');



test('Browser context playwright test', async ({ page }) => {

const productName = 'ZARA COAT 3';
const userEmail = page.locator("#userEmail");
const password = page.locator("#userPassword");
const loginBtn = page.locator("#login");
const cardTitle = page.locator(".card-body b");
const products = page.locator(".card-body")
const email = "annukm97@gmail.com";

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

await userEmail.fill("annukm97@gmail.com");
await password.fill("Annu@123");
await loginBtn.click();
await page.waitForLoadState('networkidle');
await cardTitle.first().waitFor();   //another way to handle wait
const allTiles = await cardTitle.allTextContents();
console.log(allTiles);
const count = await products.count();

for( let i =0; i < count; ++i)
{
   if(await products.nth(i).locator("b").textContent()=== productName)
      {
         await products.nth(i).locator("text= Add To Cart").click();
         break;
       }
 }

await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text=checkout").click();
await page.locator("[placeholder*='Country']").pressSequentially("ind");
const dropdown = await page.locator(".ta-results");
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
await expect(page.locator("label[type='text']")).toHaveText(email);

await page.locator(':text("PLACE ORDER")').click();

await page.locator(".hero-primary").waitFor(); 
const confiramtionMsg = await page.locator(".hero-primary").textContent();
console.log(confiramtionMsg);
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. "); 
const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId);










})