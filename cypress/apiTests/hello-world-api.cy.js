const ApiHelper = require("../helpers/apiHelper"); // importa as apis de auxilio da pasta helpers

describe("Hello World API Tests", () => {
  it("should return a 200 status code", () => {
    cy.request("https://api.example.com/hello-world")
      .its("status")
      .should("equal", 200);
  });

  it("should return the correct response body", () => {
    cy.request("https://api.example.com/hello-world")
      .its("body")
      .should("deep.equal", { message: "Hello, World!" });
  });
});
