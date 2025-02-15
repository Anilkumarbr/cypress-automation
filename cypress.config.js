const { defineConfig } = require("cypress");
//const { downloadFile } = require("cypress-download/lib/addPlugin");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // "retries":{"runMode":1,"openMode":1},
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
     // on('task',{downloadFile})
    },
  },
});
