const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const { chromium, expect } = require('@playwright/test');



Before(async function () {


    const browser = await chromium.launch({
        headless: false,
        slowMo: 500,
        args: ['--start-maximized']
    });
    const context = await browser.newContext({ viewport: null });
     this.page = await context.newPage();
    this.poManager = new POManager(this.page);



});

After(async function () {
    await this.browser.close();
    console.log("I am last to execute");
});

BeforeStep(function(){

});

AfterStep(async function({result}){
if(result.status === Status.FAILED){

await this.page.screenshot({
    path: `Screenshots1/${Date.now()}.png`});


};


});