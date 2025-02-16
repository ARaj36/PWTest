# PWTest
This is my login assignment github repository
<br>
**Author - Raj
** Functional test case for Login Page 

Positive test cases :-
1. Login with correct username and password - The user should be successfully logged in and be redirected to the dashboard or homepage.
2. Login with correct username and password with special characters and symobols -The user should be successfully logged in and be redirected to the homepage
3. Login with correct username and password with external keyboard if using laptop - The user should be able to enter the characters using external keyboard and logged in successsfully
4. Login with correct username and password with text and buttons visible properly - The user should be able to input the values with text and buttons visible on the page and should be logged in successfully
5. Login with correct username and password on different browsers/devices - The user should be able to logged in successfully with correct credentials on different browser/devices

Negative test cases - 
1. Login with blank username and correct password - The user should not be able to log in 
2. Login with correct username and incorrect password - The user should not be able to log in and error message should be displayed
3. Login with correct username and blank password - The user should not be able to log in and error message should be displayed
4. Login with incorrect username and password - The user should not be able to log in and error message should be displayed
5. Login with blank username and password - The user should not be able to log in and error message should be displayed

**Playwright Test Automation
**This README explains how to set up and run tests using Playwright for automated browser testing.

Prerequisites
Before running the tests, make sure you have the following installed:

Node.js: Playwright is a Node.js library, so make sure Node.js is installed. You can download it from here.
npm: npm is installed automatically with Node.js. It is used to manage dependencies.

Install Playwright
We need to install Playwright and the test runner. 
Perform the following steps to install the Playwright package:
 Step 1 : Create a folder with a name
 Step 2 : Open the folder and run cmd command
 Step 3 : Run code ./ and hit enter
 Step 4 : Click on extensions from the left menu and search for Playwright extensions
 Step 5 : Install Playwright Test for VSCode
 Step 6 : Go to view and click on command palette
 Step 7 : Search playwright and click on Install Playwright
 Step 8 : Folder structure will be created
 To integrate allure report with the projct, following steps need to be performed
 Step 1 :  Install Necessary Dependencies
  need to install the Allure Playwright Reporter and Allure's command-line tool 
Install Playwright and Allure Reporter
Run the command npm install -D @playwright/test allure-playwright
Install Allure Command-Line Tool
To generate and view the allure reports, run the command
npm install -g allure-commandline --save-dev
Step 2 : Configure allure report in playwright
 Update playwright.config.ts as below -
 // playwright.config.js
module.exports = {
  reporter: [
    ['list'],                    // Optionally, you can use a second reporter like 'list' for console output.
    ['allure-playwright']         // Add allure-playwright as the reporter
  ],
  use: {
    headless: false,              // Set to false if you want to see the browser during the test execution
  },
};

Step 3 : Running the test 
npx playwright test 

Step 4 : Generate the allure reports
allure generate allure-results --clean -o allure-report
The above command creates the Allure report from the allure-results folder and puts it in the allure-report directory.
 To open the Allure report in your browser, use the below command 
allure open allure-report
The above command launches the allure report in the default browser where we can view the detailed information about the tests


 
