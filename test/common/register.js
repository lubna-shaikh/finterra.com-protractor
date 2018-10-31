var registertd = require('../testdata/register.js')
var homePagetd = require('../testdata/homePage.js')
var logintd = require('../testdata/login.js')
var EC = protractor.ExpectedConditions;

register = function () {};
register.prototype.register1 = function () {

    browser.sleep(1000);
    browser.driver.findElement(by.css(registertd.registerdet.valid.firstNameLocator)).sendKeys(registertd.registerdet.valid.firstName)
    browser.driver.findElement(by.css(registertd.registerdet.valid.lastNameLocator)).sendKeys(registertd.registerdet.valid.lastName);
    browser.driver.findElement(by.css(registertd.registerdet.valid.emailLocator)).sendKeys(registertd.registerdet.valid.email);
    browser.driver.findElement(by.css(registertd.registerdet.valid.mobileLocator)).clear()
    // browser.sleep(3000)
    browser.driver.findElement(by.css(registertd.registerdet.valid.mobileLocator)).sendKeys('+' + 601234567890);

    browser.driver.findElement(by.css(registertd.registerdet.valid.passwordLocator)).sendKeys(registertd.registerdet.valid.password);
    browser.driver.findElement(by.css(registertd.registerdet.valid.confirmPasswordLocator)).sendKeys(registertd.registerdet.valid.confirmPassword);
    browser.driver.findElement(by.css(registertd.registerdet.valid.tncLocator)).click()
    browser.sleep(1000);

    return browser.driver.findElement(by.css(registertd.registerdet.valid.registerLocator)).click()

        .then(() => {
            browser.driver.wait(EC.urlContains(logintd.logincred.valid.url), 15000);
            browser.sleep(1000);
            return true;
        })
}

module.exports = new register();