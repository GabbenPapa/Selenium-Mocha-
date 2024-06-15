
const {Builder, By, Key} = require('selenium-webdriver');
const ltCapabilites = require('../capabilities');

var should = require('chai').should();
require ('chromedriver');

describe("add another todo tests", function() {
    var driver;
    const USERNAME = ltCapabilites.capabilities['LT:Options'].username;
    const ACCESS_KEY = ltCapabilites.capabilities['LT:Options'].accessKey;
    const URL = ltCapabilites.capabilities['LT:Options'].url;

    const GRID_HOST = "hub.lambdatest.com/wd/hub";
    const gridUrl = 'https://' + USERNAME + ':' + ACCESS_KEY + '@' + GRID_HOST;

    const todoEndPoint = 'https://lambdatest.github.io/sample-todo-app/';

    browsers = [
        {browser: 'Chrome', bVersion: 'latest', os: 'Windows 10'},
        {browser: 'Firefox', bVersion: 'latest', os: 'Windows 10'},
        {browser: 'Edge', bVersion: 'latest', os: 'Windows 10'},
    ];

    // browsers.forEach((browser, bVersion, os) => {
    for (const { browser, bVersion, os } of browsers) {
        it(`successfully adds another todo for browser ${browser}, ${bVersion}, ${os}`, async function() {

            ltCapabilites.capabilities.platformName = os;
            ltCapabilites.capabilities.browserName = browser;
            ltCapabilites.capabilities.version = bVersion; 

            ltCapabilites.capabilities.name = this.test.title;
            driver = new Builder().usingServer(gridUrl).withCapabilities(ltCapabilites.capabilities).build();
            try {
                await driver.get(todoEndPoint);

                await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);

                await driver.wait(async () => {
                    let lastTodo = await driver.findElement(By.xpath('(//li)[last()]')).getText();
                    return lastTodo.includes('Learn Selenium');
                }, 10000, 'Wait new element.');

                let lastTodo = await driver.findElement(By.xpath('(//li)[last()]')).getText();

                lastTodo.should.equal('Learn Selenium');
            } 
            finally {
                await driver.quit();
                console.log("Test completed");
            }
        });
    };
});
