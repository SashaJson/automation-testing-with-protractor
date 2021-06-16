
const LoginPage = require('../pages/loginPage');

describe('Login page Tests', () => {

    let loginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        // Since this is not an Angular Site
        browser.ignoreSynchronization = true;
        browser.get('../../superhero/index.html');
    });

    afterEach(() => {

    });

    it('should display all login page elements', () => {

        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true);
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.');

        expect(loginPage.emailFildLabel.isDisplayed()).toBe(true);
        expect(loginPage.emailFild.isDisplayed()).toBe(true);
        expect(loginPage.emailFild.getText()).toEqual('');

        expect(loginPage.passwordFildLabel.isDisplayed()).toBe(true);
        expect(loginPage.passwordFild.isDisplayed()).toBe(true);
        expect(loginPage.passwordFild.getText()).toEqual('');

        expect(loginPage.rememberCheckLabel.isDisplayed()).toBe(true);
        expect(loginPage.rememberCheck.isDisplayed()).toBe(true);
        expect(loginPage.rememberCheck.isSelected()).toBe(false);

        expect(loginPage.submitButton.isDisplayed()).toBe(true);

    });

    it('should display error message when no email and password entered', () => {

        loginPage.submitButton.click();

        expect(loginPage.loginErrorMessage.isDisplayed()).toBe(true);
        expect(loginPage.loginErrorMessage.getText()).toEqual('An email and password are required.');

    });

    it('should display error message when no password entered', () => {

        loginPage.emailFild.sendKeys('testsashajson@testjson.com');
        loginPage.submitButton.click();

        expect(loginPage.loginErrorMessage.isDisplayed()).toBe(true);
        expect(loginPage.loginErrorMessage.getText()).toEqual('An email and password are required.');

    });

    it('should display error message when no email entered', () => {

        loginPage.passwordFild.sendKeys('fakepassword');
        loginPage.submitButton.click();

        expect(loginPage.loginErrorMessage.isDisplayed()).toBe(true);
        expect(loginPage.loginErrorMessage.getText()).toEqual('An email and password are required.');

    });

    it('should log user in ', () => {

        loginPage.emailFild.sendKeys('testsashajson@testjson.com');
        loginPage.passwordFild.sendKeys('fakepassword');
        loginPage.submitButton.click();

        // TODO - Verify page elements changed

    });

});
