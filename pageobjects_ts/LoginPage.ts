
import {test, expect,Locator} from '@playwright/test';
import {Page } from '@playwright/test';

export class LoginPage{
 page: Page;
 sinInButton: Locator;
 userName: Locator;
 password: Locator;


constructor(page: Page)
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


async validLogin(userName: string, password: string)
{
   await this.userName.fill(userName);
   await this.password.fill(password);
   await this.sinInButton.click();
   await this.page.waitForLoadState('networkidle');

}

}
module.exports= {LoginPage}