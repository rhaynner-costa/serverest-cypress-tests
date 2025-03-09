const { logResponse } = require('../helpers/responseHelper');

describe("Testes de login", () => {
  // it("Tenta login com dados invalidos no login", () => {
  //   cy.apiLogin("alexa34564@qa.com", "teste123").then((response) => {
  //     expect(response.status).to.equal(401);
  //     logResponse(response);
  //   });
  // });

  it('Lista usuarios cadastrados pelo email', () => {
    cy.apiListaUsuarioPeloEmail("alexa34564@qa.com").then((response) => {
      expect(response.status).to.equal(200);
      cy.wrap(response.body.usuarios[0]._id).as('userId');
      logResponse(response);
    }
    );
  });

  // it('Cadastra um novo usuario', () => {
  //   cy.cadastraNovoUSuarioAdmin("alexa34564@qa.com", "teste123").then((response) => {
  //     //expect(response.status).to.equal(201);
  //     logResponse(response);
  //   }
  //   );
  // });

  // it("Faz login login", () => {
  //   cy.apiLogin("alexa34564@qa.com", "teste123").then((response) => {
  //     expect(response.status).to.equal(200);
  //     logResponse(response);
  //   });
  // });

  // it("Deleta usuario", () => {
  //   cy.get('@userId').then((userId) => {
  //     cy.deletaUsuarioPeloId(userId).then((response) => {
  //       //expect(response.status).to.equal(200);
  //       logResponse(response);
  //     });
  //   });
  // });

  it("Lista usuarios cadastrados pelo email e deleta usuario", () => {
    // Lista usuários cadastrados pelo email e armazena o userId
    cy.apiListaUsuarioPeloEmail("alexa34564@qa.com").then((response) => {
      expect(response.status).to.equal(200);
      const userId = response.body.usuarios[0]._id;
      cy.wrap(userId).as('userId');
      logResponse(response);

      // Deleta o usuário usando o userId armazenado
      cy.deletaUsuarioPeloId(userId).then((response) => {
        expect(response.status).to.equal(200);
        logResponse(response);
      });
    });
  });

});
