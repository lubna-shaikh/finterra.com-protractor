var homePagetd = require('./testdata/homePage.js')
var login = require('./common/login.js');
var register = require('./common/register.js');
var registertd = require('./testdata/register.js')


describe('Protractor Demo App', function () {
    var EC = protractor.ExpectedConditions;

    beforeEach(function () {
        browser.driver.get('https://staging.finterra.com/')
            .then(() => {
                return browser.driver.getTitle();
            })
            .then(title => {
                expect(title).toEqual('Finterra | Blockchain Based Financial Services for all');
            })

    });

    it('Should sign into a Finterra account, with valid credentials', (done) => {
        login.login1()
            .then(isSuccess => {
                if (isSuccess) return done();
            });
    });

    it('Should register with valid details, through the Home page', (done) => {
        // return browser.driver.findElement(by.css('.home-content .mat-chip-list-wrapper .mat-chip:nth-child(2)')).click()
        browser.driver.findElement(by.css(homePagetd.homePage.buttonLocator.register)).click()
            //  return browser.sleep(5000)
            .then(() => {
                return browser.driver.wait(EC.urlContains(registertd.registerdet.valid.url), 15000);
            })
            .then(() => {
                return register.register1()
            })
            .then(isSuccess => {
                if (isSuccess) return done();
            });
    })

});