'use strict';

const HeaderPage = require('../pages/headerPage');
const LoginPage = require('../pages/loginPage');

describe('Header Page', () => {
    let headerPage;
    let loginPage;

    beforeEach(() => {
        headerPage = new HeaderPage();
        loginPage = new LoginPage();

        browser.ignoreSynchronization = true;
        browser.get('../../superhero/index.html');

        loginPage.emailField.sendKeys('testsashajson@testjson.com');
        loginPage.passwordField.sendKeys('fakepassword');
        loginPage.submitButton.click();
    });

    afterEach(() => {

    });

    it('should contain all Header elements', () => {

        expect(headerPage.headerTitle.isDisplayed()).toBe(true);
        expect(headerPage.headerTitle.getText()).toBe('Superhero Roster');

        expect(headerPage.headerImage.isDisplayed()).toBe(true);

        expect(headerPage.headerBody.isDisplayed()).toBe(true);
        expect(headerPage.headerBody.getText()).toBe('Image that you are tasked with building a team of Superhero to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.');

    });

});
