flight = {};

flight = {
    valid : {
        dropdownLocator : '.cdk-overlay-pane',
        dropdownValue : '.cdk-overlay-pane mat-option:nth-child(2)',

        fromLocator : '.mat-primary.ng-untouched.ng-pristine  input[formcontrolname=from]',        
        fromKey : 'Singapore',
        
        toLocator : '.mat-primary.ng-untouched.ng-pristine  input[formcontrolname=to]',  
        toKey : 'Del',

        departLocator : 'input[formcontrolname="departDate"]',
        returnLocator : 'input[formcontrolname="returnDate"]',
        
        calendarLocator : '.mat-datepicker-popup'

    }
}

module.exports = {
    flight
}