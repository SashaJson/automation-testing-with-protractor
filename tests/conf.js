exports.config = {
    framework: 'jasmine',
    // directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        // chromeOptions: { args: ["--disable-dev-shm-usage", '--no-sandbox'] }
    },
    specs: [
        './suits/login.spec.js',
        './suits/roster.spec.js'
    ],
    jasmineNodeOpts: {
        showColors: true
    }
}
