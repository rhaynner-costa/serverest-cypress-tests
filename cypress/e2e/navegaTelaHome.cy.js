
const Selectors = require('../selectors/home');
const CONSTANTS = require('../helpers/constants');


describe('Testes e2e do serveRest', () => {
    const { emailValido, senha } = CONSTANTS;

    beforeEach(() => {
        cy.login(emailValido, senha);
        cy.visit(Cypress.env('baseUrlE2E') + '/admin/home');
    });

    context('Testes da navegacao pela tela home da aplicacao', () => {

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

});