const Selectors = require('../selectors/home');
describe('Server rest', () => {

    beforeEach(() => {
        //ARRANGE
        cy.login("alexa34564@qa.com", "teste123");

    });

    context('Tela home', () => {

        it('Quando navegar pela tela home, acessar a lista de usuarios', () => {
            //ACT
            cy.visit(Cypress.env('baseUrlE2E') + '/admin/home');
            //ASSERT
            cy.validarTexto(Selectors.subTituloPagina, 'Este é seu sistema para administrar seu ecommerce.');
            cy.clica(Selectors.botaoListarUsuario);
            cy.validarTexto(Selectors.tituloPagina, 'Lista dos usuários');
        });

        it('Quando navegar pela tela home, acessar a lista de produtos', () => {
            cy.visit(Cypress.env('baseUrlE2E') + '/admin/home');
            cy.validarTexto(Selectors.subTituloPagina, 'Este é seu sistema para administrar seu ecommerce.');
            cy.clica(Selectors.botaoListarProdutos);
            cy.validarTexto(Selectors.tituloPagina, 'Lista dos Produtos');
        });

    });

});