// mocha cs chai, chai - assertions
// unit testing - testing every piece very closly
// other types: functional/inegration - test browser itself, see expected result
// only done during QA/Analyst role, likely not use not nightmare, but something high powered
// phantonJs - rule headless version of chrome
// headless - witout gui, oad page, etc, never see it running
// can control browser with code
// nightmare can be used for more than ntesing, contrlling behidn the scene, scraping, etc
// solenim is other


// TEST DRIVEN DEVELOPMENT
// karma - watcher when changing code, like nodemon, but full featured test runner, takes care of refreshing and running tests after every change
// test driven dev practice - change code, run tests
// karma takes care of all that, in the background, allows focus on code

// getting started:
// need to install all locally on proj dir:
// 0. npm install mocha chai
// 1. npm i -D karma karma-chrome-launcher karma-commonjs karma-browserify browserify watchify mocha chai karma-mocha-reporter
// browserfi - allows require packs in browser
// watcherfy - watches for cahnges
// -d installs to dev dependencies (package.json)

// 2. npm i -g karma-cli
// 3. npm i requirejs
// 4. karma init (inside prj dir)
// command line options: mocha, require js: no, chrome, location test: test/*.js (** is any dir), blank, watch files: yes, 

// karma.conf.js file:
// config file, exporting config, used by karma
// within frameworks: mocha/browserify
// files: test/*.js
// exclude: []
// 17:46
// ...

// 5.karma start:
// will run tests once!
// better to write tests after code done
// 28:xx

// next activity
// 38:xx