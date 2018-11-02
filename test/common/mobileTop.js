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

 mobileTop.prototype.selectPackageAndNext = function () {
     browser.sleep(3000);
     return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.referenceNumLocator)).click()
         .then(() => {
             browser.sleep(3000);
             return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.referenceNumLocator)).sendKeys(mobileToptd.mobileTop.valid.referenceNumber)
         })
         .then(() => {
             browser.sleep(3000);
             browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.packageDropdownLocator)).click()
             browser.sleep(3000);
             return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.packageDropdownLocator)).click()

         })
         .then(() => {
             browser.sleep(2000);
             return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.packageValue)).click()
         })
         .then(()=>{
            browser.sleep(2000)
            return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.nextBtnLocator2)).click()
         })
 }

 mobileTop.prototype.reviewAndSend = function () {
     browser.sleep(3000)
     return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.confirmBtnLocator1)).click()
 }
 mobileTop.prototype.reviewAndSend = function () {
     browser.sleep(10000)
     return browser.driver.findElement(by.css(mobileToptd.mobileTop.valid.finterraPaymentLocator)).click()

         .then(() => {
             browser.sleep(5000)
             return true;
         })
 }

 module.exports = new mobileTop();