const { logResponse } = require('../helpers/responseHelper');
const userHelper = require('../helpers/userHelper');
const CONSTANTS = require('../helpers/constants');

describe("Testes de api do servrest", () => {
  const { emailValido, emailInvalido, senha } = CONSTANTS;
  let userId; // Variável global

  before(() => {
    userHelper.verificarOuCriarUsuario(emailValido, senha).then((usuario) => {
      userId = usuario._id; // Armazena o _id na variável global
    });
  });

  context('Login', () => {

    it("Faz login com usuario invalido", () => {
      cy.apiLogin(emailInvalido, senha).then((response) => {
        expect(response.status).to.equal(401);
        expect(response.body.message).to.equal("Email e/ou senha inválidos");
      });
    });

    it("Faz login com usuario valido", () => {
      cy.apiLogin(emailValido, senha).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("Login realizado com sucesso");
        expect(response.body.authorization).to.not.be.null;
      });
    });

    it('Lista usuarios cadastrados pelo email', () => {
      cy.apiListaUsuarioPeloEmail(emailValido).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.usuarios[0].email).to.equal(emailValido);
        expect(response.body.usuarios[0]).to.have.property("nome");
        expect(response.body.usuarios[0]).to.have.property("_id");
      });
    });

  });

});
