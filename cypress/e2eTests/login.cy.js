describe('TEste login', () => {

    before(() => {
        cy.login("alexa34564@qa.com", "teste123");
        cy.visit('https://front.serverest.dev/admin/home');
    });

    it.only('Faz o login pela web', () => {

    });
});