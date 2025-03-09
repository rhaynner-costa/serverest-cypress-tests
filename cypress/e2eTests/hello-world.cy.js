const ApiHelper = require("../helpers/apiHelper"); // importa as apis de auxilio da pasta helpers

describe("Hello World E2E Test", () => {
  it("should display the correct title", () => {
    cy.visit("http://localhost:3000");
    cy.title().should("include", "Expected Title");
  });

  it("should navigate to another page", () => {
    cy.visit("http://localhost:3000");
    cy.get("a").contains("Navigate").click();
    cy.url().should("include", "/expected-path");
  });
});
