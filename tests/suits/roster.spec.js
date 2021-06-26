'use strict';

const RosterPage = require('../pages/rosterPage');
const LoginPage = require('../pages/loginPage');

describe('Roster Page', () => {

    let rosterPage;
    let loginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        rosterPage = new RosterPage();
        // Since this is not an Angular Site
        browser.ignoreSynchronization = true;
        browser.get('../../superhero/index.html');

        loginPage.emailFild.sendKeys('testsashajson@testjson.com');
        loginPage.passwordFild.sendKeys('fakepassword');
        loginPage.submitButton.click();

    });

    afterEach(() => {

    });

    it('should display all default roster elements', () => {

        expect(rosterPage.rosterTitleText.isDisplayed()).toBe(true);
        expect(rosterPage.rosterTitleText.getText()).toEqual('Build Your Superhero Roster:');

        expect(rosterPage.wolverineItemText.isDisplayed()).toBe(true);
        expect(rosterPage.wolverineItemText.getText()).toEqual('Wolverine');

        expect(rosterPage.ironManItemText.isDisplayed()).toBe(true);
        expect(rosterPage.ironManItemText.getText()).toEqual('Iron Man');

        expect(rosterPage.deadpoolItemText.isDisplayed()).toBe(true);
        expect(rosterPage.deadpoolItemText.getText()).toEqual('Deadpool');

        expect(rosterPage.thorItemText.isDisplayed()).toBe(true);
        expect(rosterPage.thorItemText.getText()).toEqual('Thor');

        expect(rosterPage.spiderMamItemText.isDisplayed()).toBe(true);
        expect(rosterPage.spiderMamItemText.getText()).toEqual('Spider-Man');

        expect(rosterPage.rosterFieldLabel.isDisplayed()).toBe(true);
        expect(rosterPage.rosterFieldLabel.getText()).toEqual('ADD A SUPERHERO');

        expect(rosterPage.rosterField.isDisplayed()).toBe(true);
        expect(rosterPage.rosterField.getText()).toEqual('');

        expect(rosterPage.submitButton.isDisplayed()).toBe(true);

    });

    it('should add a hero on submit', () => {

        rosterPage.rosterField.sendKeys('Ms Marvel');
        rosterPage.submitButton.click();

        expect(element(by.css('#hero-list > li:nth-child(6)')).isDisplayed()).toBe(true);
        expect(element(by.css('#hero-list > li:nth-child(6)')).getText()).toEqual('Ms Marvel');

    });

    it('', () => {

    });

    it('', () => {

    });

    it('', () => {

    });

});
