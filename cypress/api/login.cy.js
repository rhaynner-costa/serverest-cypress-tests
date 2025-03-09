const { logResponse } = require('../helpers/responseHelper');

describe("Testes de login", () => {

  it("Tenta login com dados invalidos no login", () => {
    cy.apiLogin("usuarioinvalido@qa.com", "teste123").then((response) => {
      expect(response.status).to.equal(401);
    });
  });

  it("Faz login login", () => {
    cy.apiLogin("alexa34564@qa.com", "teste123").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Login realizado com sucesso");

    });
  });

  it('Lista usuarios cadastrados pelo email', () => {
    cy.apiListaUsuarioPeloEmail("alexa34564@qa.com").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.usuarios[0].email).to.equal("alexa34564@qa.com");
      expect(response.body.usuarios[0]).to.have.property("nome");
      expect(response.body.usuarios[0]).to.have.property("_id");
      //logResponse(response);
    });
  });

});
