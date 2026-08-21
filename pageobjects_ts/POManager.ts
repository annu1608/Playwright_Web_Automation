
import {LoginPage} from './LoginPage';
import { DashboardPage } from './DashboardPage';
import { OrderHistoryPage } from './OrderHistoryPage';
import { PlaceOrderPage } from './PlaceOrderPage';
import { ConfirmationPage } from './ConfirmationPage';
import {Page } from '@playwright/test';



export class POManager {

    page: Page;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    orderHistoryPage: OrderHistoryPage;
    placeOrderPage: PlaceOrderPage;
    confirmationPage: ConfirmationPage;


constructor(page:Page)
{
this.page= page;
this.loginPage = new LoginPage(this.page);
this.dashboardPage= new DashboardPage(this.page);
this.orderHistoryPage = new OrderHistoryPage(this.page);
this.placeOrderPage = new PlaceOrderPage(this.page);
this.confirmationPage = new ConfirmationPage(this.page);


}
getLoginPage()
{

return this.loginPage;
}

getDashboardPage()
{
return this.dashboardPage;

}


getOrderHistoryPage()
{
    return this.orderHistoryPage;

}

getPlaceOderPage()
{
    return this.placeOrderPage;

}

getConfirmationPage()
{
   return this.confirmationPage;

}

}
module.exports= {POManager}