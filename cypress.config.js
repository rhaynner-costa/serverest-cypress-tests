const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      // implement node event listeners here
    },
    specPattern: ["cypress/e2e/**/*.cy.js", "cypress/api/**/*.cy.js"],
    env: {
      baseUrlE2E: 'https://front.serverest.dev',
      baseUrlAPI: 'https://serverest.dev'
    }
  }
});