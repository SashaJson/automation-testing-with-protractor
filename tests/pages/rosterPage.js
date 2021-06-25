'use strict';

const RosterPage = function () {};

RosterPage.prototype = Object.create({}, {
    rosterTitleText: { get: () => element(by.css('body > div.container-fluid > div:nth-child(4) > h3')) },
    wolverineItemText: { get: () => element(by.css('#hero-list > li:nth-child(1)')) },
    ironManItemText: { get: () => element(by.css('#hero-list > li:nth-child(2)')) },
    deadpoolItemText: { get: () => element(by.css('#hero-list > li:nth-child(3)')) },
    thorItemText: { get: () => element(by.css('#hero-list > li:nth-child(4)')) },
    spiderMamItemText: { get: () => element(by.css('#hero-list > li:nth-child(5)')) },
    rosterFieldLabel: { get: () => element(by.css('#addHero-form > div > label')) },
    rosterField: { get: () => element(by.id('heroInput')) },
    submitButton: { get: () => element(by.css('#addHero-form > button')) }
});

module.exports = RosterPage;
