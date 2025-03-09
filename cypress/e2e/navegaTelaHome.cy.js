const Selectors = require('../selectors/home');
describe('TEste login', () => {

    beforeEach(() => {
        cy.login("alexa34564@qa.com", "teste123");
        cy.visit(Cypress.env('baseUrlE2E') + '/admin/home');
    });

    it('Acessar a lista de usuarios', () => {
        cy.validarTexto(Selectors.subTituloPagina, 'Este é seu sistema para administrar seu ecommerce.');
        cy.clica(Selectors.botaoListarUsuario);
        cy.validarTexto(Selectors.tituloPagina, 'Lista dos usuários');
    });

    it('Acessar a lista de produtos', () => {
        cy.validarTexto(Selectors.subTituloPagina, 'Este é seu sistema para administrar seu ecommerce.');
        cy.clica(Selectors.botaoListarProdutos);
        cy.validarTexto(Selectors.tituloPagina, 'Lista dos Produtos');
    });

});