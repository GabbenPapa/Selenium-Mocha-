const {By, Key, Builder} = require('selenium-webdriver');
require ('chromedriver');

async function upload_file_test() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://filebin.net/');
    
    let input = await driver.findElement(By.id('fileField'));

    await input.sendKeys('D:\\git\\selenium\\tests\\test.js');

    setInterval(function () {
        driver.quit();
    }, 10000);
}

upload_file_test();
