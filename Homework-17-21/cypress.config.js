const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 30000,
  responseTimeout: 30000,
  defaultCommandTimeout: 10000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/results',
    overwrite: false,
    html: false,
    json: true,
  },

  screenshotsFolder: '../Homework-17-21/cypress/screenshots',
  videosFolder: 'cypress/reports/videos',


  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    supportFile: false,
    setupNodeEvents(on, config) {
      config.baseUrl = config.env.BASE_URL || 'https://qauto.forstudy.space';

      if (config.env.ENV === 'stableEnv') {
        config.baseUrl = 'https://qauto.forstudy.space';
      } else if (config.env.ENV === 'brokenEnv') {
        config.baseUrl = 'https://qauto2.forstudy.space';
      }

      return config;

    },
  },
});
