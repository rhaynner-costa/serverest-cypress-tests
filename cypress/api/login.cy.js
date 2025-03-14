const { logResponse } = require('../helpers/responseHelper');
const { ensureUserExists } = require('../helpers/userHelper');

const user = {
  email: "alexa34564@qa.com",
  pass: "teste123"
};

describe("API ServeRest", () => {

  before(() => {
    ensureUserExists(user.email, user.pass);
  });

  context('Login', () => {

    it("Faz o login com dados invalidos", () => {
      cy.apiLogin("usuarioinvalido@qa.com", "teste123").then((response) => {
        expect(response.status).to.equal(401);
        //cy.log('Executando....'); // Log no log do Cypress
      });
    });

    it("Faz o login com dados validos", () => {
      cy.apiLogin(user.email, user.pass).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("Login realizado com sucesso");
      });
    });

  });

  context('Cadasto usuario', () => {

    it('Lista o usuario pelo email', () => {
      cy.apiListaUsuarioPeloEmail(user.email).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.usuarios[0].email).to.equal("alexa34564@qa.com");
        expect(response.body.usuarios[0]).to.have.property("nome");
        expect(response.body.usuarios[0]).to.have.property("_id");
      });
    });

  });

});
