'use strict';

const VotePage = require('../pages/votePage');
const LoginPage = require('../pages/loginPage');

describe('Vote Page', () => {

    let votePage;
    let loginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        votePage = new VotePage();
        // Since this is not an Angular Site
        browser.ignoreSynchronization = true;
        browser.get('../../superhero/index.html');

        loginPage.emailField.sendKeys('testsashajson@testjson.com');
        loginPage.passwordField.sendKeys('fakepassword');
        loginPage.submitButton.click();
    });

    afterEach(() => {

    });

    it('should display all elements for voting section', () => {

        expect(votePage.voteTitleText.isDisplayed()).toBe(true);
        expect(votePage.voteTitleText.getText()).toEqual('Vote for your favorite Superhero movie');

        expect(votePage.xmenChoiceRadLabel.isDisplayed()).toBe(true);
        expect(votePage.xmenChoiceRadLabel.getText()).toEqual('X-Men');

        expect(votePage.avengersChoiceRadLabel.isDisplayed()).toBe(true);
        expect(votePage.avengersChoiceRadLabel.getText()).toEqual('Avengers');

        expect(votePage.deadPoolChoiceRadLabel.isDisplayed()).toBe(true);
        expect(votePage.deadPoolChoiceRadLabel.getText()).toEqual('Deadpool');

        expect(votePage.spiderManChoiceRadLabel.isDisplayed()).toBe(true);
        expect(votePage.spiderManChoiceRadLabel.getText()).toEqual('Spider-Man Homecoming');

        expect(votePage.ironManChoiceRadLabel.isDisplayed()).toBe(true);
        expect(votePage.ironManChoiceRadLabel.getText()).toEqual('Iron Man');

        expect(votePage.submitButton.isDisplayed()).toBe(true);

        expect(votePage.movieLabel.isDisplayed()).toBe(true);
        expect(votePage.movieLabel.getText()).toEqual('Movie');

        expect(votePage.voteLabel.isDisplayed()).toBe(true);
        expect(votePage.voteLabel.getText()).toEqual('Votes');

    });

    it('should display X - Men in voting section', () => {

        expect(votePage.xmenLabel.isDisplayed()).toBe(true);
        expect(votePage.xmenLabel.getText()).toEqual('X-Men');

        expect(votePage.xmenValue.isDisplayed()).toBe(true);
        expect(votePage.xmenValue.getText()).toEqual('10');

    });

    it('should display Avenger in voting section', () => {

        expect(votePage.avengersLabel.isDisplayed()).toBe(true);
        expect(votePage.avengersLabel.getText()).toEqual('Avengers');

        expect(votePage.avengersValue.isDisplayed()).toBe(true);
        expect(votePage.avengersValue.getText()).toEqual('5');

    });

    it('should display Dead Pool in voting section', () => {

        expect(votePage.deadPoolLabel.isDisplayed()).toBe(true);
        expect(votePage.deadPoolLabel.getText()).toEqual('DeadPool');

        expect(votePage.deadPoolValue.isDisplayed()).toBe(true);
        expect(votePage.deadPoolValue.getText()).toEqual('22');

    });

    it('should display Spider Man in voting section', () => {

        expect(votePage.spiderManLabel.isDisplayed()).toBe(true);
        expect(votePage.spiderManLabel.getText()).toEqual('Spider-Man');

        expect(votePage.spiderManValue.isDisplayed()).toBe(true);
        expect(votePage.spiderManValue.getText()).toEqual('12');

    });

    it('should display Iron Man in voting section', () => {

        expect(votePage.ironManLabel.isDisplayed()).toBe(true);
        expect(votePage.ironManLabel.getText()).toEqual('Iron Man');

        expect(votePage.ironManValue.isDisplayed()).toBe(true);
        expect(votePage.ironManValue.getText()).toEqual('1');

    });

    it('should add 1 to X-Men votes', () => {

        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.xmenChoiceRad.click();
        votePage.submitButton.click()
        expect(votePage.xmenValue.getText()).toEqual('11');
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
        expect(votePage.thanksAlertText.isDisplayed()).toBe(true);

        expect(votePage.voteFormSection.isDisplayed()).toBe(false);

    });

    it('should add 1 to Avenger votes', () => {

        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.avengersChoiceRad.click();
        votePage.submitButton.click();
        expect(votePage.avengersValue.getText()).toEqual('6');
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
        expect(votePage.thanksAlertText.isDisplayed()).toBe(true);

        expect(votePage.voteFormSection.isDisplayed()).toBe(false);

    });

    it('should add 1 to Dead Pool votes', () => {

        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.deadPoolChoiceRad.click();
        votePage.submitButton.click();
        expect(votePage.deadPoolValue.getText()).toEqual('23');
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
        expect(votePage.thanksAlertText.isDisplayed()).toBe(true);

        expect(votePage.voteFormSection.isDisplayed()).toBe(false);

    });

    it('should add 1 to Spider Man votes', () => {

        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.spiderManChoiceRad.click();
        votePage.submitButton.click();
        expect(votePage.spiderManValue.getText()).toEqual('13');
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
        expect(votePage.thanksAlertText.isDisplayed()).toBe(true);

        expect(votePage.voteFormSection.isDisplayed()).toBe(false);

    });

    it('should add 1 to Iron Man votes', () => {

        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.ironManChoiceRad.click();
        votePage.submitButton.click();
        expect(votePage.ironManValue.getText()).toEqual('2');
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
        expect(votePage.thanksAlertText.isDisplayed()).toBe(true);

        expect(votePage.voteFormSection.isDisplayed()).toBe(false);

    });

});
