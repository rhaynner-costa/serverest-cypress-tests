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
