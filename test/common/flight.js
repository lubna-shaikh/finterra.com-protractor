flighttd = require('../testdata/flight.js')
flight = function () {};



flight.prototype.returnFlight = function () {
    browser.sleep(1000)
    browser.driver.findElement(by.css(flighttd.flight.valid.fromLocator)).click()
    return browser.driver.findElement(by.css(flighttd.flight.valid.fromLocator)).sendKeys(flighttd.flight.valid.fromKey)
        .then(() => {
            browser.sleep(3000)
            return browser.driver.findElement(by.css(flighttd.flight.valid.dropdownLocator)).isDisplayed()
        })
        .then(() => {
            return browser.driver.findElement(by.css(flighttd.flight.valid.dropdownValue)).click()
        })
        .then(() => {
            browser.driver.findElement(by.css(flighttd.flight.valid.toLocator)).click()
            return browser.driver.findElement(by.css(flighttd.flight.valid.toLocator)).sendKeys(flighttd.flight.valid.toKey)
        })
        .then(() => {
            browser.sleep(3000)
            return browser.driver.findElement(by.css(flighttd.flight.valid.dropdownLocator)).isDisplayed()
        })
        .then(() => {
            return browser.driver.findElement(by.css(flighttd.flight.valid.dropdownValue)).click()
        })
        .then(() => {
            return browser.driver.findElement(by.css(flighttd.flight.valid.departLocator)).click()
        })
        .then(() => {
            return browser.driver.findElement(by.css(flighttd.flight.valid.calendarLocator)).click()
        })
        .then(() => {
            browser.sleep(2000);
            // res=  browser.driver.findElement.all(by.css('.mat-calendar-body-cell:not(.mat-calendar-body-disabled)')).getWebElements();
            // console.log(res.length)

            return browser.driver.findElement(by.css('.mat-calendar-body-cell:not(.mat-calendar-body-disabled):first')).click()
        })
        .then(() => {
            return browser.driver.findElement(by.css(flighttd.flight.valid.returnLocator)).click()
        })
        .then(() => {
            return browser.driver.findElement(by.css(flighttd.flight.valid.calendarLocator)).click()
        })
        .then(() => {
            browser.sleep(2000);
            // res=  browser.driver.findElement.all(by.css('.mat-calendar-body-cell:not(.mat-calendar-body-disabled)')).getWebElements();
            // console.log(res.length)

            return browser.driver.findElement(by.css('.mat-calendar-body-cell:not(.mat-calendar-body-disabled):first+td')).click()
        })
        .then(() => {
            browser.sleep(3000);
            return true;
        })
};



flight.prototype.goToFlight = function () {
    browser.sleep(1000)
    return browser.driver.findElement(by.css('.nav.navbar-nav li:nth-child(1) a')).click()
}

module.exports = new flight();