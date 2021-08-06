'use strict';

const HeaderPage = function () {};

HeaderPage.prototype = Object.create({}, {
    headerTitle: { get: () => element(by.css('body > div.container-fluid > div:nth-child(1) > h1')) },
    headerImage: { get: () => element(by.css('body > div.container-fluid > div:nth-child(2) > img')) },
    headerBody: { get: () => element(by.css('body > div.container-fluid > div:nth-child(3) > div > p')) }
});

module.exports = HeaderPage;
