/*
* a series of tests to serve as an example for the wikipedia site.
*/

"use strict";
var testArray = [];
var utils = require("../run/initBrowser.js");
//counts the number of links foud on a wikipedia page
//
const test1 = {
  name: "wikipedia count",
  success: true,
  get: async function() {
    try {
      utils.browser.get("http://en.wikipedia.org/wiki/Wiki");
      await utils.browser
        .findElements(utils.webdriver.By.css('[href^="/wiki/"]'))
        .then(function(links) {
          if (links.length > 0) {
            this.success = true;
          } else {
            this.success = false;
          }
          //  utils.browser.quit();
        });
    } catch (err) {
      this.success = false;
    }
  }
};

testArray.push(test1);
// */

// a test to fine an article about messiah college on wikipedia. returns true if the title of the page
//is "Messiah College"
//this test uses .then() as the primary control flow instead of "await". to serve as an example
const test2 = {
  name: "find messiah college article",
  success: true,
  get: async function() {
    try {
      await utils.browser.get("http://en.wikipedia.org/");

      await utils.browser
        .findElement(utils.webdriver.By.name("search"))
        .sendKeys("Messiah  College");
      await utils.browser.findElement(utils.webdriver.By.name("go")).click();

      /**
          utils.browser
            .findElement(utils.webdriver.By.css("#firstHeading"))
            .getText()
        )
        .then(function(heading) {
          if (heading != "Messiah College") {
            success = false;
          }
        });*/
    } catch (err) {
      console.log(err);
      this.success = false;
      return false;
    }
  }
};
testArray.push(test2);

/*/
const test3 = {
  name: "facebook messenger test",
  get: async function() {
    var name = "log in to facebook messenger";
    var success = true;

    try {
      await utils.browser.get(
        "https://www.facebook.com/messages/t/sam.mahan.1"
      );
      await utils.browser
        .findElement(utils.webdriver.By.css("#email"))
        .sendKeys("sfmahan@gmail.com");
      await utils.browser
        .findElement(utils.webdriver.By.css("#pass"))
        .sendKeys("312 William!");
      utils.browser.findElement(utils.webdriver.By.css("#u_0_2")).click();
      try {
        await utils.browser
          .findElement(utils.webdriver.By.css("#loginbutton"))
          .click();
      } catch (err) {}
      utils.browser.findElement(utils.webdriver.By.css("._3ixn")).click();
      await utils.browser
        .findElement(utils.webdriver.By.css("._3oh-"))
        .getText()
        .then(function(text) {
          if (text == "Sam Mahan") {
            success = true;
          }
        });
    } catch (error) {
      success = false;
    }
  }
};
testArray.push(test3);
// **/

module.exports = testArray;
