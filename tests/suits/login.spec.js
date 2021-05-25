
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

    it('', () => {

    });

});
