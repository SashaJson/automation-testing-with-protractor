'use strict';

const LoginPage = function () {};

LoginPage.prototype = Object.create({}, {
    loginTitleTxt: { get: () => element(by.id('login-title')) },
    emailFieldLabel: { get: () => element(by.css('#form-login > div:nth-child(1) > label')) },
    emailField: { get: () => element(by.id('loginEmail')) },
    passwordFieldLabel: { get: () => element(by.css('#form-login > div:nth-child(2) > label')) },
    passwordField: { get: () => element(by.id('loginPassword')) },
    rememberCheckLabel: { get: () => element(by.css('#form-login > div.form-check > label')) },
    rememberCheck: { get: () => element(by.id('rememberLoginCheck')) },
    submitButton: { get: () => element(by.css('#form-login > button')) },
    loginErrorMessage: { get: () => element(by.id('login-alert')) }
});

module.exports = LoginPage;
