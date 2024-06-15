const {By, Key, Builder, until} = require('selenium-webdriver');
require ('chromedriver');

async function youtube_chanel_test() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.youtube.com/channel/UClLRjv91UloHweZMyxpRPrw');

        let acceptButton = await driver.wait(until.elementLocated(By.xpath("//span[text()='Az összes elfogadása']")), 5000);
        await acceptButton.click();

        let linksContainingSelenium = await driver.findElements(By.xpath("//a[contains(text(), 'Selenium')]"));

        for (let link of linksContainingSelenium) {
            console.log(await link.getText());
        }
    } 
    finally {
        setInterval(function () {
            driver.quit();
        }, 5000);
    }
}

youtube_chanel_test();
