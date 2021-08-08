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

    it('should display and close wolverine modal', () => {

        navPage.heroFactLink.click();
        navPage.wolverineOption.click();

        browser.sleep(2000);

        expect(navPage.wolverineModalTitle.isPresent()).toBeTruthy();
        expect(navPage.wolverineModalTitle.getText()).toEqual('Wolverine Fact');

        expect(navPage.wolverineModalBody.isPresent()).toBeTruthy();
        expect(navPage.wolverineModalBody.getText()).toEqual('Wolverine made his first comic book appearance in 1974');

        expect(navPage.wolverineModalCloseButton.isPresent()).toBeTruthy();
        expect(navPage.wolverineModalXButton.isDisplayed()).toBe(true);

        navPage.wolverineModalCloseButton.click();

    });

    it('should display and close Spider - Man modal', () => {

        navPage.heroFactLink.click();
        navPage.wolverineOption.click();

        browser.sleep(2000);

        expect(navPage.spiderManModalTitle.isPresent()).toBeTruthy();
        expect(navPage.spiderManModalTitle.getText()).toEqual('Wolverine Fact');

        expect(navPage.spiderManModalBody.isPresent()).toBeTruthy();
        expect(navPage.spiderManModalBody.getText()).toEqual('Wolverine made his first comic book appearance in 1974');

        expect(navPage.spiderManModalCloseButton.isPresent()).toBeTruthy();
        expect(navPage.spiderManModalXButton.isDisplayed()).toBe(true);

        navPage.spiderManModalCloseButton.click();

    });

    it('should display Login page without email and password', () => {

        navPage.logOutLink.click();

        expect(loginPage.emailField.getText()).toEqual('');
        expect(loginPage.passwordField.getText()).toEqual('');

    });

    it('should display Login page with email and password', () => {

        loginPage.rememberCheck.click();
        loginPage.submitButton.click();

        navPage.logOutLink.click();

        expect(loginPage.emailField.getAttribute('value')).toEqual('testsashajson@testjson.com');
        expect(loginPage.passwordField.getAttribute('value')).toEqual('fakepassword');
        expect(loginPage.rememberCheck.isSelected()).toBe(true);

    });

});
