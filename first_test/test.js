const {By, Key, Builder, until} = require('selenium-webdriver');
require ('chromedriver');

async function test_case() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com/');
        await driver.wait(until.elementLocated(By.id('L2AGLb')), 5000);
        
        let acceptButton = await driver.findElement(By.id('L2AGLb'));
        await acceptButton.click();

        await driver.findElement(By.name('q')).sendKeys('Hello world', Key.RETURN);

    } finally {
        setInterval(function () {
            driver.quit();
        }, 10000);
    }
}

test_case();
