const { logResponse } = require('./responseHelper');

function ensureUserExists(email, password) {
    cy.apiListaUsuarioPeloEmail(email).then((response) => {
        //expect(response.status).to.equal(200);
        // logResponse(response);

        if (response.body.usuarios.length === 0) {
            cy.apiCadastraNovoUSuarioAdmin(email, password).then((response) => {
                // expect(response.status).to.equal(201);
                cy.log("Usuário não existe, vamos criar um.......x");
                //cy.log(`Usuário cadastrado: ${JSON.stringify(response.body)}`); // Imprime os detalhes do usuário no log do Cypress
            });
        } else {
            cy.log("Usuário já existe...segue o baile!");
            //cy.log(`Usuário já existe: ${JSON.stringify(response.body.usuarios[0])}`); // Imprime os detalhes do usuário no log do Cypress
        }
    });
}

module.exports = { ensureUserExists };