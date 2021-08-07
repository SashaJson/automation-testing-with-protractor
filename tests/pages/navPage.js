'use strict';

const NavPage = function () {};

NavPage.prototype = Object.create({}, {
    homeLink: { get: () => element(by.linkText('Home')) },
    heroFactLink: { get: () => element(by.linkText('Hero Facts')) },
    logOutLink: { get: () => element(by.linkText('Logout')) },
    wolverineOption: { get: () => element(by.linkText('Wolverine')) },
    spiderManOption: { get: () => element(by.linkText('Spider-Man')) },

    wolverineModalTitle: { get: () => element(by.id('wolverineModalLabel')) },
    wolverineModalBody: { get: () => element(by.css('#wolverineModal > div > div > div.modal-body')) },
    wolverineModalXButton: { get: () => element(by.css('#wolverineModal > div > div > div.modal-header > button > span')) },
    wolverineModalCloseButton: { get: () => element(by.css('#wolverineModal > div > div > div.modal-footer > button')) },

    spiderManModalTitle: { get: () => element(by.id('spidermanModalLabel')) },
    spiderManModalBody: { get: () => element(by.css('#spidermanModal > div > div > div.modal-body')) },
    spiderManModalXButton: { get: () => element(by.css('#spidermanModal > div > div > div.modal-header > button > span')) },
    spiderManModalCloseButton: { get: () => element(by.css('#spidermanModal > div > div > div.modal-footer > button')) }

});

module.exports = NavPage;
