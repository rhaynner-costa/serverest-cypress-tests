// filepath: cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ["cypress/e2eTests/**/*.cy.js", "cypress/apiTests/**/*.cy.js"],
  },
});
