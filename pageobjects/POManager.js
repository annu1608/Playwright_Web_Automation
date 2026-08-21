const{LoginPage}= require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {OrderHistoryPage} = require('./OrderHistoryPage');
const {PlaceOrderPage} = require('./PlaceOrderPage');
const {ConfirmationPage} = require ('./ConfirmationPage');

class POManager {

constructor(page)
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