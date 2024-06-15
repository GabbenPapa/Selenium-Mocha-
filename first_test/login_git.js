const {By, Key, Builder} = require('selenium-webdriver');
require ('chromedriver');

async function login_test() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://github.com/');
    
    let signInLink = await driver.findElement(By.partialLinkText("Sign in"));
    await signInLink.click();
    console.log(await driver.getTitle());

    if (await driver.getTitle() === 'Let’s build from here · GitHub') {
        console.log('Login Test 1 success');
    } else {
        console.log('Login Test 1 failed');
       // return
    }

    await driver.findElement(By.name('login')).sendKeys('username', Key.RETURN);
    await driver.findElement(By.name('password')).sendKeys('password', Key.RETURN);

    if (await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed()) {
        console.log('Login Test 2 success');
    }

    setInterval(function () {
        driver.quit();
    }, 10000);
}

login_test();
