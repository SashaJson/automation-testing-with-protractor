'use strict';

const NavPage = function () {};

NavPage.prototype = Object.create({}, {
    sample: { get: () => element(by.id('')) }
});

module.exports = NavPage;
