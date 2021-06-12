
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

    // it('should display error message when no email and password entered', () => {
    //
    // });
    //
    // it('should display error message when no password entered', () => {
    //
    // });
    //
    // it('should display error message when no email entered', () => {
    //
    // });
    //
    // it('should log user in ', () => {
    //
    // });
    //
    // it('', () => {
    //
    // });

});
