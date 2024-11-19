const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 30000,
  responseTimeout: 30000,
  defaultCommandTimeout: 10000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
    timestamp: 'mm/dd/yyyy_HH/MM/ss'
  },

  screenshotsFolder: '../Homework-17-19/cypress/screenshots',
  videosFolder: 'cypress/reports/videos',


  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
