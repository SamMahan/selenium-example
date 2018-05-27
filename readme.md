# Selenium Webdriver

This is a test of the selenium webdriver for javascript. In it are four tests, two of which search for items of wikipedia while the other two use messiah.com. 
Selenuim is a tool that "drives" a web browser as a user would would. It is controlled through an object (called "browser") in this code where it can be given commands
for example, browser.get("<website URL>") tells the browser to navigate to the given URL.

Look through the tests and follow the code as the test runs through the browser. many of the functions I used can be found on selenium's website here https://www.seleniumhq.org/docs/03_webdriver.jsp

Be mindful that this is javascript and the browser functions are asynchronous and "thenable". it's a bit much to explain here, but basically the reason why I use "async" and "await" functions is to stop the code from executing before the browser functions gets a response, allowing me to mimic the flow of "normal" code.

# Structure.

This is a node project, and therefore has node_modules and packaje.json in its root. The selenium library resides in the node-modules folder along with a colors library I included for outputs

/tests
the tests reside in /tests. Each test is an object with three parameters, name (for a small description of what the test does), success(true or false based on the outcome of the test), and the function get() (which actually runs the test). 

in each folder, all of the test objects are appended to an array called testArray and then exported via module.exports. Whenever that file is imported into another via "require('<file>')", that array is what is returned.

/run
this folder is responsible for compiling all of the tests together and generating output based on whether or not they are true of false. 

initBrowser.js- initializes the "browser" and "webdriver" objects, as well as any resources that may be needed in thr future. The broswer object for this particular test is configured for chrome. 

testrun.js- this file takes all of the arrays of tests from the /tests folder and plaes them in a larger array. It then uses that array to iterate over every test, trying them and printing "success" or "failed" to the console alongside the name. 

chromedriver.exe- this is responsible for "driving" chrome, and is needed by selenium to access the webpages that are 
being tested. 

# Test Objects

sample test object:

var test = {
  name: "sample test",
  success:true,
  get: async function(){
    try{
      await browser.get("www.messiah.edu");
    }
    catch(err){
      this.success = false;
    }
 }
