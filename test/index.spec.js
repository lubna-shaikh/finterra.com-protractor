var index = typeof window !== 'undefined' ? window.protactor : require('../index');
// import index from '../index.js';
var expect = typeof window !== 'undefined' ? window.expect : require('chai').expect;
// var expect = chai.expect;

describe('index.js test scripts', function () {
    it('addTwoNumbers() returns a number', function () {
        expect(index.addTwoNumbers(-21, 20)).to.equal(-1);
    });
});

describe('done() fucntionality', function () {
    it('Checks async done() behavior', function (done) {
        setTimeout(function () {
            expect(true).to.be.false;
            done();
        }, 1000);
    })
});