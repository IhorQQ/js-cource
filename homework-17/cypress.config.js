const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 30000,
  responseTimeout: 30000,
  defaultCommandTimeout: 10000,


  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
