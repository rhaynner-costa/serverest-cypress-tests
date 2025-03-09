const { logResponse } = require('../helpers/responseHelper');

describe("Testes de login", () => {
  it("Bate no login e pega o token", () => {
    cy.apiLogin("alexa34564@qa.com", "teste123").then((response) => {
      expect(response.status).to.equal(401);
      logResponse(response);
    });
  });
});
