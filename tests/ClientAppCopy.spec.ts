import {test , expect} from '@playwright/test';
import {POManager} from '../pageobjects_ts/POManager';
import { json } from 'node:stream/consumers';
const dataset = JSON.parse(JSON.stringify(require('../utils_ts/placeorderTestData.json')));

for(const data of dataset)
{
test(`client app login for  ${data.productname}`, async ({ page }) =>
{

const poManager = new POManager(page);

const loginPage = poManager.getLoginPage(); 
await loginPage.goTo();
await loginPage.validLogin(data.username,data.password);


const dashboardPage= poManager.getDashboardPage();  
await dashboardPage.searchProductAddCart(data.productname);
await dashboardPage.navigateToCart();

const orderHistoryPage = poManager.getOrderHistoryPage();
await orderHistoryPage.orderDetalis(data.productname);

const placeOrderPage = poManager.getPlaceOderPage();
await placeOrderPage.bookOrder(data.countryname, data.username);

const confirmationPage = poManager.getConfirmationPage();
await confirmationPage.verifyOrderPage();












});
}