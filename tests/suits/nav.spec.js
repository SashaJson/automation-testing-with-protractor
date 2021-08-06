'use strict';

const NavPage = require('../pages/navPage');

describe('', () => {
   let navPage;

    beforeEach(() => {
        navPage = new NavPage();
        browser.ignoreSynchronization = true;
        browser.get('../../superhero/index.html');

        loginPage.emailField.sendKeys('testsashajson@testjson.com');
        loginPage.passwordField.sendKeys('fakepassword');
        loginPage.submitButton.click();
    });

    it('should display all Nav elements', () => {



    });

});
