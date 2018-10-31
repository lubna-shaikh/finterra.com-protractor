var logintd = require('../testdata/login.js')
var homePagetd = require('../testdata/homePage.js')
var EC = protractor.ExpectedConditions;

login = function () {};
login.prototype.login1 = function(){
    // return browser.driver.findElement(by.css('.home-content .mat-chip-list-wrapper .mat-chip:nth-child(2)')).click()
    return browser.driver.findElement(by.css(homePagetd.homePage.buttonLocator.signIn)).click()

    .then(() => {
        return browser.driver.wait(EC.urlContains(logintd.logincred.valid.url), 15000);
    })
    .then(() => {
        browser.sleep(1000);
        browser.driver.findElement(by.css(logintd.logincred.valid.usernameLocator)).sendKeys(logintd.logincred.valid.username);
        browser.driver.findElement(by.css(logintd.logincred.valid.passwordLocator)).sendKeys(logintd.logincred.valid.password);
        browser.sleep(1000);
        return browser.driver.findElement(by.css(logintd.logincred.valid.submitLocator)).click();
    })
    .then(() => {
        browser.driver.wait(EC.urlContains('/pages/flight'), 15000);
        browser.sleep(1000);
        return true;
    })
}

module.exports = new login();