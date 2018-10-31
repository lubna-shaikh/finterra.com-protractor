var login = require('./common/login.js');


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

});