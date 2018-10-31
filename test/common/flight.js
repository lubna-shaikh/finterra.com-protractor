flight = function () {};

flight.prototype.returnFlight = function () {
    browser.sleep(1000)
    // browser.driver.findElement(by.css('mat-radio-group mat-radio-button:nth-child(1) .mat-radio-inner-circle')).click()
    browser.driver.findElement(by.css('#flightForm input[formcontrolname=from].ng-untouched')).click()
    expect(element(by.css('#flightForm div>>input[formcontrolname=from]')).isDisplayed()).toBe(true);
    // browser.sleep(1000)
    return browser.driver.findElement(by.css('#flightForm div>>input[formcontrolname=from]')).sendKeys('SIN',protractor.Key.RETURN)
        // browser.driver.actions().click('#flightForm div:nth-child(1) mat-form-field').sendKeys("SIN").perform(); 
        // 
        // browser.driver.findElement(by.css('#cdk-overlay-18 mat-option:nth-child(2)')).click()
        .then(() => {
            browser.sleep(1000);
            return true;
        })
};

flight.prototype.goToFlight = function () {
    browser.sleep(1000)
    return browser.driver.findElement(by.css('.nav.navbar-nav li:nth-child(1) a')).click()


}


module.exports = new flight()