'use strict';

const NavPage = function () {};

NavPage.prototype = Object.create({}, {
    homeLink: { get: () => element(by.linkText('Home')) },
    heroFactLink: { get: () => element(by.linkText('Hero Facts')) },
    logOutLink: { get: () => element(by.linkText('Logout')) },
    wolverineOption: { get: () => element(by.linkText('Wolverine')) },
    spiderManOption: { get: () => element(by.linkText('Spider-Man')) }
});

module.exports = NavPage;
