 mobileTop = function () {};
 var mobileToptd = require('../testdata/mobileTop.js')
 var EC = protractor.ExpectedConditions;

 mobileTop.prototype.goToMobileTop = function () {
     browser.sleep(1000);
     return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.mobileTopLocator)).click()
         .then(() => {
             return browser.driver.wait(EC.urlContains(mobileToptd.mobileTop.valid.urlLocator1), 15000);
         })
 };

 mobileTop.prototype.selectCountryAndNext = function () {
     browser.sleep(3000);
     return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.mAlphabetLocator)).click()
         .then(() => {
             return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.malaysiaLocator)).click()
         })
         .then(() => {
             return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.nextBtnLocator1)).click()
         })

 }

 mobileTop.prototype.selectPackage = function () {
     browser.sleep(3000);
     console.log('Reference Number Locator: ', mobileToptd.mobileTop.valid.referenceNumLocator)
     return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.referenceNumLocator)).click()
         .then(() => {
             browser.sleep(3000);
             return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.referenceNumLocator)).sendKeys(mobileToptd.mobileTop.valid.referenceNumber)
         })
         .then(() => {
             browser.sleep(3000);
             browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.packageDropdownLocator)).click()
             browser.sleep(3000);
            //  browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.packageDropdownLocator)).click()
            //  browser.sleep(3000);
            //  browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.packageDropdownLocator)).click()
            //  browser.sleep(3000);
             return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.packageDropdownLocator)).click()
         })
         .then(() => {
            
             return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.packageValue)).click()

         })
         .then(() => {
            console.log('package value clicked')
            browser.sleep(3000)
             return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.nextBtnLocator2)).click()
         })
         .then(() => {
             return browser.driver.findElement(by.css(flighttd.flight.valid.collectNowLabel)).isDisplayed()
         })
         .then(() => {
             browser.sleep(3000);
             return true;
         })
 }



 module.exports = new mobileTop();