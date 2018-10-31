var registerdet ={};

var crypto = require("crypto");
var fName = crypto.randomBytes(14).toString('hex');
var lName = crypto.randomBytes(14).toString('hex');
var phone = Math.floor(Math.random()*10000000000);
var chars = 'abcdefghijklmnopqrstuvwxyz';  
var emailID = chars[Math.floor(Math.random() * 26)] + Math.random().toString(36).substring(2, 8) + '@grr.la';

registerdet = {
    valid : {
        url: 'pages/auth/register-2',
        firstNameLocator : 'input[ng-reflect-placeholder="First Name"]',
        firstName : fName,
        lastNameLocator : 'input[ng-reflect-placeholder="Last Name"]',
        lastName : lName,
        emailLocator : 'input[ng-reflect-placeholder="Email"]',
        email : emailID,
        mobileLocator : 'input[ng-reflect-placeholder="Mobile"]',
        mobile : 1234567890,
        passwordLocator : 'input[ng-reflect-placeholder="Password"]',
        password : 'Welcome@123!',
        confirmPasswordLocator : 'input[ng-reflect-placeholder="Password (Confirm)"]',
        confirmPassword : 'Welcome@123!' ,
        tncLocator : '.mat-checkbox-layout .mat-checkbox-inner-container',
        registerLocator : '.submit-button',
    }
}

module.exports =  {
    registerdet
}