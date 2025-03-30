const userHelper = {
    verificarOuCriarUsuario: (email, senha) => {
        return cy.apiListaUsuarioPeloEmail(email).then((response) => {
            if (response.body.usuarios.length > 0) {
                cy.log(`Usuário com o e-mail ${email} já existe.`);
                cy.wrap(response.body.usuarios[0]).then((usuario) => {
                    cy.log(`Usuário existente: ${JSON.stringify(usuario)}`); // Exibe o conteúdo do usuário
                });
                return cy.wrap(response.body.usuarios[0]); // Retorna o usuário existente como um comando Cypress
            } else {
                cy.log(`Usuário com o e-mail ${email} não encontrado. Criando novo usuário...`);
                return cy.apiCadastraNovoUSuarioAdmin(email, senha).then((response) => {
                    expect(response.status).to.equal(201); // Verifica se o cadastro foi bem-sucedido
                    cy.log(`Usuário criado: ${JSON.stringify(response.body)}`); // Exibe o conteúdo do novo usuário
                    return cy.wrap(response.body); // Retorna o novo usuário criado como um comando Cypress
                });
            }
        });
    },
};

module.exports = userHelper;