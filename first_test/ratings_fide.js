const {By, Key, Builder} = require('selenium-webdriver');
require ('chromedriver');

async function test_case() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://ratings.fide.com/top.phtml');

    let names = await driver.findElements(By.css('.tur'));

    for (let i = 0; i < names.length; i++) {
        let name = await names[i].getText();
        console.log(name);
    }

    driver.quit();
}

test_case();
