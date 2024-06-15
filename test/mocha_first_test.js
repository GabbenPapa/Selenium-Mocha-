
const {Builder, By, Key} = require('selenium-webdriver');
//const assert = require('assert');
var should = require('chai').should();
require ('chromedriver');

describe("add todo tests", function() {
    it("successfully adds a todo to application", async function() {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('https://lambdatest.github.io/sample-todo-app/');
    
            await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);
    
            await driver.wait(async () => {
                let lastTodo = await driver.findElement(By.xpath('(//li)[last()]')).getText();
                return lastTodo.includes('Learn Selenium');
            }, 5000, 'Wait new element.');
    
            let lastTodo = await driver.findElement(By.xpath('(//li)[last()]')).getText();
            //assert.strictEqual(lastTodo.includes('Learn Selenium'), true);
    
            lastTodo.should.equal('Learn Selenium');
        } 
        finally {
            await driver.quit();
        }
    });
});





