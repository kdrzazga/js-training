## ES6 Tutorial

Start the tutorial [here](http://ccoenraets.github.io/es6-tutorial).

# JS Training

## Installation instruction

1. Install git
2. Clone this repository
3. Checkout branch 0-initial (git checkout 0-initial)
4. Install node version manager (Windows version available on: https://github.com/coreybutler/nvm-windows/releases)
5. Install node 8.9.4 (nvm install 8.9.4)
6. Tell nvm to use installed node version (nvm use 8.9.4)
7. In the repository directiory (with package.json file) - call: npm install
8. Install karma globally : npm i -g karma-cli@1.0.1
9. Install mocha globally : npm i -g mocha@5.0.0
10. Install yarn globally : npm i -g yarn
11. Install XmlHttpRequest : npm install xmlhttprequest
12. Checkout webpack branch 

## When on webpack branch:

1. To run the app: "npm start" - app starts on port 3000
2. Enter http://localhost:3000 in your browser to verify startup

TIP: build.bat executes these actions provided that correct path to Chrome is given  

3. To run karma tests:
	- open file karma.conf.js in project root folder and locate section  "browsers:"
    - use 'Chrome' in karma.conf.js browsers array to test in the Chrome browser
    - use 'ChromeHeadless' in karma.conf.js browsers array to test in the headless version of Chrome
	- open new console and type: karma start
	- Message "connected" Should be displayed in the browser
4. To run mocha tests: "mocha node"
	- Unit tests defined in main.spec.js will be executed
