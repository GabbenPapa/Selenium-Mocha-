
const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');
var should = require('chai').should();
require ('chromedriver');

async function test_case() {
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
}

test_case();

// async function example() {
//     let driver = await new Builder().forBrowser('chrome').build();

//     await driver.get('https://lambdatest.github.io/sample-todo-app/');

//     await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);

//     let todoText = await driver.findElement(By.xpath('(//li)[last()]')).getText().then(function(value){
//         return value
//     });

//     //assert.strictEqual(todoText,('Learn Selenium'));

//     todoText.Chai.should.equal('Learn Selenium');

//     await driver.quit();
// }

// example();
