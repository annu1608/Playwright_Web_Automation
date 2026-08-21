class LoginPage{

constructor(page)
{
this.page = page;
this.sinInButton = page.locator("#login");
this.userName = page.locator("#userEmail");
this.password =  page.locator("#userPassword");

}
async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }


async validLogin(userName, password)
{
   await this.userName.fill(userName);
   await this.password.fill(password);
   await this.sinInButton.click();
   await this.page.waitForLoadState('networkidle');
   console.log("Current URL:", await this.page.url());    
}

}
module.exports= {LoginPage}