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
        browser.get('http://localhost:63342/automation-test-with-protractor/superhero/index.html?_ijt=778a7i2g34hpsth8n2qcasqkhl');

        loginPage.emailField.sendKeys('testsashajson@testjson.com');
        loginPage.passwordField.sendKeys('fakepassword');
        loginPage.submitButton.click();
    });

    afterEach(() => {

    });

    // it('should display all elements for voting section', () => {
    //
    //     expect(votePage.voteTitleText.isDisplayed()).toBe(true);
    //     expect(votePage.voteTitleText.getText()).toEqual('Vote for your favorite Superhero movie');
    //
    //     expect(votePage.xmenChoiceRad.isDisplayed()).toBe(true);
    //     expect(votePage.xmenChoiceRad.getText()).toEqual('X-Men');
    //
    //     expect(votePage.avengersChoiceRad.isDisplayed()).toBe(true);
    //     expect(votePage.avengersChoiceRad.getText()).toEqual('Avengers');
    //
    //     expect(votePage.deadPoolChoiceRad.isDisplayed()).toBe(true);
    //     expect(votePage.deadPoolChoiceRad.getText()).toEqual('Deadpool');
    //
    //     expect(votePage.spiderManChoiceRad.isDisplayed()).toBe(true);
    //     expect(votePage.spiderManChoiceRad.getText()).toEqual('Spider-Man Homecoming');
    //
    //     expect(votePage.ironManChoiceRad.isDisplayed()).toBe(true);
    //     expect(votePage.ironManChoiceRad.getText()).toEqual('Iron Man');
    //
    //     expect(votePage.submitButton.isDisplayed()).toBe(true);
    //
    //     expect(votePage.movieLabel.isDisplayed()).toBe(true);
    //     expect(votePage.movieLabel.getText()).toEqual('Movie');
    //
    //     expect(votePage.voteLabel.isDisplayed()).toBe(true);
    //     expect(votePage.voteLabel.getText()).toEqual('Votes');
    //
    //     expect(votePage.xmenLabel.isDisplayed()).toBe(true);
    //     expect(votePage.xmenLabel.getText()).toEqual('X-Men');
    //
    //     expect(votePage.xmenValue.isDisplayed()).toBe(true);
    //     expect(votePage.xmenValue.getText()).toEqual('10');
    //
    //     expect(votePage.avengersLabel.isDisplayed()).toBe(true);
    //     expect(votePage.avengersLabel.getText()).toEqual('Avengers');
    //
    //     expect(votePage.avengersValue.isDisplayed()).toBe(true);
    //     expect(votePage.avengersValue.getText()).toEqual('5');
    //
    //     expect(votePage.deadPoolLabel.isDisplayed()).toBe(true);
    //     expect(votePage.deadPoolLabel.getText()).toEqual('DeadPool');
    //
    //     expect(votePage.deadPoolValue.isDisplayed()).toBe(true);
    //     expect(votePage.deadPoolValue.getText()).toEqual('22');
    //
    //     expect(votePage.spiderManLabel.isDisplayed()).toBe(true);
    //     expect(votePage.spiderManLabel.getText()).toEqual('Spider-Man');
    //
    //     expect(votePage.spiderManValue.isDisplayed()).toBe(true);
    //     expect(votePage.spiderManValue.getText()).toEqual('12');
    //
    //     expect(votePage.ironManLabel.isDisplayed()).toBe(true);
    //     expect(votePage.ironManLabel.getText()).toEqual('Iron Man');
    //
    //     expect(votePage.ironManValue.isDisplayed()).toBe(true);
    //     expect(votePage.ironManValue.getText()).toEqual('1');
    //
    // });

    it('should add 1 to X-Men votes', () => {

        votePage.submitButton.click();
        expect(votePage.xmenLabel.getText()).toEqual('11');

    });

});
