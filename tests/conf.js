exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        // chromeOptions: { args: ["--disable-dev-shm-usage", '--no-sandbox'] }
    },
    specs: [
        './suits/*.js'
    ],
    jasmineNodeOpts: {
        showColors: true
    }
}
