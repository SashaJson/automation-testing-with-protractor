const LoginPage = () => {};

LoginPage.prototype = Object.create({}, {
    elementName: { get: () => element(by.id('')) };
});

module.exports = LoginPage;
