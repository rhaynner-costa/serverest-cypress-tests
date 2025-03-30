const CONSTANTS = require('../helpers/constants');
describe("Testes de api do servrest", () => {
    let userId;
    const { novoEmail, senha } = CONSTANTS;

    context('CRUD do usuario ', () => {

        it('Cadastra novo usuario', () => {
            cy.apiCadastraNovoUSuarioAdmin(novoEmail, senha).then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body.message).to.equal("Cadastro realizado com sucesso");
                expect(response.body._id).to.not.be.null;

                userId = response.body._id; // Armazena o _id na variável global
                cy.log(`Usuário criado com ID: ${userId}`);
            });
        });

        it('Lista usuario cadastrado', () => {
            cy.apiListaUsuarioPeloEmail(novoEmail).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.usuarios[0].email).to.equal(novoEmail);
                expect(response.body.usuarios[0]).to.have.property("nome");
                expect(response.body.usuarios[0]).to.have.property("_id");
                expect(response.body.usuarios[0]._id).to.equal(userId);

            });
        });

        it('Deleta usuario', () => {
            cy.apiDeletaUsuarioPeloId(userId).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.message).to.equal("Registro excluído com sucesso");
            });
        });

    });

});
