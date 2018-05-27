/*
* a series of tests to serve as an example for the wikipedia site.
*/

"use strict";
var testArray = [];
var utils = require("../run/initBrowser.js");

const test1 = {
  name: "messiah search for CIS program",
  success: true,
  get: async function() {
    try {
      await utils.browser.get("http://www.messiah.edu");
      await utils.browser
        .findElement(utils.webdriver.By.xpath("//a[contains(@class,'ug-prg')]"))
        .then(function(element) {
          element.click();
        });
      await utils.browser
        .findElements(utils.webdriver.By.css("program-url"))
        .then(async function(response) {
          for (var i in response) {
            if ((await i.getText()) == "Computer and Information Science") {
              i.click();
            }
          }
        });
    } catch (err) {
      this.success = false;
    }
  }
};
testArray.push(test1);

const test2 = {
  name: "Find President Phipps",
  success: true,
  get: async function() {
    var parent = this;
    try {
      await utils.browser.get("http://www.messiah.edu");
      await utils.browser
        .findElement(
          utils.webdriver.By.xpath("//a[contains(@href, '/info/20000/about')]")
        )
        .click();
      await utils.browser
        .findElement(
          utils.webdriver.By.xpath(
            "//aside/div/ul/li/a[contains(@href, '/info/20016/college_leadership')]"
          )
        )
        .click();

      var elements = await utils.browser.findElements(
        utils.webdriver.By.tagName("h2")
      );
      parent.success = false;
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        await element.getText().then(function(text) {
          if (text == "Kim S. Phipps, Ph.D.") {
            parent.success = true;
          }
        });
      }
    } catch (err) {
      console.log(err);
      this.success = false;
    }
  }
};
testArray.push(test2);
// */

module.exports = testArray;
