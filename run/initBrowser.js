var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder()
  .usingServer()
  .withCapabilities({ browserName: "chrome" })
  .build();

module.exports = { browser, webdriver };
