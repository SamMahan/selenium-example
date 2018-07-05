/*
* Carry out a Google Search
*/

"use strict";

var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder()
  .usingServer()
  .withCapabilities({ browserName: "chrome" })
  .build();

browser.get("https://www.google.com");

browser.findElement(webdriver.By.name("q")).sendKeys("Messiah College");
var foo = async function() {
  try {
    await browser
      .findElements(webdriver.By.css(".sbqs_c"))
      .then(function(results) {
        results[0].click();
      });
  } catch (err) {
    console.log("click failed");
    await browser.findElement(webdriver.By.name("btnK")).click();
  }
};
foo();
