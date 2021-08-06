'use strict';

const NavPage = require('../pages/navPage');
const LoginPage = require('../pages/loginPage');

describe('', () => {
   let navPage;
   let loginPage;

    beforeEach(() => {
        navPage = new NavPage();
        loginPage = new LoginPage();

        browser.ignoreSynchronization = true;
        browser.get('../../superhero/index.html');

        loginPage.emailField.sendKeys('testsashajson@testjson.com');
        loginPage.passwordField.sendKeys('fakepassword');
        loginPage.submitButton.click();
    });

    it('should display all Nav elements', () => {

        expect(navPage.homeLink.isDisplayed()).toBe(true);
        expect(navPage.logOutLink.isDisplayed()).toBe(true);

        expect(navPage.heroFactLink.isDisplayed()).toBe(true);
        navPage.heroFactLink.click();
        expect(navPage.wolverineOption.isDisplayed()).toBe(true);
        expect(navPage.spiderManOption.isDisplayed()).toBe(true);

    });

});
