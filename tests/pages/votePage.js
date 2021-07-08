'use strict';

const VotePage = function () {};

VotePage.prototype = Object.create({}, {
    voteTitleText: { get: () => element(by.css('body > div.container-fluid > div:nth-child(6) > div > h4')) },
    xmenChoiceRad: { get: () => element(by.css('#vote-form > div:nth-child(1) > label')) },
    avengersChoiceRad: { get: () => element(by.css('#vote-form > div:nth-child(2) > label')) },
    deadPoolChoiceRad: { get: () => element(by.css('#vote-form > div:nth-child(3) > label')) },
    spiderManChoiceRad: { get: () => element(by.css('#vote-form > div:nth-child(4) > label')) },
    ironManChoiceRad: { get: () => element(by.css('#vote-form > div:nth-child(5) > label')) },
    submitButton: { get: () => element(by.css('#vote-form > button')) },

    movieLabel: { get: () => element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(1)')) },
    voteLabel: { get: () => element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(2)')) },
    xmenLabel: { get: () => element(by.id('movieName1')) },
    xmenValue: { get: () => element(by.id('movieVotes1')) },
    avengersLabel: { get: () => element(by.id('movieName2')) },
    avengersValue: { get: () => element(by.id('movieVotes2')) },
    deadPoolLabel: { get: () => element(by.id('movieName3')) },
    deadPoolValue: { get: () => element(by.id('movieVotes3')) },
    spiderManLabel: { get: () => element(by.id('movieName4')) },
    spiderManValue: { get: () => element(by.id('movieVotes4')) },
    ironManLabel: { get: () => element(by.id('movieName5')) },
    ironManValue: { get: () => element(by.id('movieVotes5')) }
});

module.exports = VotePage;
