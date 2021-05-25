
const LoginPage = require('../pages/loginPage');

describe('Login page Tests', () => {

    let loginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        // Since this is not an Angular Site
        browser.ignoreSynchronization = true;
        // Open URL
        browser.get('../../superhero/index.html');
    });

    afterEach(() => {

    });

    it('should display all login page elements', () => {

    });

    it('should display error message when no username and password entered', () => {

    });

    it('should display error message when no password entered', () => {

    });

    it('should display error message when no username entered', () => {

    });

    it('should log user in ', () => {

    });

    it('', () => {

    });

});
