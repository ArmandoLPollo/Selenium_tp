// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('addTaskTest', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('addTaskTest', async function() {
    await driver.get("http://localhost:3000/tasks")
    await driver.manage().window().setRect({ width: 1918, height: 1030 })
    await driver.findElement(By.linkText("Add")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("armand")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("student")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.css(".btn")).click()
  })
})