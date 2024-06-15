
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

    beforeEach(function(){
        ltCapabilites.capabilities.name = this.currentTest.title;

        driver = new Builder().usingServer(gridUrl).withCapabilities(ltCapabilites.capabilities).build();
    });

    afterEach(async function(){
        await driver.quit();
    });

    it("successfully adds another todo to application", async function() {
        // let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('https://lambdatest.github.io/sample-todo-app/');
    
            await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);
    
            await driver.wait(async () => {
                let lastTodo = await driver.findElement(By.xpath('(//li)[last()]')).getText();
                return lastTodo.includes('Learn Selenium');
            }, 10000, 'Wait new element.');
    
            let lastTodo = await driver.findElement(By.xpath('(//li)[last()]')).getText();
            //assert.strictEqual(lastTodo.includes('Learn Selenium'), true);
    
            lastTodo.should.equal('Learn Selenium');
        } 
        finally {
            console.log("Test completed");
        }
    });
    it("successfully adds third todo to application", async function() {
        // let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('https://lambdatest.github.io/sample-todo-app/');
    
            await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Baltaarc', Key.RETURN);
    
            await driver.wait(async () => {
                let lastTodo = await driver.findElement(By.xpath('(//li)[last()]')).getText();
                return lastTodo.includes('Learn Baltaarc');
            }, 10000, 'Wait new element.');
    
            let lastTodo = await driver.findElement(By.xpath('(//li)[last()]')).getText();
            //assert.strictEqual(lastTodo.includes('Learn Selenium'), true);
    
            lastTodo.should.equal('Learn Baltaarc');
        } 
        finally {
            console.log("Test completed");
        }
    });
});
