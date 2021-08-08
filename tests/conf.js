const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html',
    reportTitle: 'Superhero Test Result',
    reportOnlyFailedSpecs: false
});

exports.config = {
    framework: 'jasmine',
    // directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        // chromeOptions: { args: ["--disable-dev-shm-usage", '--no-sandbox'] }
    },
    specs: [
        './suits/login.spec.js'
    ],
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {

        }
    },

    beforeLaunch: function () {
      return new Promise(function (resolve) {
         reporter.beforeLaunch(resolve);
      });
    },

    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    logLevel: 'WARN',
    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            },
            summary: {
                displayDuration: false
            }
        }));
    }
}
