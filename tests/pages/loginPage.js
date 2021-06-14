const LoginPage = function () {};

LoginPage.prototype = Object.create({}, {
    loginTitleTxt: { get: () => element(by.id('login-title')) },
    emailFildLabel: { get: () => element(by.css('#form-login > div:nth-child(1) > label')) },
    emailFild: { get: () => element(by.id('loginEmail')) },
    passwordFildLabel: { get: () => element(by.css('#form-login > div:nth-child(2) > label')) },
    passwordFild: { get: () => element(by.id('loginPassword')) },
    rememberCheckLabel: { get: () => element(by.css('#form-login > div.form-check > label')) },
    rememberCheck: { get: () => element(by.id('rememberLoginCheck')) },
    submitButton: { get: () => element(by.buttonText('Submit')) },
    loginErrorMessage: { get: () => element(by.id('login-alert')) }
});

module.exports = LoginPage;
